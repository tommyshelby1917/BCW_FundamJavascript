import { teams } from "./teams.js";
import CreateTournament from "./classes/CreateTournament.js";

const torneo = new CreateTournament(teams);
const teamsOfTheTournament = torneo.createMatches();

console.log(teamsOfTheTournament);