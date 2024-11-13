using JCOrderInventory.Core.Domain.Models;
using JCOrderInventory.Core.Domain.Mappers;
using JCOrderInventory.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using JCOrderInventory.Common.Helpers;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace JCOrderInventory.Infrastructure.Repository
{
    public class OrderRepository : IOrderRepository
    {
        private readonly OrderDbContext _context;
        private readonly ILogger<OrderRepository> _logger;
        public OrderRepository(OrderDbContext db,
        ILogger<OrderRepository> logger)
        {
            _context = db;
            _logger = logger;
        }
        public async Task<IEnumerable<OrderDomain>> GetAsync()
        {
            try
            {
                var orders = await _context.Orders.Include(j => j.OrderStatus).OrderByDescending(k => k.OrderDate).ToListAsync();
                //var orders = await _context.Orders.OrderByDescending(k => k.OrderDate).ToListAsync();
                return OrderRepoMappers.Orders_To_OrderDomains(orders);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred in GetAsync");
                throw new Exception($"{RepositoryErrorCode.GET_ORDERS_EXCEPTION}: {ex.Message}");
            }
        }

        public async Task<OrderDomain> GetByIdAsync(int id)
        {
            try
            {
                var order = await _context.Orders.Include(i => i.OrderLineItems).Include(j => j.OrderStatus).FirstOrDefaultAsync(i => i.OrderId == id);
                if (order == null)
                {
                    return null;
                }
                else
                {
                    _logger.LogCritical("OrderRepository.GetByIdAsync1: " + JsonConvert.SerializeObject(order));
                    _logger.LogWarning("OrderRepository.GetByIdAsync2: {@data}", order);

                    return OrderRepoMappers.Order_To_OrderDomain(order);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred in GetByIdAsync", id);
                throw new Exception($"{RepositoryErrorCode.GET_ORDER_BY_ID_EXCEPTION}: {ex.Message}"); 
            }
        }

        public async Task<OrderDomain> PostAsync(OrderDomain orderDomain)
        {
            try
            {
                var status = _context.OrderStatus.Where(x => x.OrderStatusId == 1).First();
                if (status == null)
                {
                    throw new Exception(RepositoryErrorCode.ORDER_STATUS_NOT_FOUND);
                }

                Order order = new Order()
                {
                    OrderDate = orderDomain.OrderDate,
                    OrderStatus = status,
                    Status = status.Status,
                    OrderGuid = orderDomain.OrderGuid,
                    CreatedOn = orderDomain.CreatedOn,
                    CreatedBy = orderDomain.CreatedBy,
                    ModifiedOn = orderDomain.ModifiedOn,
                    ModifiedBy = orderDomain.ModifiedBy,
                    CustomerId = orderDomain.CustomerId,
                    SaleTotal = orderDomain.SaleTotal,
                    TotalSale = orderDomain.TotalSale,
                    OrderId = 0
                };
                _context.Orders.Add(order);
                Console.WriteLine("GetOrderByIdAsync: " + JsonConvert.SerializeObject(order));

                await _context.SaveChangesAsync();

                if (orderDomain.OrderLineItems.Any())
                {

                    var itemStatus = _context.OrderLineItemStatus.Where(x => x.OrderLineItemStatusId == 1).First(); // New
                    if (itemStatus == null)
                    {
                        throw new Exception(RepositoryErrorCode.ORDER_LINE_ITEM_STATUS_NOT_FOUND);
                    }
                    foreach (OrderLineItemDomain item in orderDomain.OrderLineItems)
                    {
                        OrderLineItem orderLineItem = new OrderLineItem()
                        {
                            OrderLineItemId = 0,
                            OrderId = order.OrderId,
                            OrderLineItemStatus = itemStatus,
                            ProductId = item.ProductId,
                            PriceTotal = item.PriceTotal,
                            Quantity = item.Quantity,
                            TotalPrice = item.TotalPrice,
                            CreatedBy = item.CreatedBy,
                            CreatedOn = item.ModifiedOn,
                            ModifiedBy = item.ModifiedBy,
                            ModifiedOn = item.ModifiedOn,
                        };
                        _context.OrderLineItems.Add(orderLineItem);
                    }
                    await _context.SaveChangesAsync();
                }

                // Send this to the bus for the other services
                //return Created($"/GetOrderByIdAsync?id={order.OrderId}", order);

                return OrderRepoMappers.Order_To_OrderDomain(order);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred in PostAsync", orderDomain);
                throw new Exception($"{RepositoryErrorCode.POST_ORDER_EXCEPTION}: {ex.Message}");
            }

        }
        public async Task<int> PatchOrderSaleTotal(int orderId)
        {
            try
            {
                var order = await _context.Orders.Include(j => j.OrderStatus).FirstAsync(i => i.OrderId == orderId);
                if (order == null)
                    throw new Exception(RepositoryErrorCode.ORDER_NOT_FOUND);

                var orderLineItems = await _context.OrderLineItems.Include(i => i.OrderLineItemStatus)
                    .Where(a => a.OrderId == orderId).ToListAsync();
                if (orderLineItems == null)
                    throw new Exception(RepositoryErrorCode.ORDER_LINE_ITEMS_NOT_FOUND);

                var total = 0.0;
                foreach (var item in orderLineItems)
                {
                    total = total + item.PriceTotal;
                }
                order.SaleTotal = total;
                await _context.SaveChangesAsync();
                return 1;
            }
            catch (DbUpdateConcurrencyException ex)
            {
                _logger.LogError(ex, "Error occurred in PatchOrderSaleTotal", orderId);
                throw new Exception($"{RepositoryErrorCode.EXCEPTION}: PatchOrderSaleTotal: { ex.Message}");
            }
        }
    }
}
