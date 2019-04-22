using BookStore.Domain.Entities;
using BookStore.Persistence.Mappings;
using Microsoft.EntityFrameworkCore;

namespace BookStore.Persistence.Contexts
{
    public class BookstoreContext : DbContext
    {
        public BookstoreContext()
        {

        }

        public BookstoreContext(DbContextOptions<BookstoreContext> options)
            :base(options)
        { }

        public DbSet<Book> Books { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
                optionsBuilder.UseSqlServer("Data Source=localhost\\SQLEXPRESS;Database=master;Initial Catalog=BookStoreDb;Integrated Security=SSPI;Trusted_Connection=True;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Book>(new BookstoreMap().Configure);
        }
    }
}
