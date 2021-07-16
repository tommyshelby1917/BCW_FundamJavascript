export default class TableTournament {
    constructor(teams) {
        this.teams = teams;
    }

    createTable() {
        this.teams.forEach(e => {
            console.log(e);
        });
    }

}