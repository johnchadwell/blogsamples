using JCOrderInventory.Core.Domain.DTO.Response;

namespace JCOrderInventory.Core.Domain.DTO.ResponseWrapper
{
    public class OrderResponseWrapperDTO
    {

        public int OrderId { get; set; }
        public Guid OrderGuid { get; set; }
        public int CustomerId { get; set; }
        public ICollection<OrderLineItemResponseWrapperDTO> OrderLineItems { get; set; }
        public DateTime OrderDate { get; set; }
        public DateTime ShippingDate { get; set; }
        public DateTime DeliveryDate { get; set; }
        public string Status { get; set; }
        public OrderStatusResponseWrapperDTO OrderStatus { get; set; }
        public float TotalSale { get; set; }
        public double SaleTotal { get; set; }
        public Guid CreatedBy { get; set; }
        public DateTime CreatedOn { get; set; }

        public Guid ModifiedBy { get; set; }
        public DateTime ModifiedOn { get; set; }

        //public static OrderResponseWrapperDTO ToDTOWrapper(OrderResponseDTO order)
        //{
        //    return new OrderResponseWrapperDTO()
        //    {
        //        OrderId = order.OrderId,
        //        OrderGuid = order.OrderGuid,
        //        CustomerId = order.CustomerId,
        //        CreatedBy = order.CreatedBy,
        //        CreatedOn = order.CreatedOn,
        //        ModifiedBy = order.ModifiedBy,
        //        ModifiedOn = order.ModifiedOn,
        //        TotalSale = order.TotalSale,
        //        SaleTotal = order.SaleTotal,
        //        OrderStatus = order.OrderStatus == null ? null : (new OrderStatusResponseWrapperDTO
        //        {
        //            IsDeleted = order.OrderStatus.IsDeleted,
        //            OrderStatusId = order.OrderStatus.OrderStatusId,
        //            Status = order.OrderStatus.Status
        //        }),
        //        OrderLineItems = order.OrderLineItems?.Select(oi => new OrderLineItemResponseWrapperDTO
        //        {
        //            OrderLineItemId = oi.OrderLineItemId,
        //            OrderLineItemGuid = oi.OrderLineItemGuid,
        //            OrderId = oi.OrderLineItemId,
        //            ProductId = oi.ProductId,
        //            Quantity = oi.Quantity,
        //            TotalPrice = oi.TotalPrice,
        //            PriceTotal = oi.PriceTotal,
        //            CreatedBy = oi.CreatedBy,
        //            ModifiedBy = oi.ModifiedBy,
        //            CreatedOn = oi.CreatedOn,
        //            ModifiedOn = oi.ModifiedOn,
        //            OrderLineItemStatus = oi.OrderLineItemStatus == null ? null : new OrderLineItemStatusResponseWrapperDTO
        //            {
        //                OrderLineItemStatusId = oi.OrderLineItemStatus.OrderLineItemStatusId,
        //                IsDeleted = oi.OrderLineItemStatus.IsDeleted,
        //                Status = oi.OrderLineItemStatus.Status,
        //            }
        //        }).ToList(),
        //    };
        //}


        //public static List<OrderResponseWrapperDTO> ToDTOWrappers(List<OrderResponseDTO> order)
        //{

        //    List<OrderResponseWrapperDTO> orders = new List<OrderResponseWrapperDTO>() { };

        //    orders = order.Select(o => new OrderResponseWrapperDTO
        //    {
        //        OrderId = o.OrderId,
        //        OrderGuid = o.OrderGuid,
        //        CustomerId = o.CustomerId,
        //        CreatedBy = o.CreatedBy,
        //        CreatedOn = o.CreatedOn,
        //        ModifiedBy = o.ModifiedBy,
        //        ModifiedOn = o.ModifiedOn,
        //        TotalSale = o.TotalSale,
        //        SaleTotal = o.SaleTotal,
        //        OrderStatus = o.OrderStatus == null ? null : (new OrderStatusResponseWrapperDTO
        //        {
        //            IsDeleted = o.OrderStatus.IsDeleted,
        //            OrderStatusId = o.OrderStatus.OrderStatusId,
        //            Status = o.OrderStatus.Status
        //        }),
        //        OrderLineItems = o.OrderLineItems?.Select(oi => new OrderLineItemResponseWrapperDTO
        //        {
        //            OrderLineItemId = oi.OrderLineItemId,
        //            OrderLineItemGuid = oi.OrderLineItemGuid,
        //            OrderId = oi.OrderLineItemId,
        //            ProductId = oi.ProductId,
        //            Quantity = oi.Quantity,
        //            TotalPrice = oi.TotalPrice,
        //            PriceTotal = oi.PriceTotal,
        //            CreatedBy = oi.CreatedBy,
        //            ModifiedBy = oi.ModifiedBy,
        //            CreatedOn = oi.CreatedOn,
        //            ModifiedOn = oi.ModifiedOn,
        //            OrderLineItemStatus = oi.OrderLineItemStatus == null ? null : new OrderLineItemStatusResponseWrapperDTO
        //            {
        //                OrderLineItemStatusId = oi.OrderLineItemStatus.OrderLineItemStatusId,
        //                IsDeleted = oi.OrderLineItemStatus.IsDeleted,
        //                Status = oi.OrderLineItemStatus.Status,
        //            }
        //        }).ToList(),
        //    }).ToList();

        //    return orders;
        //}

    }
}