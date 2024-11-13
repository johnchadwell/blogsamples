namespace JCOrderInventory.Core.Domain.DTO.Response;

public class OrderStatusResponseDTO
{
    public int OrderStatusId { get; set; }
    public string Status { get; set; }
    public bool IsDeleted { get; set; }
}
