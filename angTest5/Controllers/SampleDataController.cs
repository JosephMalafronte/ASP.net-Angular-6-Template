using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace angTest5.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        public int numTracker = 0;

        public class exampleData
        {
            public string dateReceived { get; set; }
            public string source { get; set; }
            public string currentStatus { get; set; }
            public int invoiceNumber { get; set; }
            public string description { get; set; }
        }

        [HttpGet("[action]")]
        public IEnumerable<exampleData> exampleDatas()
        {
            numTracker = numTracker + 1;
            return Enumerable.Range(1, 5).Select(index => new exampleData
            {
                dateReceived = "May " + numTracker.ToString(),
                source = "ACI",
                currentStatus = "Received",
                invoiceNumber = numTracker,
                description = "test"
            });
        }

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }
    }
}
