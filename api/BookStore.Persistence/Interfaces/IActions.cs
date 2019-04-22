using System.Collections.Generic;
using BookStore.Domain.Entities;

namespace BookStore.Persistence.Interfaces
{
    public interface IActions<T> where T : BaseEntity
    {
        T Insert(T obj);

        T Update(T obj);

        bool Remove(int id);

        T Select(int id);

        IList<T> SelectAll();
    }
}
