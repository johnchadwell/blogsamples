namespace JCOrderInventory.Core.Domain.DTO.ResponseWrapper;

public class OrderStatusResponseWrapperDTO
{
    public int OrderStatusId { get; set; }
    public string Status { get; set; }
    public bool IsDeleted { get; set; }
}
