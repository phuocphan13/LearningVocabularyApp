using System;
using System.Collections.Generic;
using System.Text;

namespace Core.UoW
{
    public interface IUnitOfWork
    {
        bool SaveChanges();
    }
}
