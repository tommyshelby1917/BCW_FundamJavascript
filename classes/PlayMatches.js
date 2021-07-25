export default class PlayMatches {
    constructor(matches) {
        this.matches = matches;
        this.winers = [];
        this.rounds = 0;
        this.results = [];
    }

    play() {
        let newMatch = [];
        let matchIndex = 1;

        // Vaciamos los ganadores y resultados cada vez que se inicia una nueva ronda
        this.winers = [];
        this.results = [];

        // Cada vez que entra suma una ronda para pasar de fase
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

        // Funcion que crea valor aleatorio del 1 al 6
        function goals() {
            return Math.round(Math.random() * 6);
        }

        // En caso de empate
        function penaltis(team) {
            let matchPenalti = {
                'team1': goals(),
                'team2': goals()
            }

            if (matchPenalti.team1 > matchPenalti.team2) {
                newMatch.push(team[0]);
            } else if (matchPenalti.team1 === matchPenalti.team2) {
                penaltis(team);
            } else {
                newMatch.push(team[1]);
            }

            return `${team[0]} ${matchPenalti.team1} - ${team[1]} ${matchPenalti.team2} \t\t(Q${matchIndex})`;

        }

        // Recorre cada partido
        this.matches.forEach(team => {
            let penaltisRound = false;
            let match = {
                'team1': goals(),
                'team2': goals()
            }

            if (match.team1 > match.team2) {
                newMatch.push(team[0]);
            } else if (match.team1 === match.team2) {
                penaltisRound = true;
                this.results.push(penaltis(team));
            } else {
                newMatch.push(team[1]);
            }

            if (newMatch.length === 2) {
                this.winers.push(newMatch);
                newMatch = [];
            }

            if (!penaltisRound) this.results.push(`${team[0]} ${match.team1} - ${team[1]} ${match.team2} \t\t(Q${matchIndex})`);

            matchIndex++;


        });


        // Se juega la final por lo tanto anunciamos el ganador
        if (this.rounds == 4) {
            announcement(this.rounds);
            this.results.forEach(result => console.log(result));
            console.log(`===============================================\n${newMatch[0].toUpperCase()} campeona de la EURO!\n =============================================== `);
            return;
        }

        announcement(this.rounds);
        //Mostramos los resultados
        this.results.forEach(result => console.log(result));

        // Le pasamos los ganadores a matches para preparar la nueva ronda
        this.matches = this.winers;

        // Llamamos a la funcion de manera recursiva
        this.play();
    }
}