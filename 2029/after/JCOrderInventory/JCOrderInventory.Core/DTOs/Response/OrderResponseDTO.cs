using JCOrderInventory.Core.Domain.Models;

namespace JCOrderInventory.Core.Domain.DTO.Response;

public class OrderResponseDTO
{
    public int OrderId { get; set; }
    public Guid OrderGuid { get; set; }
    public int CustomerId { get; set; }
    public ICollection<OrderLineItemResponseDTO> OrderLineItems { get; set; }   
    public DateTime OrderDate { get; set; }
    public DateTime ShippingDate { get; set; }
    public DateTime DeliveryDate { get; set; }
    public string Status { get; set; }
    public OrderStatusResponseDTO OrderStatus { get; set; }
    public float TotalSale { get; set; }
    public double SaleTotal { get; set; }
    public Guid CreatedBy { get; set; }
    public DateTime CreatedOn { get; set; }

    public Guid ModifiedBy { get; set; }
    public DateTime ModifiedOn { get; set; }

    public static OrderResponseDTO ToDTO(OrderDomain order)
    {
        return new OrderResponseDTO()
        {
            OrderId = order.OrderId,
            OrderGuid = order.OrderGuid,    
            CustomerId = order.CustomerId,
            CreatedBy = order.CreatedBy,
            CreatedOn = order.CreatedOn,
            ModifiedBy = order.ModifiedBy,
            ModifiedOn = order.ModifiedOn,
            TotalSale = order.TotalSale,
            SaleTotal = order.SaleTotal,
            OrderStatus = order.OrderStatus == null ? null : (new OrderStatusResponseDTO
            {
                IsDeleted = order.OrderStatus.IsDeleted,
                OrderStatusId = order.OrderStatus.OrderStatusId,
                Status = order.OrderStatus.Status
            }),
            OrderLineItems = order.OrderLineItems.Select(oi => new OrderLineItemResponseDTO
            {
                OrderLineItemId = oi.OrderLineItemId,
                OrderLineItemGuid = oi.OrderLineItemGuid,
                OrderId = oi.OrderLineItemId,
                ProductId = oi.ProductId,
                Quantity = oi.Quantity,
                TotalPrice = oi.TotalPrice,
                PriceTotal = oi.PriceTotal,
                CreatedBy = oi.CreatedBy,
                ModifiedBy = oi.ModifiedBy,
                CreatedOn = oi.CreatedOn,
                ModifiedOn = oi.ModifiedOn,
                OrderLineItemStatus = oi.OrderLineItemStatus == null ? null : new OrderLineItemStatusResponseDTO
                {
                    OrderLineItemStatusId = oi.OrderLineItemStatus.OrderLineItemStatusId,
                    IsDeleted = oi.OrderLineItemStatus.IsDeleted,
                    Status = oi.OrderLineItemStatus.Status,
                }
            }).ToList(),
        };
    }

}
