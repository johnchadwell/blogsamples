using Microsoft.EntityFrameworkCore;
using JCOrderInventory.Infrastructure.Repository;
using Microsoft.Identity.Web;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.OpenApi.Models;
using JCOrderInventory.Services;
using JCOrderInventory.Core.Domain.Mappers;
using Mapster;
using MapsterMapper;
using Serilog;

var builder = WebApplication.CreateBuilder(args);

// The following line enables Application Insights telemetry collection.
// Application Insights
builder.Services.AddApplicationInsightsTelemetry();


// Serilog logger
var log = new LoggerConfiguration()
 .CreateLogger();

//Add support to logging with SERILOG - read Serlilog property appsettings
builder.Host.UseSerilog((context, services, configuration) =>
    configuration.ReadFrom.Configuration(context.Configuration)
    );

// cors policy name
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


builder.Services.AddScoped<IOrderRepository, OrderRepository>();
builder.Services.AddScoped<IOrderService, OrderService>();
builder.Services.AddScoped<IValidationService, ValidationService>();
builder.Services.AddScoped<IOrderMapperService, OrderMapperService>();

builder.Services.AddSingleton(TypeAdapterConfig.GlobalSettings);
builder.Services.AddScoped<IMapper, ServiceMapper>();

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
//builder.Services.add
var app = builder.Build();

app.Logger.LogTrace("Log Trace from Program.cs");
app.Logger.LogDebug("Log Debug from Program.cs");
app.Logger.LogInformation("Log Information from Program.cs");
app.Logger.LogWarning("Log warning from Program.cs");
app.Logger.LogCritical("Log Critical from Program.cs");

// Configure the HTTP request pipeline.
if (app.Environment.IsEnvironment("Local") || app.Environment.IsEnvironment("Development"))
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//Add support to logging request with SERILOG
app.UseSerilogRequestLogging();

app.UseHttpsRedirection();
app.UseCors(policyName);
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();   

//app.MapCustomerEndpoints();

app.Run();
