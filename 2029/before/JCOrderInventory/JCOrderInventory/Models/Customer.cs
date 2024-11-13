using NetTopologySuite.Geometries;

namespace JCOrderInventory.Models;

public class Customer
{
    public int CustomerId { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? Email { get; set; }
    public string? Address { get; set; }
    public string? ZipCode { get; set; }
    public string? County { get; set; }
    public string? City { get; set; }
    public string? State { get; set; }
    public string? Country { get; set; }
    public Point? Latitude { get; set; }
    public Point? Longitude { get; set; }
    public double? Long { get; set; }
    public double? Lat { get; set; }

    public string? NatGrid_Coord { get; set; }
    public string? GUID { get; set; }
    public bool IsAzureAccount { get; set; }

}


//public static class CustomerEndpoints
//{
//	public static void MapCustomerEndpoints (this IEndpointRouteBuilder routes)
//    {
//        routes.MapGet("/api/Customer", () =>
//        {
//            return new [] { new Customer() };
//        })
//        .WithName("GetAllCustomers");

//        routes.MapGet("/api/Customer/{id}", (int id) =>
//        {
//            //return new Customer { ID = id };
//        })
//        .WithName("GetCustomerById");

//        routes.MapPut("/api/Customer/{id}", (int id, Customer input) =>
//        {
//            return Results.NoContent();
//        })
//        .WithName("UpdateCustomer");

//        routes.MapPost("/api/Customer/", (Customer model) =>
//        {
//            //return Results.Created($"/Customers/{model.ID}", model);
//        })
//        .WithName("CreateCustomer");

//        routes.MapDelete("/api/Customer/{id}", (int id) =>
//        {
//            //return Results.Ok(new Customer { ID = id });
//        })
//        .WithName("DeleteCustomer");  
//    }
//}