using AngularBack.Models;
using Microsoft.AspNetCore.Authentication.Negotiate;
using Microsoft.EntityFrameworkCore;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy("MyAllowedOrigins", policy =>
    {
        policy.WithOrigins("https://localhost:44426").AllowAnyHeader().AllowAnyMethod();
    });
});
builder.Services.AddAuthentication(NegotiateDefaults.AuthenticationScheme).AddNegotiate();

//builder.Services.AddAuthorization(options =>
//{
    // By default, all incoming requests will be authorized according to the default policy.
//    options.FallbackPolicy = options.DefaultPolicy;
//});

var ServerVersion = new MySqlServerVersion(new Version(8, 0, 30));
builder.Services.AddDbContext<MenuCafeDBContext>(options => options.UseMySql("server=127.0.0.1;Port=3306;user=root;password=;database=Cafe", ServerVersion));
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors();
//app.UseAuthorization();

app.MapControllers();

app.Run();
