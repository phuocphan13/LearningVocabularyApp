using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Authorize(Policy = "ApiReader")]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CompanyController : Controller
    {
        //private readonly ICompanyService _companyService;

        //public CompanyController(ICompanyService companyService)
        //{
        //    _companyService = companyService;
        //}

        //[Authorize(Roles = "superadmin")]
        //[HttpGet]
        //public IActionResult Get()
        //{
        //    var result = _companyService.Get();
        //    return Ok(result);
        //}
    }
}