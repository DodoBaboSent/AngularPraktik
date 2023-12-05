using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static AngularPraktik.MenuCafe;

namespace AngularPraktik.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MenuCafeController : Controller
    {
        [HttpGet]
        public IEnumerable<MenuCafe> Get()
        {
            IEnumerable<MenuCafe> oA = new[]
            {
                new MenuCafe { id=1,image="https://images.immediate.co.uk/production/volatile/sites/30/2023/01/Ponzu-tofu-poke-bowl-8733c67.jpg?quality=90&resize=440,400",name="Ponzu Tofu",price=10,vegan=true, section="tofu",childrenMenu=false },
                new MenuCafe { id=2,image="https://images.immediate.co.uk/production/volatile/sites/30/2023/01/Ponzu-tofu-poke-bowl-8733c67.jpg?quality=90&resize=440,400",name="meat",price=10,vegan=false, childrenMenu=false,section="meat" },
            };
            return oA;
        }
    }
}
