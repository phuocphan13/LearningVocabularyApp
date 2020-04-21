using System;
using System.Collections.Generic;

namespace Domain.Models
{
    public partial class VocabularyTracking
    {
        public int Id { get; set; }
        public int? AccountId { get; set; }
        public int? VocabularyId { get; set; }
        public bool? IsRemember { get; set; }
        public int? RemeberTimes { get; set; }
        public int? NotRememberTimes { get; set; }
        public int? RemeberLevel { get; set; }
    }
}
