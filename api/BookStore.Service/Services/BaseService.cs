using System.Collections.Generic;
using BookStore.Domain.Entities;
using BookStore.Persistence.Repositories;
using BookStore.Service.Interfaces;

namespace BookStore.Service.Services
{
    public class BaseService<T> : IService<T> where T : BaseEntity
    {
        private BaseRepository<T> repository = new BaseRepository<T>();

        public T Post(T item) => repository.Insert(item);

        public T Put(T item) => repository.Update(item);
        
        public bool Delete(int id) => repository.Remove(id);

        public T Get(int id) => repository.Select(id);

        public IList<T> Get() => repository.SelectAll();
    }
}
