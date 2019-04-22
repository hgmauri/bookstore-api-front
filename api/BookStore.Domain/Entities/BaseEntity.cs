using System;

namespace BookStore.Domain.Entities
{
    public abstract class BaseEntity
    {
        public Guid Id { get; set; }

        public DateTime CreateDate { get; set; }

        public bool Deleted { get; set; }

        protected BaseEntity()
        {
            Id = Guid.NewGuid();
        }
    }
}
