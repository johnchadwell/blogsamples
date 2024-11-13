using JCOrderInventory.Core.Domain.Models;
using JCOrderInventory.Core.Domain.DTO.Response;
using JCOrderInventory.Common.Helpers;
using JCOrderInventory.Infrastructure.Repository;
using JCOrderInventory.Core.Domain.Mappers;
using System.Net;
using Azure;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace JCOrderInventory.Services;

public class OrderService : IOrderService
{
    private readonly IOrderRepository _orderRepository;
    private IOrderMapperService _orderMapperService;
    private readonly ILogger<OrderService> _logger;

    public OrderService(IOrderRepository orderRepository, 
        IOrderMapperService orderMapperService,
        ILogger<OrderService> logger)
    {
        _orderRepository = orderRepository;
        _orderMapperService = orderMapperService;
        _logger = logger;
    }
    public async Task<ServiceResult<List<OrderResponseDTO>>> GetOrdersAsync()
    {
        try
        {
            var orders = await _orderRepository.GetAsync();
            if (orders.Count()==0)
            {
                return new ServiceResult<List<OrderResponseDTO>>(
                    new List<OrderResponseDTO>(), 
                    false,
                    ServiceErrorCode.GET_ORDERS_NOT_FOUND, 
                    (int)HttpStatusCode.NotFound);
            }
            //var _orderResponseDTOs = OrderMappers.OrderDomains_To_OrderResponseDTOs(orders.ToList());
            //var _orderResponseDTOs = OrderMappers.OrderDomains_To_OrderResponseDTOs_using_Mapster(orders.ToList());
            var _orderResponseDTOs = _orderMapperService.OrderDomains_To_OrderResponseDTOs(orders.ToList());
            //var _orderResponseDTOs = _orderMapperService.OrderDomains_To_OrderResponseDTOs_using_Mapster(orders.ToList());
            return new ServiceResult<List<OrderResponseDTO>>(
                _orderResponseDTOs.ToList(), 
                true, 
                "Success", 
                (int)HttpStatusCode.OK);
        }
        catch (Exception ex) {
            _logger.LogError(ex, "Error occurred in GetOrdersAsync");
            return new ServiceResult<List<OrderResponseDTO>>(
                new List<OrderResponseDTO>(), 
                false,
                ServiceErrorCode.GET_ORDERS_EXCEPTION,
                (int)HttpStatusCode.BadRequest, 
                ex.Message);
        }
    }
    public async Task<ServiceResult<OrderResponseDTO>> GetOrderByIdAsync(int id)
    {
        try
        {
            var order = await _orderRepository.GetByIdAsync(id);
            if (order == null)
            {
                return new ServiceResult<OrderResponseDTO>(
                    null, 
                    false, 
                    ServiceErrorCode.GET_ORDER_BY_ID_NOT_FOUND, (int)HttpStatusCode.NotFound);
            }
            _logger.LogInformation((new EventId(1003, "INFORMATION1")), "OrderService.GetOrderByIdAsyncInfo1: " + JsonConvert.SerializeObject(order));

            _logger.LogInformation((new EventId(1003, "INFORMATION2")), "OrderService.GetOrderByIdAsyncInfo2: {@data}", order);

            //OrderResponseDTO response = OrderMappers.OrderDomain_To_OrderResponseDTO(order);
            //OrderResponseDTO response = OrderMappers.OrderDomain_To_OrderResponseDTO_using_Mapster(order);
            OrderResponseDTO response = _orderMapperService.OrderDomain_To_OrderResponseDTO(order);
            //OrderResponseDTO response = _orderMapperService.OrderDomain_To_OrderResponseDTO_using_Mapster(order);
            return new ServiceResult<OrderResponseDTO>(
                response, 
                true, 
                "Success", 
                (int)HttpStatusCode.OK);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error occurred in GetOrderByIdAsync: ", id);
            return new ServiceResult<OrderResponseDTO>(
                null, 
                false, 
                ServiceErrorCode.GET_ORDER_BY_ID_EXCEPTION, 
                (int)HttpStatusCode.BadRequest, 
                ex.Message);
        }
    }

    public async Task<ServiceResult<OrderResponseDTO>> PostOrderAsync(OrderDomain orderDomain)
    {
        try
        {
            var order = await _orderRepository.PostAsync(orderDomain);
            OrderResponseDTO response = _orderMapperService.OrderDomain_To_OrderResponseDTO(order);
            return new ServiceResult<OrderResponseDTO>(
                response,
                true,
                "Success",
                (int)HttpStatusCode.OK);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error occurred in PostOrderAsync: ", orderDomain);
            return new ServiceResult<OrderResponseDTO>(
                null,
                false,
                ServiceErrorCode.POST_ORDER_EXCEPTION,
                (int)HttpStatusCode.BadRequest,
                ex.Message);
        }
    }


    public async Task<ServiceResult<OrderResponseDTO>> PatchOrderSaleTotal(int orderId)
    {
        try
        {
            var success = await _orderRepository.PatchOrderSaleTotal(orderId);
            if (success == 1)
            {
                return new ServiceResult<OrderResponseDTO>(
                    null,
                    true,
                    "Success",
                    (int)HttpStatusCode.NoContent);
            }
            else {
                return new ServiceResult<OrderResponseDTO>(
                    null,
                    false,
                    "Failure",
                    (int)HttpStatusCode.NoContent);
            }
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error occurred in PatchOrderSaleTotal: ", orderId);
            return new ServiceResult<OrderResponseDTO>(
                null,
                false,
                ServiceErrorCode.EXCEPTION,
                (int)HttpStatusCode.BadRequest,
                ex.Message);
        }
    }


}
