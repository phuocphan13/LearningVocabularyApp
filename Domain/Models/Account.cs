﻿using System;
using System.Collections.Generic;

namespace Domain.Models
{
    public partial class Account
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public int? LevelId { get; set; }
    }
}
