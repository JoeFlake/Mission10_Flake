import { useEffect, useState } from 'react';
import { BowlerAndTeam } from '../types/BowlerAndTeam';

function Bowlerslist() {
  const [bowlerData, setBowlerData] = useState<BowlerAndTeam[]>([]);

  useEffect(() => {
    const fetchBowlerData = async () => {
      const rsp = await fetch('http://localhost:5242/Bowling');
      const b = await rsp.json();
      setBowlerData(b);
    };
    fetchBowlerData();
  }, []);

  return (
    <div>
      {' '}
      {/* Add header */}
      <div className="row">
        <h3 className="text-centered">
          Here are the best bowlers for the Marlins and Sharks
        </h3>
      </div>
      <br></br> {/* Add the table */}
      <table className="table table-striped table-bordered">
        {' '}
        {/* Add the table-bordered class directly to the table element */}
        <thead>
          <tr>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zipcode</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlerData.map((b) => (
            <tr key={b.bowlerId}>
              <td>{b.bowlerFirstName}</td>
              <td>{b.bowlerMiddleInit}</td>
              <td>{b.bowlerLastName}</td>
              {/* get to teamname from team */}
              <td>{b.team.teamName}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Bowlerslist;
