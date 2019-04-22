using System.Collections.Generic;
using BookStore.Domain.Entities;

namespace BookStore.Service.Interfaces
{
    public interface IService<T> where T : BaseEntity
    {
        T Post(T item);

        T Put(T item);

        bool Delete(int id);

        T Get(int id);

        IList<T> Get();
    }
}
