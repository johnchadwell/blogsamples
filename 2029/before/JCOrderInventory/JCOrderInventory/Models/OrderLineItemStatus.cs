namespace JCOrderInventory.Models
{
    public class OrderLineItemStatus
    {
        public int OrderLineItemStatusId { get; set; }
        public string Status { get; set; }
        public bool IsDeleted { get; set; }
    }
}
