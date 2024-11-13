using JCOrderInventory.Infrastructure.Repository;
using JCOrderInventory.Core.Domain.DTO.Request;
using JCOrderInventory.Core.Domain.DTO.ResponseWrapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;
using JCOrderInventory.Common.Helpers;
using JCOrderInventory.Services;
using JCOrderInventory.Core.Domain.Mappers;
using System;
using Newtonsoft.Json;
using static Microsoft.ApplicationInsights.MetricDimensionNames.TelemetryContext;

namespace JCOrderInventory.Controllers;

[ApiController]
[Route("api/v1/[controller]")]
public class OrderController : ControllerBase {

    private readonly OrderDbContext _context;
    private IOrderService _orderService;
    private IValidationService _validationService;
    private IOrderMapperService _orderMapperService;
    private readonly ILogger<OrderController> _logger;

    public OrderController(OrderDbContext db, 
        IOrderService orderService,
        IValidationService validationService,
        IOrderMapperService orderMapperService,
        ILogger<OrderController> logger
        )
    {
        _context = db;
        _orderService = orderService;
        _validationService = validationService;
        _orderMapperService = orderMapperService;
        _logger = logger;
    }

    [HttpGet]
    [Route("~/api/v1/Orders")]
    [Authorize(Roles = "App.ReadWrite,App.Read,Manager")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(OrderResponseWrapperDTO))]
    [ProducesResponseType(StatusCodes.Status404NotFound, Type = typeof(ApiResultError))]
    [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ApiResultError))]
    [ProducesResponseType(StatusCodes.Status500InternalServerError, Type = typeof(ApiResultError))]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    //public async Task<ActionResult<IEnumerable<OrderResponseDTO>>> Get()
    public async Task<ActionResult> GetAsync()
    {
        return await GetOrderAsync().ConfigureAwait(false);

    }

    private async Task<ActionResult> GetOrderAsync()
    {
        try
        {
            var result = await _orderService.GetOrdersAsync();
            if (!result.Success)
            {
                return BadRequest(new ApiResultError()
                {
                    Message = result.Message, StatusCode = result.StatusCode,
                    Errors = result.Errors, Exception = result.Exception
                });

            }

            //return Ok(OrderMappers.OrderResponseDTOs_To_OrderResponseWrapperDTOs(result.Data));
            //return Ok(OrderMappers.OrderResponseDTOs_To_OrderResponseWrapperDTOs_using_Mapster(result.Data));
            return Ok(_orderMapperService.OrderResponseDTOs_To_OrderResponseWrapperDTOs(result.Data));
            //return Ok(_orderMapperService.OrderResponseDTOs_To_OrderResponseWrapperDTOs_using_Mapster(result.Data));


            //return Ok(result);

        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error occurred in GetOrderAsync");
            return StatusCode((int)HttpStatusCode.InternalServerError,
                new ApiResultError()
                {
                    Message = "Exception: GetOrderAsync",
                    StatusCode = (int)HttpStatusCode.InternalServerError,
                    Exception = ex.Message,
                });
        }
    }


    [HttpGet("{id}")]
    [Authorize(Roles = "App.ReadWrite,App.Read,Manager")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(OrderResponseWrapperDTO))]
    [ProducesResponseType(StatusCodes.Status404NotFound, Type = typeof(ApiResultError))]
    [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ApiResultError))]
    [ProducesResponseType(StatusCodes.Status500InternalServerError, Type = typeof(ApiResultError))]
    //[ProducesResponseType(StatusCodes.Status404NotFound, Type = typeof(ApiResult<OrderResponseWrapperDTO>))]
    //[ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ApiResult<OrderResponseWrapperDTO>))]
    //[ProducesResponseType(StatusCodes.Status500InternalServerError, Type = typeof(ApiResult<OrderResponseWrapperDTO>))]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]

    public async Task<ActionResult<OrderResponseWrapperDTO>> GetIdAsync(int id)
    {

        var errors = _validationService.GetValidationErrors(id);
        if (errors.Any())
        {
            return BadRequest(new ApiResultError
            {
                Message = ControllerErrorCode.VALIDATION_ERROR,
                StatusCode = (int)HttpStatusCode.BadRequest,
                Errors = errors,
            });



        }

        return await GetOrderByIdAsync(id).ConfigureAwait(false);

    }

    private async Task<ActionResult> GetOrderByIdAsync(int id)
    {
        try
        {
    var result = await _orderService.GetOrderByIdAsync(id);
            if (!result.Success)
            {
                return BadRequest(new ApiResultError()
                {
                    Message = result.Message, StatusCode = result.StatusCode,
                    Errors = result.Errors, Exception = result.Exception
                });

            }
            var results = result.Data;

            // message parameter
            _logger.LogInformation("OrderController.GetOrderByIdAsyncInfo 1: " + JsonConvert.SerializeObject(result.Data));
            // message parameter using string interpolation
            _logger.LogInformation($"OrderController.GetOrderByIdAsyncInfo 2: {result.Data.OrderId}");

            //* customDimentions properties
            _logger.LogInformation("OrderController.GetOrderByIdAsyncInfo 3: {OrderId}", result.Data.OrderId.ToString());
            _logger.LogInformation("OrderController.GetOrderByIdAsyncInfo 4: {OrderId}", result.Data.OrderId);
            _logger.LogInformation("OrderController.GetOrderByIdAsyncInfo 5: {OrderId}{CustomerId}", result.Data.OrderId, result.Data.CustomerId);

            //* structured logging
            _logger.LogInformation("OrderController.GetOrderByIdAsyncInfo 6: {Order}", JsonConvert.SerializeObject(result.Data));
            _logger.LogInformation("OrderController.GetOrderByIdAsyncInfo 7: {@data}", result.Data);

            //return Ok(OrderMappers.OrderResponseDTO_To_OrderResponseWrapperDTO(result.Data));
            //return Ok(OrderMappers.OrderResponseDTO_To_OrderResponseWrapperDTO_using_Mapster(result.Data));
            return Ok(_orderMapperService.OrderResponseDTO_To_OrderResponseWrapperDTO(result.Data));
            //return Ok(_orderMapperService.OrderResponseDTO_To_OrderResponseWrapperDTO_using_Mapster(result.Data));


        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error occurred in GetOrderByIdAsync for OrderId: ", id);
            return StatusCode((int)HttpStatusCode.InternalServerError,
                new ApiResultError()
                {
                    Message = "Exception: GetOrderByIdAsync",
                    StatusCode = (int)HttpStatusCode.InternalServerError,
                    Exception = ex.Message,
                });
        }
    }

    [HttpPost]
    [Authorize(Roles = "App.ReadWrite,Manager")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(OrderResponseWrapperDTO))]
    [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ApiResultError))]
    [ProducesResponseType(StatusCodes.Status500InternalServerError, Type = typeof(ApiResultError))]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    public async Task<ActionResult<OrderResponseWrapperDTO>> PostAsync(OrderRequestDTO orderRequestDTO)
    {
        var errors = _validationService.GetValidationErrors(orderRequestDTO);
        if (errors.Any())
        {
            return BadRequest(new ApiResultError
            {
                Message = ControllerErrorCode.VALIDATION_ERROR,
                StatusCode = (int)HttpStatusCode.BadRequest,
                Errors = errors,
            });
        }
        return await PostOrderAsync(orderRequestDTO).ConfigureAwait(false);
    }

    private async Task<ActionResult<OrderResponseWrapperDTO>> PostOrderAsync(OrderRequestDTO orderRequestDTO)
    {

        //return await PostOrderAsync(_orderMapperService.OrderRequestDTO_To_OrderDomain(orderRequestDTO)).ConfigureAwait(false);

        try
        {
            var result = await _orderService.PostOrderAsync(_orderMapperService.OrderRequestDTO_To_OrderDomain(orderRequestDTO));
            if (!result.Success)
            {
                return BadRequest(new ApiResultError()
                {
                    Message = result.Message, StatusCode = result.StatusCode,
                    Errors = result.Errors, Exception = result.Exception
                });
            }

            return Ok(_orderMapperService.OrderResponseDTO_To_OrderResponseWrapperDTO(result.Data));
            //return Ok(_orderMapperService.OrderResponseDTO_To_OrderResponseWrapperDTO_using_Mapster(result.Data));
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error occurred in PostOrderAsync: ", orderRequestDTO);
            return StatusCode((int)HttpStatusCode.InternalServerError,
                new ApiResultError()
                {
                    Message = "Exception: PostOrderAsync",
                    StatusCode = (int)HttpStatusCode.InternalServerError,
                    Exception = ex.Message,
                });
        }

    }



    [HttpPatch()]
    [Route("~/api/v1/OrderSaleTotal/{orderId}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ApiResultError))]
    [ProducesResponseType(StatusCodes.Status500InternalServerError, Type = typeof(ApiResultError))]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [Authorize(Roles = "App.ReadWrite,Manager")]
    public async Task<IActionResult> PatchOrderSaleTotal(int orderId)
    {

        var errors = _validationService.GetValidationErrors(orderId);
        if (errors.Any())
        {
            return BadRequest(new ApiResultError
            {
                Message = ControllerErrorCode.VALIDATION_ERROR,
                StatusCode = (int)HttpStatusCode.BadRequest, Errors = errors,
            });
        }
        return await PatchOrderSaleTotal(orderId);

    }

    private async Task<IActionResult> PatchOrderSaleTotalAsync(int orderId)
    {
        try
        {
            var result = await _orderService.PatchOrderSaleTotal(orderId);
            if (!result.Success)
            {
                return BadRequest(new ApiResultError()
                {
                    Message = result.Message, StatusCode = result.StatusCode,
                    Errors = result.Errors, Exception = result.Exception
                });
            }
            return NoContent();

        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error occurred in PatchOrderSaleTotalAsync: ", orderId);
            return StatusCode((int)HttpStatusCode.InternalServerError,
                new ApiResultError()
                {
                    Message = "Exception: PatchOrderSaleTotalAsync",
                    StatusCode = (int)HttpStatusCode.InternalServerError,
                    Exception = ex.Message,
                });
        }
    }





}
