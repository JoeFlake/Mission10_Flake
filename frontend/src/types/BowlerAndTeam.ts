export type BowlerAndTeam = {
  bowlerId: number;
  bowlerFirstName: string;
  bowlerMiddleInit: string;
  bowlerLastName: string;
  team: { teamName: string }; // Updated to reflect that 'team' is an object with 'teamName' property
  bowlerAddress: string;
  bowlerCity: string;
  bowlerState: string;
  bowlerZip: string;
  bowlerPhoneNumber: string;
};
