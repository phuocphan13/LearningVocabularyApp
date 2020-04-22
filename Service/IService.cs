using Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace Service
{
    public interface IService
    {
        bool ImportFile();

        bool Register(AccountModel account);
    }
}
