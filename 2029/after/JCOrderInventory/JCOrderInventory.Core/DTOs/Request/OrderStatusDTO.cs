namespace JCOrderInventory.Core.Domain.DTO.Request;

public class OrderStatusDTO
{
    public int OrderStatusId { get; set; }
    public string Status { get; set; }
    public bool IsDeleted { get; set; }
}
