using System;
using System.Collections.Generic;

namespace Domain.Models
{
    public partial class Vocabulary
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public string Meaning { get; set; }
        public int? Type { get; set; }
        public int? LevelId { get; set; }
    }
}
