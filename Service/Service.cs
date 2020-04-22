using Core.Repositories;
using Core.UoW;
using Domain.Models;
using Microsoft.AspNetCore.Hosting;
using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace Service
{
    public class Service : IService
    {
        private readonly IRepository<Vocabulary> _vocabularyRepository;
        private readonly IHostingEnvironment _hostingEnvironment;
        private readonly IUnitOfWork _unitOfWork;

        public Service(IRepository<Vocabulary> vocabularyRepository,
            IHostingEnvironment hostingEnvironment,
            IUnitOfWork unitOfWork)
        {
            _vocabularyRepository = vocabularyRepository;
            _hostingEnvironment = hostingEnvironment;
            _unitOfWork = unitOfWork;
        }



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
    }
}
