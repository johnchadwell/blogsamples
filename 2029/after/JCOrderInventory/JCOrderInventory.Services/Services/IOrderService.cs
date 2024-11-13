using JCOrderInventory.Core.Domain.DTO.Response;
using JCOrderInventory.Common.Helpers;
using JCOrderInventory.Core.Domain.Models;

namespace JCOrderInventory.Services
{
    public interface IOrderService
    {
        Task<ServiceResult<OrderResponseDTO>> GetOrderByIdAsync(int id);
        Task<ServiceResult<List<OrderResponseDTO>>> GetOrdersAsync();
        Task<ServiceResult<OrderResponseDTO>> PostOrderAsync(OrderDomain orderDomain);
        Task<ServiceResult<OrderResponseDTO>> PatchOrderSaleTotal(int orderId);

        //Task<ActionResult<IEnumerable<OrderDTO>>> GetOrdersAsync();
        //Task<IActionResult> GetOrderByIdAsync(int id);
        //Task<IActionResult> PostAsync(Order orderDTO);
        //Task<IActionResult> PutAsync(Order orderToUpdate);
        //Task<IActionResult> Purchased(int orderId, [FromBody] OrderPurchasedDTO dto);
        //Task<IActionResult> Shipped(int orderId, [FromBody] OrderShippedDTO dto);
        //Task<IActionResult> Cancelled(int orderId, [FromBody] OrderCancelledDTO dto);
        //Task<IActionResult> Completed(int orderId, [FromBody] OrderCompletedDTO dto);
        //Task<IActionResult> PatchCalulateOrderSaleTotal(int orderId, [FromBody] OrderPatchDTO dto);
        //Task<ActionResult<Order>> SetStatus(int orderId, [FromBody] OrderPatchDTO dto);
    }
}
