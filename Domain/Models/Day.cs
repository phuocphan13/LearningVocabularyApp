using System;
using System.Collections.Generic;

namespace Domain.Models
{
    public partial class Day
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime? Date { get; set; }
    }
}
