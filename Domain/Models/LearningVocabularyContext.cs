using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Domain.Models
{
    public partial class LearningVocabularyContext : DbContext
    {
        public LearningVocabularyContext()
        {
        }

        public LearningVocabularyContext(DbContextOptions<LearningVocabularyContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Account> Account { get; set; }
        public virtual DbSet<Day> Day { get; set; }
        public virtual DbSet<DayTracking> DayTracking { get; set; }
        public virtual DbSet<Level> Level { get; set; }
        public virtual DbSet<Vocabulary> Vocabulary { get; set; }
        public virtual DbSet<VocabularyTracking> VocabularyTracking { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=DESKTOP-81STRLN\\LUCIFER;Database=LearningVocabulary;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.0-rtm-35687");

            modelBuilder.Entity<Account>(entity =>
            {
                entity.Property(e => e.Password).IsUnicode(false);

                entity.Property(e => e.Username).IsUnicode(false);
            });

            modelBuilder.Entity<Day>(entity =>
            {
                entity.Property(e => e.Date).HasColumnType("datetime");
            });

            modelBuilder.Entity<Vocabulary>(entity =>
            {
                entity.Property(e => e.Text).IsUnicode(false);
            });
        }
    }
}
