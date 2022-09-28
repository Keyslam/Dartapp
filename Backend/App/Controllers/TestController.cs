using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using MySqlConnector;

namespace App.Controllers;

[Route("test")]
[ApiController]
public class TestController : ControllerBase
{
  [HttpGet("")]
  public IActionResult Index()
  {
    return Ok();
  }

  [HttpGet("echo")]
  public ActionResult<string> Index(string message)
  {
    return message;
  }

  [HttpGet("testdatabase")]
  public IActionResult TestDatabase()
  {
    try
    {
      var connectionString = "server=keyslam.com;uid=dartapp-development;pwd=D3velopment!;database=DartApp_development";

      using (MySqlConnection connection = new MySqlConnection(connectionString))
      {
        Console.WriteLine("\nQuery data example:");
        Console.WriteLine("=========================================\n");

        connection.Open();

        String sql = "SELECT * FROM Player";

        using (MySqlCommand command = new MySqlCommand(sql, connection))
        {
          using (MySqlDataReader reader = command.ExecuteReader())
          {
            while (reader.Read())
            {
              Console.WriteLine("{0} {1}", reader.GetInt32(0), reader.GetString(1));
            }
          }
        }
      }
    }
    catch (SqlException e)
    {
      Console.WriteLine(e.ToString());
    }


    return Ok();
  }
}