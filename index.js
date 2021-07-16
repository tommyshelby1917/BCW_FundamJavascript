import { teams } from "./teams.js";
import CreateTournament from "./classes/CreateTournament.js";
import TableTournament from "./classes/TableTournament.js";
import PlayMatches from "./classes/PlayMatches.js";


const torneo = new CreateTournament(teams);

// 16vos
const teamsOfTheTournament = torneo.createMatches();
console.log("---- DECISEISAVOS DE FINAL----\n");
console.log(teamsOfTheTournament);

// Quien pasa a Octavos?
const toOctavos = new PlayMatches(teamsOfTheTournament).play();
console.log("---- OCTAVOS DE FINAL----\n");
console.log(toOctavos);


// Quien pasa a Semis?
const secondRound = new PlayMatches(toOctavos).play();
console.log("---- SEMIFINALES ----\n");
console.log(secondRound);

// Quien juega la final?
const finalRound = new PlayMatches(secondRound).play();
console.log("---- FINAL ----\n");
console.log(finalRound);

// Ganador del torneo
const winerAnnouncement = new PlayMatches(finalRound).play();
console.log(`
********
* EL GANADOR DEL TORNEO ES: ${winerAnnouncement[0].toUpperCase()}!!!!!
********
`
);
