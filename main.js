const buttons = document.querySelector(".btns-container");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const comment = document.querySelector(".comment");

function computerPlay(){
    let choices =["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()* choices.length)];
}


computerWins = 0;
playerWins = 0;


let playerSelection="";
let computerSelection = "";



function playRound(playerSelection,computerSelection){
    if(computerSelection==="paper" && playerSelection==="rock"){
       comment.innerHTML = "Computer wins,Paper beats rock +1";
       computerWins+=1;
    }else if(playerSelection==="paper" && computerSelection==="scissors"){
       comment.innerHTML = "Computer wins,Scissors beats paper +1";
       computerWins+=1;
    }else if(playerSelection ==="scissors" && computerSelection==="rock"){
        comment.innerHTML = "Computer wins,Rock beats Scissors +1";
        computerWins+=1;
    }else if(computerSelection==="paper" && playerSelection==="rock"){
        comment.innerHTML = "Computer wins,Paper beats rock +1";
        computerWins+=1
     }else if(computerSelection==="scissors" && playerSelection==="rock"){
         comment.innerHTML = "Player wins,Rock beats Scissors +1";
         playerWins+=1;
     }else if(computerSelection==="rock" && playerSelection==="paper"){
         comment.innerHTML = "Player wins,Paper beats Rock +1";
         playerWins+=1;
     }else if(computerSelection==="paper" && playerSelection==="scissors"){
         comment.innerHTML = "Player wins,Scissors beats paper +1";
         playerWins+=1;
     }else{
         comment.innerHTML = "Its a tie";
     }
    
}





buttons.addEventListener("click", ({target})=> {
    if(target.tagName === "BUTTON"){
       playerSelection = target.innerHTML.toLowerCase();
       computerSelection = computerPlay();
       playRound(playerSelection, computerSelection);
       playerScore.innerHTML = `Player: ${playerWins}`;
       computerScore.innerHTML = `Computer: ${computerWins}`;
    }
})