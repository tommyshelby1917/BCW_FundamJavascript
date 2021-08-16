import { teams } from "./teams.js";
import CreateTournament from "./classes/CreateTournament.js";
import PlayMatches from "./classes/PlayMatches.js";

// The tournament is created
const torneo = new CreateTournament(teams);

// Teams are mixed for the first round
const teamsOfTheTournament = torneo.createMatches();

// The tournament is going to play
console.log("===============================================\n==== COMIENZO DE LA FASE DE ELIMINATORIAS =====\n===============================================\n");

// Show the teams of the cup
console.log("Equipos del campeonato: ");
console.log(teams.join(', '));

new PlayMatches(teamsOfTheTournament).play();
