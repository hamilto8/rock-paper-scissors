const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const start = document.querySelector('#start');
const display = document.querySelector('#display');
const count_view = document.querySelector('#count_view');
const attack = document.querySelector('#attack');
const computer_score = document.querySelector('#computer_score');
const player_score = document.querySelector('#player_score');
let started = false;
let count = 0;

count_view.textContent = `Count: ${count}`;

start.addEventListener('click', ()=>{
    if(started === false){
        started = true;
        start.textContent = 'Reset';
        attack.textContent = ``;
    } else {
        count = 0;
        attack.textContent = ``
        count_view.textContent = `Count: ${count}`;
    }
    game();
});

function computerPlay(){
    let attackStyle = ['rock', 'paper', 'scissors'];
    return attackStyle[Math.floor(Math.random()*attackStyle.length)];
}

function game(){
    let computerScore = 0;
    let playerScore = 0;
    
    
        rock.addEventListener('click', playRock);
        paper.addEventListener('click', playPaper);
        scissors.addEventListener('click', playScissors);

        function playRock(){
            if(count >=5){
                attack.textContent = 'You have reached the maximum count';
            } else {
                let computerSelection = computerPlay();
                count++;
                count_view.textContent = `Count: ${count}`;
                playRound('rock', computerSelection);
                attack.textContent = `Player Chose: rock | Computer Chose: ${computerSelection}`;

                computer_score.textContent = computerScore;
                player_score.textContent = playerScore;
            }
        }

        function playPaper(){
            if(count >=5){
                attack.textContent = 'You have reached the maximum count';
            } else {
                count++;
                count_view.textContent = `Count: ${count}`;
                let computerSelection = computerPlay();
                playRound('paper', computerSelection);
                attack.textContent = `Player Chose: paper | Computer Chose: ${computerSelection}`;

                computer_score.textContent = computerScore;
                player_score.textContent = playerScore;
            }
        }

        function playScissors(){
            if (count >= 5){
                attack.textContent = 'You have reached the maximum count';
            } else {
                count++;
                count_view.textContent = `Count: ${count}`;
                let computerSelection = computerPlay();
                playRound('scissors', computerSelection);
                attack.textContent = `Player Chose: scissors | Computer Chose: ${computerSelection}`;
 
                computer_score.textContent = computerScore;
                player_score.textContent = playerScore;
            }
        }

        function playRound(playerSelection, computerSelection){
            if(playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock'){
                computerScore+=1;
                return "You lose! Paper beats rock."
            } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === "paper") {
                playerScore+=1;
                return "You win! Computer chose poorly."
            } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === "rock"){
                computerScore+=1;
                return "You lose! Rock beats scissors."
            } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors'){
                playerScore+=1;
                return "You win! Computer chose poorly."
            } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock'){
                playerScore+=1;
                return "You win! Computer chose poorly."
            } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper'){
                computerScore+=1;
                return "You lose! Paper beats rock"
            } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper'){
                playerScore+=1;
                return "You win! Computer chose poorly"
            } else if (playerSelection.toLowerCase() === 'paper' && computerPlay === 'scissors'){
                computerScore+=1;
                return "You lose! Scissors beats paper"
            } else if (playerSelection.toLowerCase() === computerSelection){
                return "It's a tie!"
            } else {
                return "Huh? Please Enter Rock, Paper or Scissors."
            }
        } 
}