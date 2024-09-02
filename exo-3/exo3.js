// you can write js here
//partie une
var playerInput = prompt("Your choice ( rock, paper, scissors) ?")
playerInput = playerInput.toLowerCase();
function getPlayerChoice(playerInput){
if (playerInput !== 'rock' && playerInput !== 'paper' && playerInput !== 'scissors' && playerInput !== 'bomb'){
    console.log('ERREUUUUUR');
} else {
    return playerChoice = playerInput;
}
}
//partie deux
function getComputerChoice(){
 const option = ['paper', 'scissors', 'paper',];
  const randomContenu = Math.floor(Math.random()*option.length);
  return  computerChoice = option[randomContenu];
}

//partie trois
function findWinner(playerChoice,computerChoice){
    if (playerChoice === 'paper' && computerChoice === 'scissors' || playerChoice === 'rock' && computerChoice === 'paper' || playerChoice === 'scissors' && computerChoice === 'rock') {
        console.log('YOU LOOSE');
    } if  (playerChoice === 'paper' && computerChoice === 'rock' || playerChoice === 'rock' && computerChoice === 'scissors' || playerChoice === 'scissors' && computerChoice === 'paper' || playerChoice === 'bomb') {
        console.log('TU LA VAINCU HAHAHHAHAHA');
    } else if (playerChoice === 'paper' && computerChoice === 'paper' || playerChoice === 'rock' && computerChoice === 'rock' || playerChoice === 'scissors' && computerChoice === 'scissors') {
        console.log('Egalité');
    }
}

//partie quatre
function playGame(){
    const uChoice = getPlayerChoice(playerInput);
    const computerChoice = getComputerChoice();

    console.log(uChoice);
    console.log(computerChoice);

    console.log(findWinner(uChoice, computerChoice));
}
console.log(playGame());
console.log('exo-3');
