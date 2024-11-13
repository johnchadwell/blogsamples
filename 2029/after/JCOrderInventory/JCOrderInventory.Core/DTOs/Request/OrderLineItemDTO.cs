namespace JCOrderInventory.Core.Domain.DTO.Request;

public class OrderLineItemDTO
{
    public int OrderLineItemId { get; set; }
    public Guid OrderLineItemGuid { get; set; }
    public OrderLineItemStatusDTO OrderLineItemStatus { get; set; }
    public int OrderId { get; set; }
    public int ProductId { get; set; }
    public int Quantity { get; set; }
    public float TotalPrice { get; set; }
    public double PriceTotal { get; set; }
    public Guid CreatedBy { get; set; }
    public DateTime CreatedOn { get; set; }
    public Guid ModifiedBy { get; set; }
    public DateTime ModifiedOn { get; set; }

}
