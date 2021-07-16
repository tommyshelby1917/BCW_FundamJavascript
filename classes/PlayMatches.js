export default class PlayMatches {
    constructor(matches) {
        this.matches = matches;
        this.winers = [];
    }

    play() {
        let newMatch = []

        function goals() {
            return Math.round(Math.random() * 10);
        }

        this.matches.forEach(team => {
            let match = {
                'team1': goals(),
                'team2': goals()
            }

            if (match.team1 > match.team2) {
                newMatch.push(team[0]);
            } else {
                newMatch.push(team[1]);
            }

            if (newMatch.length === 2) {
                this.winers.push(newMatch);
                newMatch = [];
            }

        });

        // Se juega la final por lo tanto anunciamos el ganador
        if (this.matches.length === 1) {
            return newMatch;
        }

        return this.winers;
    }
}