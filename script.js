let humanScore = 0
let computerScore = 0
let no_of_rounds = 0

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);

    if (number === 0) {
        computerChoice = "rock"
    } else if (number === 1) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }

    return computerChoice;
}

function getHumanChoice() {
    let userInput = prompt("Rock, Paper or Scissors?");
    let humanChoice = userInput.toLowerCase();

    return humanChoice;
}



function playGame() {

    function playRound(humanChoice, computerChoice) {
        const human = humanChoice.trim().toLowerCase();
        const computer = computerChoice.trim().toLowerCase();

        
        if (human === computer) {
            console.log("It's a tie!");
            no_of_rounds++;
        } else if (
            (human === "rock" && computer === "scissors") ||
            (human === "paper" && computer === "rock") ||
            (human === "scissors" && computer === "paper")
        ) {
            humanScore++;
            console.log(`You win! ${human} beats ${computer}.`);
            no_of_rounds++;
        } else if (
            (human === "rock" && computer === "paper") ||
            (human === "paper" && computer === "scissors") ||
            (human === "scissors" && computer === "rock")
        ) {
            computerScore++;
            console.log(`You lose! ${computer} beats ${human}.`);
            no_of_rounds++;
        } else {
            console.log("Invalid input. Please choose rock, paper, or scissors.");
        }

        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    }

   

    while (no_of_rounds < 5) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        console.log(`--- Round ${no_of_rounds} complete ---`);
        console.log("----------------------------");

        
        if (no_of_rounds === 5) {
            if (humanScore > computerScore) {
                console.log("Congratulations! You are the overall winner!");
            } else if (computerScore > humanScore) {
                console.log("Sorry, the computer wins overall. Better luck next time!");
            } else {
                console.log("It's an overall tie!");
            }
        }
    }
}

playGame();