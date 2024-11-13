using JCOrderInventory.Core.Domain.DTO.Request;

namespace JCOrderInventory.Services
{
    public class ValidationService : IValidationService
    {
        public IList<string> GetValidationErrors(int id)
        {
            var result =  new List<string>();
            if (id == null || id <= 0) {
                result.Add("Id is invalid. Must be greater than 0");
            }
            return result;
        }

        public IList<string> GetValidationErrors(OrderRequestDTO orderRequestDTO)
        {
            var result = new List<string>();
            if (orderRequestDTO == null)
            {
                result.Add("orderRequestDTO is null");
            }
            if (orderRequestDTO.OrderId == null || orderRequestDTO.OrderId != 0)
            {
                result.Add("Id is invalid. Must be equal to 0 for New Orders");
            }
            if (orderRequestDTO.CustomerId == null || orderRequestDTO.CustomerId <= 0)
            {
                result.Add("Customer Id is invalid. Must be > than 0");
            }
            if (orderRequestDTO.OrderDate == null || orderRequestDTO.OrderDate < DateTime.Today)
            {
                result.Add("OrderDate is invalid. Must be <= Today");
            }
            if (orderRequestDTO.OrderStatus == null || orderRequestDTO.OrderStatus.Status != "New")
            {
                result.Add("Order Status is invalid. Must be = 'New'");
            }
            if (orderRequestDTO.SaleTotal == null || orderRequestDTO.SaleTotal < 0.0)
            {
                result.Add("Sale Total is invalid. Must be > 0.0");
            }
            return result;
        }
    }
}
