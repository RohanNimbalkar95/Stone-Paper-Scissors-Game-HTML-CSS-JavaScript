let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");
const userScorepara =document.querySelector("#user-score");
const compScorepara =document.querySelector("#comp-score");

const drawgame =()=>{
  msg.innerText = "Game was Draw.";
  msg.style.backgroundColor ="cyan";
};

const genCompChoice = () =>{
      const options=["rock","paper","scissors"];
      const randomidx=Math.floor(Math.random()*3);
      return options[randomidx];
};

const showwinner=(userwin,userchoice,CompChoice)=>{
  if(userwin){
    userScore++;
    userScorepara.innerText=userScore;
    msg.innerText = `You win! Your ${userchoice} beats ${CompChoice}`;
    msg.style.backgroundColor ="lightgreen";
  }else{
    compScore++;
    compScorepara.innerText=compScore;
    msg.innerText = `You lost. ${CompChoice} beats your ${userchoice}`;
    msg.style.backgroundColor ="rgb(255, 80, 80";
  }
};

const playgame = (userchoice) =>{
    
    const  CompChoice = genCompChoice();
  
    let userwin = true;
    if(userchoice === CompChoice){
        drawgame();
        return;
   } else {
    
    if(userchoice === "rock"){
      userwin = CompChoice === "paper" ? false :true;
    } else if(userchoice === "paper"){
      userwin = CompChoice === "scissors"? false:true;
    }
    else if(userchoice === "scissors"){
      userwin = CompChoice === "rock"?false:true;
    }
    }
  showwinner(userwin,userchoice,CompChoice);
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
      const userchoice = choice.getAttribute("id");
      playgame(userchoice);
    });
});