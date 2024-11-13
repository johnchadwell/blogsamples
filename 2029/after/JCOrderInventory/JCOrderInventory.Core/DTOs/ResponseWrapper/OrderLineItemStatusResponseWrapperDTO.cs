namespace JCOrderInventory.Core.Domain.DTO.ResponseWrapper
{
    public class OrderLineItemStatusResponseWrapperDTO
    {
        public int OrderLineItemStatusId { get; set; }
        public string Status { get; set; }
        public bool IsDeleted { get; set; }
    }
}
