using System;
using JCOrderInventory.Repository;
using JCOrderInventory.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JCOrderInventory.Request;

namespace JCOrderInventory.Controllers;

[ApiController]
[Route("api/v1/[controller]")]
public class OrderController : ControllerBase
{

    private readonly OrderDbContext _context;
    public OrderController(OrderDbContext db)
    {
        _context = db;
    }

    [HttpGet]
    [Route("~/api/v1/Orders")]
    [Authorize(Roles = "App.ReadWrite,App.Read,Manager")]
    public async Task<ActionResult<IEnumerable<Order>>> GetOrdersAsync()

    {
        // add some comments again againasdasdd
        var orders = await _context.Orders.Include(j => j.OrderStatus).OrderByDescending(k => k.OrderDate).ToListAsync();
        return Ok(orders);
    }

    [HttpGet("{id}")]
    [Authorize(Roles = "App.ReadWrite,App.Read,Manager")]
    public async Task<IActionResult> GetOrderByIdAsync(int id)
    {
        // sdsdsd
        var order = await _context.Orders.Include(i => i.OrderLineItems).Include(j => j.OrderStatus).FirstAsync(i => i.OrderId == id);

        return Ok(order);
    }

    [HttpPost]
    [Authorize(Roles = "App.ReadWrite,Manager")]
    public async Task<IActionResult> PostAsync(Order orderDTO)
    {

        var status = _context.OrderStatus.Where(x => x.OrderStatusId == 1).First();
        if (status == null)
        {
            return NotFound("OrderStatusId == 1 (New) Not Found");
        }

        Order order = new Order()
        {
            OrderDate = orderDTO.OrderDate,
            OrderStatus = status,
            Status = status.Status,
            OrderGuid = orderDTO.OrderGuid,
            CreatedOn = orderDTO.CreatedOn,
            CreatedBy = orderDTO.CreatedBy,
            ModifiedOn = orderDTO.ModifiedOn,
            ModifiedBy = orderDTO.ModifiedBy,
            CustomerId = orderDTO.CustomerId,
            SaleTotal = orderDTO.SaleTotal,
            TotalSale = orderDTO.TotalSale,
            OrderId = 0
        };
        _context.Orders.Add(order);
        await _context.SaveChangesAsync();

        if (orderDTO.OrderLineItems.Any())
        {

            var itemStatus = _context.OrderLineItemStatus.Where(x => x.OrderLineItemStatusId == 1).First(); // New
            if (itemStatus == null)
            {
                return NotFound("OrderLineItemStatusId == 1 (New) Not Found");
            }
            foreach (OrderLineItem item in orderDTO.OrderLineItems)
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

        return Created($"/GetOrderByIdAsync?id={order.OrderId}", order);
    }

    [HttpPatch()]
    [Route("~/api/v1/CalulateOrderSaleTotal/{orderId}")]
    [Authorize(Roles = "App.ReadWrite,Manager")]
    public async Task<IActionResult> PatchCalulateOrderSaleTotal(int orderId, [FromBody] OrderPatchDTO dto)
    {
        if (orderId == 0) return BadRequest();

        var order = await _context.Orders.Include(j => j.OrderStatus).FirstAsync(i => i.OrderId == orderId);
        if (order == null) return NotFound();

        var orderLineItems = await _context.OrderLineItems.Include(i => i.OrderLineItemStatus)
            .Where(a => a.OrderId == orderId).ToListAsync();

        var total = 0.0;
        foreach (var item in orderLineItems)
        {
            total = total + item.PriceTotal;
        }

        if (dto.OrderStatus.OrderStatusId != order.OrderStatus.OrderStatusId &&
            dto.OrderStatus.OrderStatusId > 0)
        {
            order.SaleTotal = total;
        }
        else 
        {
            // update sale total only
            order.SaleTotal = total;
        }

        await _context.SaveChangesAsync();
        return NoContent();
    }

}
