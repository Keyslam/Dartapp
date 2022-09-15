using Microsoft.AspNetCore.Mvc;

namespace App.Controllers;

[Route("test")]
[ApiController]
public class TestController : ControllerBase {
    [HttpGet("")]
    public IActionResult Index() {
        return Ok();
    }

    [HttpGet("echo")]
    public ActionResult<string> Index(string message) {
        return message;
    }
}