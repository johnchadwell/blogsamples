using Microsoft.EntityFrameworkCore;
using JCOrderInventory.Repository;
using JCOrderInventory.Controllers;
using Microsoft.Identity.Web;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);
var policyName = "_myAllowSpecificOrigins";


builder.Host.ConfigureHostConfiguration(x =>
{
    x.AddJsonFile("appsettings.json", false, true);
    x.AddJsonFile($"appsettings.{Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT")}.json", false, true);
    x.AddEnvironmentVariables();
});
Console.WriteLine("builder.Environment.EnvironmentName: " + builder.Environment.EnvironmentName);
Console.WriteLine("builder.Environment.ApplicationName: " + builder.Environment.ApplicationName);
Console.WriteLine("builder.Environment.ContentRootPath: " + builder.Environment.ContentRootPath);
Console.WriteLine("builder.Environment.WebRootPath: " + builder.Environment.WebRootPath);

// Add services to the container.
builder.Services.AddDbContext<OrderDbContext>(options => options.UseSqlServer(
builder.Configuration.GetConnectionString("JCOrderInventoryDb"), x => x.UseNetTopologySuite()
));

// Add services to the container.
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddMicrosoftIdentityWebApi(builder.Configuration.GetSection("AzureAd"));

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(option =>
{
    option.SwaggerDoc("v1", new OpenApiInfo { Title = "Demo API", Version = "v1" });
    option.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        In = ParameterLocation.Header,
        Description = "Please enter a valid token",
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        BearerFormat = "JWT",
        Scheme = "Bearer"
    });
    option.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type=ReferenceType.SecurityScheme,
                    Id="Bearer"
                }
            },
            new string[]{}
        }
    });
});
//string[] origins = { "https://localhost:3000", "https://localhost:3000/api/v1/ProductCategory", "http://localhost:4200" };
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: policyName,
                      builder =>
                      {
                          builder
                            //.WithOrigins(origins)
                            .AllowAnyOrigin()
                            .WithMethods("GET","PUT","POST","DELETE","PATCH")
                            .AllowAnyHeader();
                      });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsEnvironment("Local") || app.Environment.IsEnvironment("Development"))
{
    app.UseSwagger();
    app.UseSwaggerUI();


}

app.UseHttpsRedirection();
app.UseCors(policyName);
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();   

//app.MapCustomerEndpoints();

app.Run();
