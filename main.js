function computerPlay(rock,paper,scissors){
    let choices =[rock,paper,scissors];
    choices = Math.floor(Math.random()* choices.length);
    if(choices==0){
        return("Rock");
    }else if(choices==1){
        return("Paper")
    }else{
        return("Scissors")
    }
}

computerWins = 0;
playerWins = 0;

function playRound(playerSelection,computerSelection){
    if(computerSelection==="paper" && playerSelection==="rock"){
       console.log("Computer wins,Paper beats rock +1");
       computerWins+=1;
    }else if(playerSelection==="paper" && computerSelection==="scissors"){
       console.log("Computer wins,Scissors beats paper +1");
       computerWins+=1;
    }else if(playerSelection ==="scissors" && computerSelection==="rock"){
        console.log("Computer wins,Rock beats Scissors +1");
        computerWins+=1;
    }else if(computerSelection==="paper" && playerSelection==="rock"){
        console.log("Computer wins,Paper beats rock +1");
        computerWins+=1
     }else if(computerSelection==="scissors" && playerSelection==="rock"){
         console.log("Player wins,Rock beats Scissors +1");
         playerWins+=1;
     }else if(computerSelection==="rock" && playerSelection==="paper"){
         console.log("Player wins,Paper beats Rock +1");
         playerWins+=1;
     }else if(computerSelection==="paper" && playerSelection==="scissors"){
         console.log("Player wins,Scissors beats paper +1");
         playerWins+=1;
     }else{
         console.log("Its a tie");
     }
    
}

function game(){
    for(let i =0;i<5;i++){
        let playerSelection= prompt("Enter choice:").toLowerCase();
        let computerSelection = computerPlay("rock","paper","scissors").toLowerCase();
        playRound(playerSelection,computerSelection);
    }
    if(computerWins>playerWins){
        console.log("Computer won by " + " " + computerWins + "points")
    }else{
        console.log("Player won by"+ " " + playerWins + "points")
    }
}
game();
