## Controllers

Controllers are endpoints for the resources in the API

- A controller has the name of {Resource}Controller: BookController, PageController, PersonController, etc.
- A controller should contain multiple end-points
- The route of the controller should match it's name
- End-points should use the proper method
- - GET: Get 1 or more resources with optional query parameters
- - POST: Create a new resource
- - PUT: Update a existing reousrce
- - DELETE: Delete a resource
- End points return a IActionResult or ActionResult<T>
- - When a IActionResult is used, use the appropiate kind: Ok (200), NotFound (404), Etc

### Example

```csharp
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
```