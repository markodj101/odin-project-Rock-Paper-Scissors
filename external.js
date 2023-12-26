function game(){
    
}




function getComputerChoice(){
    let lista = ["list", "kamen", "makaze"]
    let izborr = Math.floor(Math.random() * lista.length)
    return lista[izborr]
}



function playRound(playerSelection, computerSelection) {
    let player = String(playerSelection.toLowerCase())
    
  }
   
  const playerSelection = prompt("Unesi list ili kamen ili makaze:")
  const computerSelection = getComputerChoice();
  console.log(getComputerChoice());
  console.log(playRound(playerSelection, computerSelection));