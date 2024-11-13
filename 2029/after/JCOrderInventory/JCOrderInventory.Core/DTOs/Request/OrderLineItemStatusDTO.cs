namespace JCOrderInventory.Core.Domain.DTO.Request
{
    public class OrderLineItemStatusDTO
    {
        public int OrderLineItemStatusId { get; set; }
        public string Status { get; set; }
        public bool IsDeleted { get; set; }
    }
}
