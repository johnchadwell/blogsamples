namespace JCOrderInventory.Core.Domain.Models
{
    public class OrderLineItemStatusDomain
    {
        public int OrderLineItemStatusId { get; set; }
        public string Status { get; set; }
        public bool IsDeleted { get; set; }
    }
}
