using JCOrderInventory.Core.Domain.DTO.Request;

namespace JCOrderInventory.Services
{
    public interface IValidationService
    {
        IList<string> GetValidationErrors(int id);
        IList<string> GetValidationErrors(OrderRequestDTO orderRequestDTO);
    }
}
