﻿using Core.Repositories;
using Core.UoW;
using Domain.Models;
using Microsoft.AspNetCore.Hosting;
using Model;
using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Security.Policy;
using System.Text;

namespace Service
{
    public class Service : IService
    {
        private readonly IRepository<Vocabulary> _vocabularyRepository;
        private readonly IRepository<Account> _accountRepository;
        private readonly IHostingEnvironment _hostingEnvironment;
        private readonly IUnitOfWork _unitOfWork;

        public Service(IRepository<Vocabulary> vocabularyRepository,
            IRepository<Account> accountRepository,
            IHostingEnvironment hostingEnvironment,
            IUnitOfWork unitOfWork)
        {
            _vocabularyRepository = vocabularyRepository;
            _accountRepository = accountRepository;

            _hostingEnvironment = hostingEnvironment;
            _unitOfWork = unitOfWork;
        }

        #region Register
        public bool Register(AccountModel account)
        {
            if(CheckAccountExisted(account.Username))
            {
                return false;
            }
            var accountEntity = new Account();
            accountEntity.Name = account.Name;
            accountEntity.Username = account.Username;

            //var a = Hash.CreateMD5(Encoding.ASCII.GetBytes(account.Password));

            using (MD5 md5Hash = MD5.Create())
            {
                byte[] data = md5Hash.ComputeHash(Encoding.UTF8.GetBytes(account.Password));
                StringBuilder sBuilder = new StringBuilder();
                for (int i = 0; i < data.Length; i++)
                {
                    sBuilder.Append(data[i].ToString("x2"));
                }
                accountEntity.Password = sBuilder.ToString();
            }
            _accountRepository.Insert(accountEntity);
            return _unitOfWork.SaveChanges(); 
        }

        private bool CheckAccountExisted(string username)
        {
            var isExisted = _accountRepository.GetAll().Any(x => x.Username == username);
            return isExisted;
        }
        #endregion

        #region Import Excel
        public bool ImportFile()
        {
            var path = _hostingEnvironment.WebRootPath.Replace("Content", "Resources") + "\\Excel\\Vocabularies.xlsx";
            ExcelPackage excel = new ExcelPackage(new FileInfo(path));

            var validationRespone = ExcelDataValidation(excel);

            excel.SaveAs(new FileInfo(path));
            _vocabularyRepository.Insert(validationRespone);

            return _unitOfWork.SaveChanges();
        }

        private List<Vocabulary> ExcelDataValidation(ExcelPackage excel)
        {
            var listVocabularies = new List<Vocabulary>();
            var excelSheet = excel.Workbook.Worksheets[0];

            for (int row = 2; row <= excelSheet.Dimension.End.Row; row++)
            {
                if (excelSheet.Cells[row, 5].Value.ToString() != "Imported")
                {
                    var vocabulary = new Vocabulary();

                    vocabulary.Text = excelSheet.Cells[row, 1].Value.ToString();
                    vocabulary.Meaning = excelSheet.Cells[row, 2].Value.ToString();

                    var typeArray = excelSheet.Cells[row, 3].Value.ToString().Replace("(", "").Replace(")", "").Split(",");
                    var typeString = "";
                    for (int i = 0; i < typeArray.Length; i++)
                    {
                        switch (typeArray[i])
                        {
                            case "n":
                                typeString += ((int)TypeEnum.Noun).ToString();
                                break;
                            case "v":
                                typeString += ((int)TypeEnum.Verb).ToString();
                                break;
                            case "adj":
                                typeString += ((int)TypeEnum.Adjective).ToString();
                                break;
                            case "adv":
                                typeString += ((int)TypeEnum.Adverb).ToString();
                                break;
                        }
                    }
                    vocabulary.Type = int.Parse(typeString);

                    vocabulary.LevelId = int.Parse(excelSheet.Cells[row, 4].Value.ToString());


                    excelSheet.Cells[row, 5].Value = "Imported";

                    listVocabularies.Add(vocabulary);
                }
            }

            return listVocabularies;
        }
        #endregion
    }
}