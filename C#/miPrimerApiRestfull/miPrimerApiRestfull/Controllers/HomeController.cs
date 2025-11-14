using Microsoft.AspNetCore.Mvc;

namespace miPrimerApiRestfull.Controllers
{
    [ApiController]
    [Route("/")]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        public IActionResult Index()
        { 
            return Ok("Pong2");
        }
    }
}
