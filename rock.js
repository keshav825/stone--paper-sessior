let userscore=0;
let computerscore=0;
const choices=document.querySelectorAll('.choice');
const msg=document.querySelector('#msg');
const userscorepara=document.querySelector('#user-score');
const compscorepara=document.querySelector('#comp-score');

const gemcompchoices=()=>{
    const options=["Rock","Paper","Scissors"];
   const indexi= Math.floor(Math.random()*3);
    return options[indexi];
};
const draw=()=>{
  
   msg.innerText="Game Draw Play Again!";
   msg.style.backgroundColor="#081b31";
   
  
    
};
const showwinner=(userwin,USERCHOICE,compchoice)=>{
    if(userwin){
       userscore++;
       userscorepara.innerText=userscore;
     msg.innerText=`you win! your ${USERCHOICE} beats ${compchoice}`;
     msg.style.backgroundColor="green";
        
    }
    else{
        computerscore++;
        compscorepara.innerText=computerscore;
       msg.style.backgroundColor="red";
       msg.innerText=`you Lose!${compchoice} beats  your ${USERCHOICE}`;
    }
};



const playgame=(USERCHOICE)=>{
    console.log("user-choice = ",USERCHOICE);
   const compchoice= gemcompchoices();
   console.log("comp-choice  = ",compchoice);
   
   if(compchoice === USERCHOICE){
      draw();
   }
   else{
    let userwin= true;
    if(USERCHOICE === "Rock"){
      userwin = compchoice  === "Paper" ? false : true;
    }
    else if(USERCHOICE === "Paper"){
        userwin = compchoice=== "Scissors" ? false : true;
    }
    else{
        userwin = compchoice ==="Rock" ? false : true;
    }
    showwinner(userwin,USERCHOICE,compchoice);
   }
    
};

choices.forEach((choice)=>
{
       choice.addEventListener('click',()=>{
        const USERCHOICE=choice.getAttribute('id'); 
        playgame(USERCHOICE);
    })
})

