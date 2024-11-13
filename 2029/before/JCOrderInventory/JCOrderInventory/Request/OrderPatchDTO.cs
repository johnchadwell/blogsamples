using JCOrderInventory.Models;

namespace JCOrderInventory.Request
{
    public class OrderPatchDTO
    {
        public OrderStatus OrderStatus { get; set; }
        //public string Status { get; set; }
        //public float TotalSale { get; set; }
        public double SaleTotal { get; set; }
    }
}
