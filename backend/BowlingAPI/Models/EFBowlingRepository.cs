namespace BowlingAPI.Models
{
    public class EFBowlingRepository : IBowlingRepository
    {
        private BowlingLeagueContext _bowlingContext;
        public EFBowlingRepository(BowlingLeagueContext temp) {
            _bowlingContext = temp;
        }
        public IEnumerable<Bowler> GetAllBowlersWithTeams()
        {
            var joinedData = from bowler in _bowlingContext.Bowlers // Basic SQL query
                             join team in _bowlingContext.Teams
                             on bowler.TeamId equals team.TeamId
                             where team.TeamName == "Marlins" || team.TeamName == "Sharks" // Get only Marlins and Sharks
                             select new
                             {
                                 BowlerID = bowler.BowlerId,
                                 FirstName = bowler.BowlerFirstName,
                                 MiddleName = bowler.BowlerMiddleInit,
                                 LastName = bowler.BowlerLastName,
                                 Team = team, // Include the whole Team object
                                 Address = bowler.BowlerAddress,
                                 City = bowler.BowlerCity,
                                 State = bowler.BowlerState,
                                 Zip = bowler.BowlerZip,
                                 Phone = bowler.BowlerPhoneNumber
                             };

            var bowlerWithTeam = joinedData
                .Select(j => new Bowler
                {
                    BowlerId = j.BowlerID,
                    BowlerFirstName = j.FirstName,
                    BowlerMiddleInit = j.MiddleName,
                    BowlerLastName = j.LastName,
                    Team = j.Team, // Assign the Team object directly
                    BowlerAddress = j.Address,
                    BowlerCity = j.City,
                    BowlerState = j.State,
                    BowlerZip = j.Zip,
                    BowlerPhoneNumber = j.Phone
                })
                .ToList();

            return bowlerWithTeam;
        }

    }
}
