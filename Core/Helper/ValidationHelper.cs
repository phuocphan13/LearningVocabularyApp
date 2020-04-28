﻿using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;
using System.Text.RegularExpressions;

namespace Core.Helper
{
    public static class ValidationHelper
    {
        public static bool CheckNullForString(string data)
        {
            if (data == null || data.Trim() == "")
            {
                return false;
            }
            return true;
        }

        public static bool CheckNullObject<T>(T data) where T : class
        {
            foreach (PropertyInfo propertyInfo in data.GetType().GetProperties())
            {
                if (propertyInfo.GetValue(data, null) == null)
                {
                    return false;
                }
            }
            return true;
        }

        public static bool CheckDatetimeObject<T>(T data) where T : class
        {
            foreach (PropertyInfo propertyInfo in data.GetType().GetProperties())
            {
                if(propertyInfo.PropertyType == typeof(DateTime))
                {
                    if(DateTime.Parse(propertyInfo.GetValue(data, null).ToString()) <  DateTime.Now)
                    {
                        return false;
                    }
                }
            }
            return true;
        }
    }
}
