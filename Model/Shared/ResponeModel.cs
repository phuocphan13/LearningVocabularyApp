﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Model.Shared
{
    public class ResponeModel<T>
    {
        public string Message { get; set; }

        public T Data { get; set; }
    }
}
