using System;
using System.Collections.Generic;

namespace Domain.Models
{
    public partial class DayTracking
    {
        public int Id { get; set; }
        public int? DayId { get; set; }
        public int? AccountId { get; set; }
        public bool? IsComplete { get; set; }
        public int? WordsCounting { get; set; }
    }
}
