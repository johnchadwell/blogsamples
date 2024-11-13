namespace JCOrderInventory.Core.Domain.Models
{
    public class OrderStatusDomain
    {
        public int OrderStatusId { get; set; }
        public string Status { get; set; }
        public bool IsDeleted { get; set; }
    }
}
