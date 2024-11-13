using JCOrderInventory.Core.Domain.Models;

namespace JCOrderInventory.Infrastructure.Repository
{
    public interface IOrderRepository
    {
        Task<IEnumerable<OrderDomain>> GetAsync();
        Task<OrderDomain> GetByIdAsync(int id);
        Task<OrderDomain> PostAsync(OrderDomain orderDomain);
        Task<int> PatchOrderSaleTotal(int orderId);
    }
}
