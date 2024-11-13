
using JCOrderInventory.Models;
using Microsoft.AspNetCore.Components.Server.ProtectedBrowserStorage;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Reflection.Emit;

namespace JCOrderInventory.Repository;

public class OrderDbContext : DbContext
{

    public OrderDbContext(DbContextOptions<OrderDbContext> options) : base(options) { }
    public DbSet<OrderStatus> OrderStatus => Set<OrderStatus>();
    public DbSet<OrderLineItemStatus> OrderLineItemStatus => Set<OrderLineItemStatus>();
    public DbSet<Order> Orders => Set<Order>();
    public DbSet<OrderLineItem> OrderLineItems => Set<OrderLineItem>();
    public DbSet<Customer> Customers => Set<Customer>();

    protected override void OnModelCreating(ModelBuilder builder)
    {
        //Perform the base configuration items, we do our stuff AFTER so we can configure it
        base.OnModelCreating(builder);
        //builder.Entity<OrderLineItemTotalsToday>().HasNoKey().ToView(null);
        //Temporary Rename
        //builder.Entity<ProductCategory>().ToTable("ProductCategories").HasKey(k => k.ProductCategoryId);
        //builder.Entity<Inventory>().ToTable("Inventories").HasKey(k => k.InventoryId);

    }

}
