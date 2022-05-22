const choices = ["rock", "paper", "scissors"];
let winners = [];

function game() {
    for(let i = 1; i <= 5; i++){
        playRound(i);
    }
    document.querySelector('button').textContent = 'Play new game';
    logWins();
}

function playRound(round) {
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round)
}

function playerPlay() {
    let input = prompt('Type Rock, Paper or Scissors');
    while (input == null) {
        input = prompt('Type Rock, Paper or Scissors');
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt('Typo! Write Rock, Paper or Scissors again. Spelling needs to be exact.');
        while (input == null) {
            input = prompt('Type Rock, Paper or Scissors');
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}

function computerPlay() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function validateInput(choice) {
    return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return 'Tie';
    }   else if (
        (choiceP === 'rock' && choiceC === 'scissors') || 
        (choiceP === 'paper' && choiceC === 'rock') || 
        (choiceP === 'scissors' && choiceC === 'paper')
    )   {
        return 'You';
    }   else {
        return "Computer";
    }
}

function logWins() {
    let playerWins = winners.filter((item) => item == 'You').length;
    let computerWins = winners.filter((item) => item == 'Computer').length;
    let ties = winners.filter((item) => item == 'Tie').length;
    console.log('Results:');
    console.log('You Win:',playerWins);
    console.log('Computer Wins:',computerWins);
    console.log('Ties:',ties);
}

function logRound(playerPlay, computerPlay, winner, round) {
    console.log('Round:', round)
    console.log('You chose:', playerPlay);
    console.log('Computer chose:', computerPlay);
    console.log(winner, 'won the round');
    console.log('-------------------------------');
}
