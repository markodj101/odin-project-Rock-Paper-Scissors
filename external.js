function game(){
    
    let igrac = 0, kompjuter = 0
    for (let i = 0; i < 5; i++) {
         playerSelection = prompt("Unesi list ili kamen ili makaze:")
        let computerSelection = getComputerChoice();
        let rezultat = playRound(playerSelection, computerSelection);
        if (rezultat.includes("Win")){
            igrac +=1;
        }
        else if (rezultat.includes("Tie")){
            igrac +=1;
            kompjuter +=1;
        }
        else  {
            kompjuter +=1;
        }
        console.log(rezultat)
        console.log ("Ovo je pratija broj :" + (i+1))
        
    }
    if (igrac>kompjuter){
        console.log("Igrac je pobjedio")
    }
    else if (kompjuter>igrac){
        console.log("Kompjuter je pobjedio")
    }
    else{
        console.log("Nema pobjednika")
    }
}




function getComputerChoice(){
    let lista = ["list", "kamen", "makaze"]
    let izborr = Math.floor(Math.random() * lista.length)
    return lista[izborr]
}



function playRound(playerSelection, computerSelection) {
    console.log(getComputerChoice());
    let player = String(playerSelection.toLowerCase())
    if (player == "makaze"){
        if (computerSelection == "kamen"){
            return "You Lose! Rock beats Scissors"
        }
        else if (computerSelection =="makaze"){
            return "Tie!"
        }
        else {
            return "You Win! Scissors beats Paper"
        }
    }
    else if (player == "list"){
        if (computerSelection == "kamen"){
            return "You Win! Paper beats Rock"
        }
        else if (computerSelection =="makaze"){
            return "You Lose! Scissors beats Paper"
        }
        else {
            return "Tie!"
        }
    }
    else if (player == "kamen"){
        if (computerSelection == "kamen"){
            return "Tie!"
        }
        else if (computerSelection =="makaze"){
            return "You Win! Rock beats Scissors"
        }
        else {
            return "You Lose! Paper beats Scissors"
        }
    }
    else {

        return  playerSelection = prompt("Igrac nije dobro unio unesite opet")
    }
  }

  let playerSelection;

  game()