using JCOrderInventory.Core.Domain.DTO.Response;
using JCOrderInventory.Core.Domain.Models;
using JCOrderInventory.Infrastructure.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JCOrderInventory.Core.Domain.Mappers
{
    public static class OrderRepoMappers {

        public static Order ToModel(OrderDomain order)
        {
            return new Order()
            {
                OrderId = order.OrderId,
                OrderGuid = order.OrderGuid,
                CustomerId = order.CustomerId,
                OrderDate = order.OrderDate,
                ShippingDate = order.ShippingDate,
                DeliveryDate = order.DeliveryDate,
                Status = order.Status,
                TotalSale = order.TotalSale,
                SaleTotal = order.SaleTotal,
                CreatedBy = order.CreatedBy,
                ModifiedBy = order.ModifiedBy,
                CreatedOn = order.CreatedOn,
                ModifiedOn = order.ModifiedOn,
                OrderStatus = order.OrderStatus == null ? null : (new OrderStatus
                {
                    IsDeleted = order.OrderStatus.IsDeleted,
                    OrderStatusId = order.OrderStatus.OrderStatusId,
                    Status = order.OrderStatus.Status
                }),
                OrderLineItems = order.OrderLineItems?.Select(oi => new OrderLineItem
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
                    OrderLineItemStatus = oi.OrderLineItemStatus == null ? null : new OrderLineItemStatus
                    {
                        OrderLineItemStatusId = oi.OrderLineItemStatus.OrderLineItemStatusId,
                        IsDeleted = oi.OrderLineItemStatus.IsDeleted,
                        Status = oi.OrderLineItemStatus.Status,
                    }
                }).ToList(),
            };
        }

        public static OrderDomain Order_To_OrderDomain(Order order)
        {
            return new OrderDomain()
            {
                OrderId = order.OrderId,
                OrderGuid = order.OrderGuid,
                CustomerId = order.CustomerId,
                OrderDate = order.OrderDate,
                ShippingDate = order.ShippingDate,
                DeliveryDate = order.DeliveryDate,
                Status = order.Status,
                TotalSale = order.TotalSale,
                SaleTotal = order.SaleTotal,
                CreatedBy = order.CreatedBy,
                ModifiedBy = order.ModifiedBy,
                CreatedOn = order.CreatedOn,
                ModifiedOn = order.ModifiedOn,
                OrderStatus = order.OrderStatus == null ? null : (new OrderStatusDomain
                {
                    IsDeleted = order.OrderStatus.IsDeleted,
                    OrderStatusId = order.OrderStatus.OrderStatusId,
                    Status = order.OrderStatus.Status
                }),
                OrderLineItems = order.OrderLineItems?.Select(oi => new OrderLineItemDomain
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
                    OrderLineItemStatus = oi.OrderLineItemStatus == null ? null : new OrderLineItemStatusDomain
                    {
                        OrderLineItemStatusId = oi.OrderLineItemStatus.OrderLineItemStatusId,
                        IsDeleted = oi.OrderLineItemStatus.IsDeleted,
                        Status = oi.OrderLineItemStatus.Status,
                    }
                }).ToList(),
            };
        }

        public static List<OrderDomain> Orders_To_OrderDomains(List<JCOrderInventory.Infrastructure.Models.Order> order)
        {
            List<OrderDomain> orders = new List<OrderDomain>() { };

            orders = order.Select(o => new OrderDomain
            {

                OrderId = o.OrderId,
                OrderGuid = o.OrderGuid,
                CustomerId = o.CustomerId,
                CreatedBy = o.CreatedBy,
                CreatedOn = o.CreatedOn,
                ModifiedBy = o.ModifiedBy,
                ModifiedOn = o.ModifiedOn,
                TotalSale = o.TotalSale,
                SaleTotal = o.SaleTotal,
                OrderStatus = o.OrderStatus == null ? null : (new OrderStatusDomain
                {
                    IsDeleted = o.OrderStatus.IsDeleted,
                    OrderStatusId = o.OrderStatus.OrderStatusId,
                    Status = o.OrderStatus.Status
                }),
                OrderLineItems = o.OrderLineItems?.Select(oi => new OrderLineItemDomain
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
                    OrderLineItemStatus = oi.OrderLineItemStatus == null ? null : new OrderLineItemStatusDomain
                    {
                        OrderLineItemStatusId = oi.OrderLineItemStatus.OrderLineItemStatusId,
                        IsDeleted = oi.OrderLineItemStatus.IsDeleted,
                        Status = oi.OrderLineItemStatus.Status,
                    }
                }).ToList(),

            }).ToList();
            return orders;


        }
    }
}
