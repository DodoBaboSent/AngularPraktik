using Microsoft.AspNetCore.Mvc;

namespace AngularBack.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MenuCafeController : ControllerBase
    {
        [HttpGet]
        [Route("GetAll")]
        public IEnumerable<MenuCafe> Get()
        {
            IEnumerable<MenuCafe> oA = new[]
            {
                new MenuCafe { id=1,childrenMenu=false,image="https://images.immediate.co.uk/production/volatile/sites/30/2023/01/Ponzu-tofu-poke-bowl-8733c67.jpg?quality=90&resize=440,400",name="Ponzu Tofu",price=10,section="Tofu",vegan=true }
            };
            return oA;
        }
    }
}
