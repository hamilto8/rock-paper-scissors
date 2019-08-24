function computerPlay(){
    let attackStyle = ['rock', 'paper', 'scissors'];
    return attackStyle[Math.floor(Math.random()*attackStyle.length)];
}

function game(){
    let count = 0;
    let computerScore = 0;
    let playerScore = 0;

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
            return "Huh?"
        }
    }


    while (count < 5){
        let playerSelection = prompt("Choice?");
        let computerSelection = computerPlay();
        console.log(`
        Player Chose: ${playerSelection},
        Computer Chose: ${computerSelection}
        `);
        console.log(playRound(playerSelection, computerSelection))
        count++;
    }
    console.log(`
    Player Score: ${playerScore}, 
    Computer Score: ${computerScore}
    `);
}