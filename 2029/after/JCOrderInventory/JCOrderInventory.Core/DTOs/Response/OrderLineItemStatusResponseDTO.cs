namespace JCOrderInventory.Core.Domain.DTO.Response
{
    public class OrderLineItemStatusResponseDTO
    {
        public int OrderLineItemStatusId { get; set; }
        public string Status { get; set; }
        public bool IsDeleted { get; set; }
    }
}
