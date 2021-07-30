export default class PlayMatches {
    constructor(matches) {
        this.matches = matches;
        this.winers = [];
        this.rounds = 0;
        this.thirdAndFourth = [];
    }

    play() {
        // Variable to save the results of each match
        let results = [];

        // Variable to assign the new match that will be played
        let newMatch = [];

        // We empty the winners and results every time a new round starts
        this.winers = [];

        // Each time we adds a round to pass to the next phase
        this.rounds++;
        let rounds = this.rounds;

        // Tercer y cuarto puesto
        let thirdAndFourth = this.thirdAndFourth;


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
                case 5:
                    console.log("\n===== TERCER Y CUARTO PUESTO =====");
            }
        }

        // Random value to 6
        function goals() {
            return Math.round(Math.random() * 6);
        }

        // Main function where all the juice recipe of each game is
        function playGame(match) {
            let matchInPlay = {
                'team1': goals(),
                'team2': goals()
            }

            let team1 = match[0];
            let team2 = match[1];

            // If it's a draw
            while (matchInPlay.team1 == matchInPlay.team2) {
                matchInPlay.team1 = goals();
                matchInPlay.team2 = goals();
            }

            if (matchInPlay.team1 > matchInPlay.team2) {
                // Third and fourth place
                if (rounds === 3) {
                    thirdAndFourth.push(team2);
                }

                results.push(`${team1} ${matchInPlay.team1} - ${team2} ${matchInPlay.team2} => ${team1}`);
                return team1;
            } else {
                if (rounds === 3) {
                    thirdAndFourth.push(team1);
                }

                results.push(`${team1} ${matchInPlay.team1} - ${team2} ${matchInPlay.team2} => ${team2}`);
                return team2;
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
        });

        // The final round has played so we show the winner of the cup
        if (this.rounds == 4) {
            let winnerOfTheEuroCup = newMatch[0];
            announcement(this.rounds);
            results.forEach(result => console.log(result));
            console.log(`\n===============================================\n${winnerOfTheEuroCup.toUpperCase()} campeona de la EURO!\n=============================================== `);
            return;
        }

        // We announce what phase we are in
        announcement(this.rounds);

        // Show the results of the matches
        results.forEach(result => console.log(result));

        // Third and fourth place is played
        if (thirdAndFourth.length == 2) {
            announcement(5);
            results = [];
            playGame(thirdAndFourth);
            console.log(results[0]);
        }

        // We pass the winners to matches to prepare for the new round
        this.matches = this.winers;

        // We call the function recursively
        this.play();

    }
}