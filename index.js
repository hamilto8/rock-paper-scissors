const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const start = document.querySelector('#start');
const display = document.querySelector('#display');
const count_view = document.querySelector('#count_view');
const attack = document.querySelector('#attack');
const computer_score = document.querySelector('#computer_score');
const player_score = document.querySelector('#player_score');
const success = document.querySelector('#success');
const failure = document.querySelector('#failure');
const tie = document.querySelector("#tie");
const lights = document.querySelectorAll(".lights");
let lightCount = 0;
let started = false;


start.addEventListener('click', ()=>{
    if(started === false){
        started = true;
        start.textContent = 'Reset';
        attack.textContent = ``;
    } else {
        reset()
    }
    game();
});

function computerPlay(){
    let attackStyle = ['rock', 'paper', 'scissors'];
    return attackStyle[Math.floor(Math.random()*attackStyle.length)];
}

function reset(){
    return true;
}

function redLight(){
    lights[lightCount].style.backgroundColor = 'red';
    lightCount++;
}

function greenLight(){
    lights[lightCount].style.backgroundColor = 'rgb(0, 202, 0)';
    lightCount++;
}

function tieLight(){
    lights[lightCount].style.backgroundColor = 'gray';
    lightCount++;
}

function lightsOut(){
    lights.forEach((light)=>{
        light.style.backgroundColor = 'black';
    })
    lightCount = 0;
}

function game(){
    let computerScore = 0;
    let playerScore = 0;
    let count = 0;
    count_view.textContent = `Count: ${count}`;

    if (reset()){
        count = 0;
        playerScore = 0;
        computerScore = 0;
        attack.textContent = ``
        count_view.textContent = `Round: ${count}`;
        computer_score.textContent = computerScore;
        player_score.textContent = playerScore;
        lightsOut();
    }
    
        rock.addEventListener('click', playRock);
        paper.addEventListener('click', playPaper);
        scissors.addEventListener('click', playScissors);

        function playRock(){
            if(count > 4){
                attack.textContent = 'You have reached the final round';
            } else {
                let computerSelection = computerPlay();
                count++;
                count_view.textContent = `Round: ${count}`;
                playRound('rock', computerSelection);
                attack.textContent = `Player Chose: rock | Computer Chose: ${computerSelection}`;

                computer_score.textContent = computerScore;
                player_score.textContent = playerScore;
            }
        }

        function playPaper(){
            if(count > 4){
                attack.textContent = 'You have reached the final round';
            } else {
                count++;
                count_view.textContent = `Round: ${count}`;
                let computerSelection = computerPlay();
                playRound('paper', computerSelection);
                attack.textContent = `Player Chose: paper | Computer Chose: ${computerSelection}`;

                computer_score.textContent = computerScore;
                player_score.textContent = playerScore;
            }
        }

        function playScissors(){
            if (count > 4){
                attack.textContent = 'You have reached the final round';
            } else {
                count++;
                count_view.textContent = `Round: ${count}`;
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
                redLight()
                failure.play();
                return "You lose! Paper beats rock."
            } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === "paper") {
                playerScore+=1;
                greenLight();
                success.play();
                return "You win! Computer chose poorly."
            } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === "rock"){
                computerScore+=1;
                redLight();
                failure.play();
                return "You lose! Rock beats scissors."
            } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors'){
                playerScore+=1;
                greenLight();
                success.play();
                return "You win! Computer chose poorly."
            } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock'){
                playerScore+=1;
                greenLight();
                success.play();
                return "You win! Computer chose poorly."
            } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper'){
                computerScore+=1;
                redLight();
                failure.play();
                return "You lose! Paper beats rock"
            } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper'){
                playerScore+=1;
                greenLight();
                success.play();
                return "You win! Computer chose poorly"
            } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors'){
                computerScore+=1;
                redLight();
                failure.play();
                return "You lose! Scissors beats paper"
            } else if (playerSelection.toLowerCase() === computerSelection){
                tieLight();
                tie.play();
                return "It's a tie!"
            } else {
                return "Huh? Please Enter Rock, Paper or Scissors."
            }
        } 
}