using Core.Repositories;
using Domain.Models;

namespace Domain.Repositories
{
    public class Repository<TEntity> : RepositoryBase<TEntity, LearningVocabularyContext>
        where TEntity : class
    {
        public Repository(LearningVocabularyContext context) : base(context)
        {
        }
    }
}
