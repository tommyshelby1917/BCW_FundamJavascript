// Class that creates the tournament and mixes the teams for the first round
export default class CreateTournament {

    constructor(allTeams) {
        this.allTeams = allTeams;
    }

    get teams() {
        return this.mixTeams();
    }

    mixTeams() {
        return this.allTeams.sort(() => Math.random() - 0.5);
    }

    get matches() {
        return this.createMatches();
    }

    // function that draws teams to face between them
    createMatches() {
        let teams = this.mixTeams();
        let matches = [];
        let match = [];

        for (let i = 0; i < teams.length; i++) {
            if (match.length < 2) {
                match.push(teams[i])
            }
            else {
                matches.push(match);
                match = [];
                match.push(teams[i])
            }
        }

        matches.push(match);

        return matches;
    }

}