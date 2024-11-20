let cnum = Math.floor(Math.random()*100) + 1;
let attempt = 0; 
let attemptData = document.getElementById("attempt");
let userinp = document.getElementById("inp");
let subBtn = document.getElementById("submit");
let resBtn = document.getElementById("resBtn");
let message = document.getElementById("msg");
function check(){
    let usernum = parseInt(userinp.value);
    if(cnum == usernum){
        message.innerHTML="Congratulations! You have guessed the number.";
        message.style.color="green";
        resBtn.style.display="block";
    }
    else if(cnum < usernum){
        message.innerHTML="Too high! Try again.";
        message.style.color="red";
    }
    else{
        message.innerHTML="Too low! Try again";
        message.style.color="red";
    }
    attempt++;
    attemptData.innerHTML=attempt;
    setTimeout(() =>{
        userinp.value=0;
        message.innerHTML="";
    }, 1000);
}
function restart(){
    cnum = Math.floor(Math.random()*10) + 1;
    attempt = 0; 
}
subBtn.addEventListener("click", check);
resBtn.addEventListener("click", restart);
