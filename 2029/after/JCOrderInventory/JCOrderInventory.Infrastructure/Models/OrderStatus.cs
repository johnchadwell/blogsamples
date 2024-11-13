namespace JCOrderInventory.Infrastructure.Models
{
    public class OrderStatus
    {
        public int OrderStatusId { get; set; }
        public string Status { get; set; }
        public bool IsDeleted { get; set; }
    }
}
