using BookStore.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BookStore.Persistence.Mappings
{
    class BookstoreMap : IEntityTypeConfiguration<Book>
    {
        public void Configure(EntityTypeBuilder<Book> builder)
        {
            builder.Property(c => c.Title)
            .IsRequired();

            builder.Property(c => c.CopyNumber)
                .IsRequired();
        }
    }
}
