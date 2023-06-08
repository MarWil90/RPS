const rps = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    const opponent = rps[Math.floor(Math.random() * rps.length)];
    return opponent;
}

function singleRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        console.log("Tie");
    }
    else if(
           (playerSelection =="Rock" && computerSelection =="Scissors") ||
           (playerSelection =="Paper" && computerSelection =="Rock") ||
           (playerSelection =="Scissors" && computerSelection =="Paper")
           )
    {
        console.log("Winner");
    }
    else{
        console.log("Loser");
    }

}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(singleRound(playerSelection, computerSelection));
