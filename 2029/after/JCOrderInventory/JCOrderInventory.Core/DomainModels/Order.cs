﻿using JCOrderInventory.Core.Domain.DTO.Response;

namespace JCOrderInventory.Core.Domain.Models;

public class OrderDomain
{
    public int OrderId { get; set; }
    public Guid OrderGuid { get; set; }
    public int CustomerId { get; set; }
    public ICollection<OrderLineItemDomain> OrderLineItems { get; set; }   
    public DateTime OrderDate { get; set; }
    public DateTime ShippingDate { get; set; }
    public DateTime DeliveryDate { get; set; }
    public string Status { get; set; }
    public OrderStatusDomain OrderStatus { get; set; }
    public float TotalSale { get; set; }
    public double SaleTotal { get; set; }
    public Guid CreatedBy { get; set; }
    public DateTime CreatedOn { get; set; }

    public Guid ModifiedBy { get; set; }
    public DateTime ModifiedOn { get; set; }

    //public static OrderResponseDTO ToDTO(OrderDomain order)
    //{
    //    return new OrderResponseDTO()
    //    {
    //        OrderId = order.OrderId,
    //        OrderGuid = order.OrderGuid,
    //        CustomerId = order.CustomerId,
    //        OrderDate = order.OrderDate,
    //        ShippingDate = order.ShippingDate,
    //        DeliveryDate = order.DeliveryDate,
    //        Status = order.Status,
    //        TotalSale = order.TotalSale,
    //        SaleTotal = order.SaleTotal,
    //        CreatedBy = order.CreatedBy,
    //        ModifiedBy = order.ModifiedBy,
    //        CreatedOn = order.CreatedOn,
    //        ModifiedOn = order.ModifiedOn,
    //        OrderStatus = order.OrderStatus == null ? null : (new OrderStatusResponseDTO
    //        {
    //            IsDeleted = order.OrderStatus.IsDeleted,
    //            OrderStatusId = order.OrderStatus.OrderStatusId,
    //            Status = order.OrderStatus.Status
    //        }),
    //        OrderLineItems = order.OrderLineItems?.Select(oi => new OrderLineItemResponseDTO
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
    //            OrderLineItemStatus = oi.OrderLineItemStatus == null ? null : new OrderLineItemStatusResponseDTO
    //            {
    //                OrderLineItemStatusId = oi.OrderLineItemStatus.OrderLineItemStatusId,
    //                IsDeleted = oi.OrderLineItemStatus.IsDeleted,
    //                Status = oi.OrderLineItemStatus.Status,
    //            }
    //        }).ToList(),
    //    };
    //}

    //public static List<OrderResponseDTO> ToDTOs(List<OrderDomain> order)
    //{
    //    List<OrderResponseDTO> orders = new List<OrderResponseDTO>() { };

    //    orders = order.Select(o => new OrderResponseDTO
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
    //        OrderStatus = o.OrderStatus == null ? null : (new OrderStatusResponseDTO
    //        {
    //            IsDeleted = o.OrderStatus.IsDeleted,
    //            OrderStatusId = o.OrderStatus.OrderStatusId,
    //            Status = o.OrderStatus.Status
    //        }),
    //        OrderLineItems = o.OrderLineItems?.Select(oi => new OrderLineItemResponseDTO
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
    //            OrderLineItemStatus = oi.OrderLineItemStatus == null ? null : new OrderLineItemStatusResponseDTO
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