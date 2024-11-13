namespace JCOrderInventory.Models;

public class Order
{
    public int OrderId { get; set; }
    public Guid OrderGuid { get; set; }
    public int CustomerId { get; set; }
    public ICollection<OrderLineItem> OrderLineItems { get; set; }   
    public DateTime OrderDate { get; set; }
    public DateTime ShippingDate { get; set; }
    public DateTime DeliveryDate { get; set; }
    public string Status { get; set; }
    public OrderStatus? OrderStatus { get; set; }
    public float TotalSale { get; set; }
    public double SaleTotal { get; set; }
    public Guid CreatedBy { get; set; }
    public DateTime CreatedOn { get; set; }

    public Guid ModifiedBy { get; set; }
    public DateTime ModifiedOn { get; set; }



}
