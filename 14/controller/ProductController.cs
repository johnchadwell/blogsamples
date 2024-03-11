using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JCOrderInventory.Models;
using JCOrderInventory.Repository;
using Microsoft.AspNetCore.Authorization;
using JCOrderInventory.Extensions;
using System.Linq.Dynamic.Core;
using JCOrderInventory.Utility;

namespace JCOrderInventory.Controllers;

[Route("api/v1/[controller]")]
[ApiController]
public class ProductController : ControllerBase
{
    private readonly OrderDbContext _context;
    private string sortcol = "";

    public ProductController(OrderDbContext context)
    {
        _context = context;
    }

    // GET: api/Product
    [HttpGet]
    [Route("~/api/v1/Products")]
    [Authorize(Roles = "App.ReadWrite,App.Read,Manager")]
    public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
    {
        return await _context.Products.Include(a => a.ProductCategory).Include(b => b.ProductSubCategory).ToListAsync();
    }

    // GET: api/v1/ProductsBySubCatPaged
    [HttpGet]
    [Route("~/api/v1/ProductsBySubCatPaged/{subcategoryid}/{page}/{itemsPerPage}")]
    [Authorize(Roles = "App.ReadWrite,App.Read,Manager")]
    public async Task<ActionResult<JCPagedResult<Product>>> GetProductsBySubCatPaged(int subcategoryid, int page, int itemsPerPage)
    {

        var results = _context.Products.Include(a => a.ProductCategory).Include(b => b.ProductSubCategory)
            .Where(a => a.ProductSubCategory.ProductSubCategoryId == subcategoryid)
            .GetPaged(page, itemsPerPage);

        return results;
    }


    // GET: api/Products/SubCategory/1
    [HttpGet]
    [Route("~/api/v1/Products/Subcategory/{id}")]
    [Authorize(Roles = "App.ReadWrite,App.Read,Manager")]
    public async Task<ActionResult<IEnumerable<Product>>> GetProductsBySubCategory(int id)
    {
        var products = await _context.Products
            .Include(a => a.ProductCategory)
            .Include(b => b.ProductSubCategory)
            .Where(a => a.ProductSubCategory.ProductSubCategoryId == id).ToListAsync();

        if (products == null)
        {
            return NotFound();
        }
        return products;
    }


    // GET: api/Product/5
    [HttpGet("{id}")]
    [Authorize(Roles = "App.ReadWrite,App.Read,Manager")]
    public async Task<ActionResult<Product>> GetProduct(int id)
    {
        var product = await _context.Products
            .Include(a => a.ProductCategory)
            .Include(b => b.ProductSubCategory)
            .Where(a => a.ProductId == id).FirstAsync();

        if (product == null)
        {
            return NotFound();
        }

        return product;
    }

    // PUT: api/Product/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    [Authorize(Roles = "App.ReadWrite,Manager")]
    public async Task<IActionResult> PutProduct(int id, Product product)
    {
        if (id != product.ProductId)
        {
            return BadRequest();
        }
        if (product.ProductGuid == Guid.Empty) { product.ProductGuid = Guid.NewGuid(); }
        var cat = _context.ProductCategories.Where(x => x.ProductCategoryId == product.ProductCategory.ProductCategoryId).First();
        if (cat != null)
        {
            product.ProductCategory = cat;
        }
        else
        {
            return NotFound();
        }

        var subcat = _context.ProductSubCategories.Where(x => x.ProductSubCategoryId == product.ProductSubCategory.ProductSubCategoryId).First();
        if (subcat != null)
        {
            product.ProductSubCategory = subcat;
        }
        else
        {
            return NotFound();
        }

        _context.Entry(product).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!ProductExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

    // POST: api/Product
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    [Authorize(Roles = "App.ReadWrite,Manager")]
    public async Task<ActionResult<Product>> PostProduct(Product product)
    {

        var cat = _context.ProductCategories.Where(x => x.ProductCategoryId == product.ProductCategory.ProductCategoryId).First();
        if (cat != null)
        {
            product.ProductCategory = cat;
        }
        else
        {
            return NotFound();
        }

        var subcat = _context.ProductSubCategories.Where(x => x.ProductSubCategoryId == product.ProductSubCategory.ProductSubCategoryId).First();
        if (subcat != null)
        {
            product.ProductSubCategory = subcat;
        }
        else
        {
            return NotFound();
        }

        _context.Products.Add(product);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetProduct", new { id = product.ProductId }, product);
    }

    // DELETE: api/Product/5
    [HttpDelete("{id}")]
    [Authorize(Roles = "App.ReadWrite,Manager")]
    public async Task<IActionResult> DeleteProduct(int id)
    {
        var product = await _context.Products.FindAsync(id);
        if (product == null)
        {
            return NotFound();
        }

        _context.Products.Remove(product);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool ProductExists(int id)
    {
        return _context.Products.Any(e => e.ProductId == id);
    }
}

