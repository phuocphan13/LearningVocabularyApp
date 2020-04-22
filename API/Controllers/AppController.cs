using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Model;
using Service;

namespace API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AppController : Controller
    {
        private readonly IService _service;

        public AppController(IService service)
        {
            _service = service;
        }

        [HttpGet]
        public IActionResult ImportFile()
        {
            var result = _service.ImportFile();
            return Ok(result);
        }

        [HttpPost]
        public IActionResult Register(AccountModel account)
        {
            var result = _service.Register(account);
            return Ok(result);
        }
    }
}