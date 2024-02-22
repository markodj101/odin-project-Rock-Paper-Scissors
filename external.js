let playerChoice = "nothing"
let computerChoice = "nothing"
let player = 0, computer = 0

function game(){
    document.getElementById("scissors").addEventListener("click", () => {
        playerChoice = "scissors"
        console.log("Player selected " + playerChoice)
        playRound()
    })
    document.getElementById("rock").addEventListener("click", () => {
        playerChoice = "rock"
        console.log("Player selected " + playerChoice)
        playRound()
    })
    document.getElementById("paper").addEventListener("click", () => {
        playerChoice = "paper"
        console.log("Player selected " + playerChoice)
        playRound()
    })
}

function playRound() {
    computerChoice = getComputerChoice()
    console.log("Computer selected " + computerChoice)
    if (playerChoice == "scissors"){
        if (computerChoice == "rock"){
            document.getElementById("text").innerHTML = "You Lose! Rock beats Scissors"
            computer += 1
        }
        else if (computerChoice == "scissors"){
            
            document.getElementById("text").innerHTML = "Tie!"
            player += 1
            computer += 1
        }
        else {
            document.getElementById("text").innerHTML = "You Win! Scissors beats Paper"
            player += 1
        }
    }
    else if (playerChoice == "paper"){
        if (computerChoice == "rock"){
            document.getElementById("text").innerHTML = "You Win! Paper beats Rock"
            player += 1
        }
        else if (computerChoice == "scissors"){
            document.getElementById("text").innerHTML = "You Lose! Scissors beats Paper"
            computer += 1
        }
        else {
            document.getElementById("text").innerHTML = "Tie!"
            player += 1
            computer += 1
        }
    }
    else if (playerChoice == "rock"){
        if (computerChoice == "rock"){
            document.getElementById("text").innerHTML = "Tie!"
            player += 1
            computer += 1
        }
        else if (computerChoice == "scissors"){
            document.getElementById("text").innerHTML = "You Win! Rock beats Scissors"
            player += 1
        }
        else {
            document.getElementById("text").innerHTML = "You Lose! Paper beats Rock"
            computer += 1
        }
    }
    else {
        console.log("Invalid choice")
    }

    if (player + computer < 5){
        console.log("Next round")
        document.getElementById("score").innerHTML = player + ":" + computer    
    }
    else{
        if (player > computer){
            document.getElementById("text").innerHTML = "Player wins the game"
            console.log("The Game is over: Player wins the game")
            player  = 0
            computer = 0
            document.getElementById("score").innerHTML = player + ":" + computer 
        }
        else if (computer > player){
            document.getElementById("text").innerHTML = "Computer wins the game"
            console.log("The Game is over: Computer wins the game")
            player  = 0
            computer = 0
            document.getElementById("score").innerHTML = player + ":" + computer 
        }
        else{
            document.getElementById("text").innerHTML = "It's a tie"
            console.log("The Game is over: It's a tie")
            player  = 0
            computer = 0
            document.getElementById("score").innerHTML = player + ":" + computer 
        }
    }
}

function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"]
    let n = Math.floor(Math.random() * choices.length)
    return choices[n]
}

game()