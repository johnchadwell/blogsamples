using JCOrderInventory.Core.Domain.DTO.Request;
using JCOrderInventory.Core.Domain.DTO.Response;
using JCOrderInventory.Core.Domain.DTO.ResponseWrapper;
using JCOrderInventory.Core.Domain.Models;
using JCOrderInventory.Core.Domain.Models;
using Mapster;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JCOrderInventory.Core.Domain.Mappers
{
    public class OrderMapperService : IOrderMapperService {

        public OrderResponseDTO OrderDomain_To_OrderResponseDTO(OrderDomain order)
        {
            return new OrderResponseDTO()
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
                OrderStatus = order.OrderStatus == null ? null : (new OrderStatusResponseDTO
                {
                    IsDeleted = order.OrderStatus.IsDeleted,
                    OrderStatusId = order.OrderStatus.OrderStatusId,
                    Status = order.OrderStatus.Status
                }),
                OrderLineItems = order.OrderLineItems?.Select(oi => new OrderLineItemResponseDTO
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

        public List<OrderResponseDTO> OrderDomains_To_OrderResponseDTOs(List<OrderDomain> order)
        {
            List<OrderResponseDTO> orders = new List<OrderResponseDTO>() { };

            orders = order.Select(o => new OrderResponseDTO
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
                OrderStatus = o.OrderStatus == null ? null : (new OrderStatusResponseDTO
                {
                    IsDeleted = o.OrderStatus.IsDeleted,
                    OrderStatusId = o.OrderStatus.OrderStatusId,
                    Status = o.OrderStatus.Status
                }),
                OrderLineItems = o.OrderLineItems?.Select(oi => new OrderLineItemResponseDTO
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

            }).ToList();
            return orders;


        }

        public OrderDomain OrderRequestDTO_To_OrderDomain(OrderRequestDTO order)
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

        public List<OrderDomain> OrderRequestDTOs_To_OrderDomains(List<OrderRequestDTO> order)
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


        public OrderResponseWrapperDTO OrderResponseDTO_To_OrderResponseWrapperDTO(OrderResponseDTO order)
        {
            return new OrderResponseWrapperDTO()
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
                OrderStatus = order.OrderStatus == null ? null : (new OrderStatusResponseWrapperDTO
                {
                    IsDeleted = order.OrderStatus.IsDeleted,
                    OrderStatusId = order.OrderStatus.OrderStatusId,
                    Status = order.OrderStatus.Status
                }),
                OrderLineItems = order.OrderLineItems?.Select(oi => new OrderLineItemResponseWrapperDTO
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
                    OrderLineItemStatus = oi.OrderLineItemStatus == null ? null : new OrderLineItemStatusResponseWrapperDTO
                    {
                        OrderLineItemStatusId = oi.OrderLineItemStatus.OrderLineItemStatusId,
                        IsDeleted = oi.OrderLineItemStatus.IsDeleted,
                        Status = oi.OrderLineItemStatus.Status,
                    }
                }).ToList(),
            };
        }

        public List<OrderResponseWrapperDTO> OrderResponseDTOs_To_OrderResponseWrapperDTOs(List<OrderResponseDTO> order)
        {

            List<OrderResponseWrapperDTO> orders = new List<OrderResponseWrapperDTO>() { };

            orders = order.Select(o => new OrderResponseWrapperDTO
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
                OrderStatus = o.OrderStatus == null ? null : (new OrderStatusResponseWrapperDTO
                {
                    IsDeleted = o.OrderStatus.IsDeleted,
                    OrderStatusId = o.OrderStatus.OrderStatusId,
                    Status = o.OrderStatus.Status
                }),
                OrderLineItems = o.OrderLineItems?.Select(oi => new OrderLineItemResponseWrapperDTO
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
                    OrderLineItemStatus = oi.OrderLineItemStatus == null ? null : new OrderLineItemStatusResponseWrapperDTO
                    {
                        OrderLineItemStatusId = oi.OrderLineItemStatus.OrderLineItemStatusId,
                        IsDeleted = oi.OrderLineItemStatus.IsDeleted,
                        Status = oi.OrderLineItemStatus.Status,
                    }
                }).ToList(),
            }).ToList();

            return orders;
        }

        public OrderResponseDTO OrderDomain_To_OrderResponseDTO_using_Mapster(OrderDomain order)
        {
            return order.Adapt<OrderResponseDTO>();
        }

        public IList<OrderResponseDTO> OrderDomains_To_OrderResponseDTOs_using_Mapster(IList<OrderDomain> orderList)
        {
            var r = orderList.Adapt<IList<OrderResponseDTO>>();
            return r;
        }

        public OrderResponseWrapperDTO OrderResponseDTO_To_OrderResponseWrapperDTO_using_Mapster(OrderResponseDTO order)
        {
            return order.Adapt<OrderResponseWrapperDTO>();
        }

        public IList<OrderResponseWrapperDTO> OrderResponseDTOs_To_OrderResponseWrapperDTOs_using_Mapster(IList<OrderResponseDTO> orderList)
        {
            var r = orderList.Adapt<IList<OrderResponseWrapperDTO>>();
            return r;
        }




    }
}
