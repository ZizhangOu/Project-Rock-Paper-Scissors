console.log("hello")


let playerScore = 0;
let computerScore = 0;




//fire round of game start
for (let i = 0; i < 5; i++) {
  const playerSelection = prompt( `Choose paper, scissors or rock:`);
  const computerSelection = getComputerChoice();
  let result = playRound(playerSelection, computerSelection);
  console.log(result);
  if(result == 'win' ){
    playerScore++;
  }else if(result == 'lose'){
    computerScore++;
  }else{
    continue;
  }
}
 

if(playerScore > computerScore){
  console.log("Player Win")
}else if (playerScore < computerScore){
  console.log("Computer Win")
}else{
  console.log("Tie")
}

//fire round of game end




//Get Player and computer choice Start


function getComputerChoice() {
  const choices = ['paper', 'scissors', 'rock'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}





function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'tie';
      } else if (
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'rock' && computerSelection == 'scissors')
      ) {
        return 'win';
      } else {
        return 'lose';
      }}
    

//Get Player and computer choice End