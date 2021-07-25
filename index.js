import { teams } from "./teams.js";
import CreateTournament from "./classes/CreateTournament.js";
import TableTournament from "./classes/TableTournament.js";
import PlayMatches from "./classes/PlayMatches.js";

// Se crea el torneo
const torneo = new CreateTournament(teams);

// Se mezclan los equipos para la primera ronda
const teamsOfTheTournament = torneo.createMatches();

// Se juega el torneo
console.log("===============================================\n==== COMIENZO DE LA FASE DE ELIMINATORIAS =====\n===============================================\n");
new PlayMatches(teamsOfTheTournament).play();