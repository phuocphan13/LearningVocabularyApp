using Core.UoW;
using Domain.Models;
using Microsoft.Extensions.Logging;

namespace Domain.UoW
{
    public class UnitOfWork : UnitOfWorkBase<LearningVocabularyContext>
    {
        public UnitOfWork(LearningVocabularyContext gmcContext, ILogger<UnitOfWork> logger) : base(gmcContext, logger)
        {
        }
    }
}
