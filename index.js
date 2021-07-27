import { teams } from "./teams.js";
import CreateTournament from "./classes/CreateTournament.js";
import TableTournament from "./classes/TableTournament.js";
import PlayMatches from "./classes/PlayMatches.js";

// The tournament is created
const torneo = new CreateTournament(teams);

// Teams are mixed for the first round
const teamsOfTheTournament = torneo.createMatches();

// The tournament is going to play
console.log("===============================================\n==== COMIENZO DE LA FASE DE ELIMINATORIAS =====\n===============================================\n");
new PlayMatches(teamsOfTheTournament).play();

//TODO 3era y 4rta posicion