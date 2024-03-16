using BowlingAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BowlingAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlingController : ControllerBase
    {
        private IBowlingRepository _bowlingRepository;

        public BowlingController(IBowlingRepository temp) // constructor
        {
            _bowlingRepository = temp;
        }

        public IEnumerable<Bowler> Get()
        {
            var BowlerData = _bowlingRepository.GetAllBowlersWithTeams(); // Call this to get the linq query from EF Repo

            return BowlerData;
        }
    }
}

