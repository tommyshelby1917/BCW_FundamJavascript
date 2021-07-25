export default class PlayMatches {
    constructor(matches) {
        this.matches = matches;
        this.winers = [];
        this.rounds = 0;
    }

    play() {
        let results = [];
        let newMatch = [];
        // The matchIndex will help us to know which round we are in
        let matchIndex = 1;

        // We empty the winners and results every time a new round starts
        this.winers = [];

        // Each time we adds a round to pass to the next phase
        this.rounds++;


        function announcement(rounds) {
            switch (rounds) {
                case 1:
                    console.log("\n===== OCTAVOS DE FINAL =====")
                    break;
                case 2:
                    console.log("\n===== CUARTOS DE FINAL =====");
                    break;
                case 3:
                    console.log("\n===== SEMIFINALES =====");
                    break;
                case 4:
                    console.log("\n===== FINAL =====")
                    break;
            }
        }

        // Random value to 6
        function goals() {
            return Math.round(Math.random() * 6);
        }

        // Main function where all the juice recipe of each game is
        function playGame(match) {
            let penaltisRound = false;

            let matchInPlay = {
                'team1': goals(),
                'team2': goals()
            }

            // If it's a draw
            while (matchInPlay.team1 == matchInPlay.team2) {
                matchInPlay.team1 = goals();
                matchInPlay.team2 = goals();
            }

            if (matchInPlay.team1 > matchInPlay.team2) {
                results.push(`${match[0]} ${matchInPlay.team1} - ${match[1]} ${matchInPlay.team2} \t\t(Q${matchIndex})`);
                return match[0];
            } else {
                results.push(`${match[0]} ${matchInPlay.team1} - ${match[1]} ${matchInPlay.team2} \t\t(Q${matchIndex})`);
                return match[1];

            }
        }

        // Go through each match
        this.matches.forEach(team => {

            // Play the match
            newMatch.push(playGame(team));

            // In the playGame function we add the winning team of each match to newmatch
            // in this function we dump them into the winers array and clean the newMatch array
            // for the next party
            if (newMatch.length === 2) {
                this.winers.push(newMatch);
                newMatch = [];
            }

            matchIndex++;

        });


        // The final round is playing so we show the winner of the cup
        if (this.rounds == 4) {
            announcement(this.rounds);
            results.forEach(result => console.log(result));
            console.log(`\n===============================================\n${newMatch[0].toUpperCase()} campeona de la EURO!\n=============================================== `);
            return;
        }

        // We announce what phase we are in
        announcement(this.rounds);

        // Show the results of the matches
        results.forEach(result => console.log(result));

        // We pass the winners to matches to prepare for the new round
        this.matches = this.winers;

        // We call the function recursively
        this.play();
    }
}