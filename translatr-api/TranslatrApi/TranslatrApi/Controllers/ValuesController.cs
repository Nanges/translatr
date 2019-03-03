using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using TranslatrApi.Models;
using TranslatrApi.Services;

namespace TranslatrApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly KeyService _keyService;

        public ValuesController(KeyService keyService)
        {
            _keyService = keyService;
        }


        [HttpGet]
        public ActionResult<List<Key>> Ping() {
            return _keyService.Root();
        }


        //[HttpGet]
        //public ActionResult<IEnumerable<string>> Get() => new string[] { "value1", "value2" };

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
