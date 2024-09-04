// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

let team = {
    players: [{
        firstName: "Caliste",
        lastName: "Kcorp",
        age: 18


    }],
    games:[{
        opponent: "Hans sama",
        teamPoints: 42,
        opponentPoints: 27,

    }],
    addPlayer(firstName,lastName,age){
        let newPlayer = {
            firstName : firstName,
            lastName : lastName,
            age : age
        };
        this.players.push(newPlayer);
    },
    addGame(opponent, teamPoints,opponentPoints){
        let newMatch = {
            opponent : opponent,
            teamPoints : teamPoints,
            opponentPoints : opponentPoints
        };
        this.games.push(newMatch);
    },
    calculerSomme(){
        let totalPoints = 0;
        for (i = 0; i < this.games.length; i++) {
            totalPoints += this.games[i].teamPoints;
        }
        console.log(totalPoints) ;
    },
    calculerMoyenne(){
        let totalOpponentPoints = 0;
        for (i = 0; i < this.games.length; i++) {
            totalOpponentPoints += this.games[i].opponentPoints;
        }
        let totalMoyenne = totalOpponentPoints / this.games.length;
        console.log(totalMoyenne);
    },
    vieuxJoueur(){
        let joueurVieux = this.players[0];
        for (let i = 1; i < this.players.length; i++) {
            if(this.players[i].age > joueurVieux.age){
                joueurVieux = this.players[i];
            }
        }
        console.log(joueurVieux);
    }
};

team.addPlayer("Targamas", "Kcorp", 26);
team.addGame("Caps",25, 30)
team.addPlayer("Canna", "Kcorp", 23);
team.addGame("BrokenBlade",45, 30)
team.addPlayer("Closer", "Kcorp", 27);
team.addGame("Mikyx",60, 10)

team.calculerSomme();
team.calculerMoyenne();
team.vieuxJoueur();

console.log(team.games);
console.log(team.players);

// 1. Afficher le nombre de voitures de Joe
console.log(joeInfo.cars.length);
// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
joeInfo.bathrooms = 1;
console.log(joeInfo.bathrooms);
// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 
joeInfo.garage = true;
console.log(joeInfo.garage);