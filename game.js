// Iteration 2: Generate 2 random number and display it on the screen
const num1=document.getElementById("number1")
const num2=document.getElementById("number2")
var number1=Math.round(Math.random()*100);
num1.innerHTML=number1
var number2=Math.round(Math.random()*100);
num2.innerHTML=number2

// Iteration 3: Make the options button functional
const great = document.getElementById("greater-than")
const equal=document.getElementById("equal-to")
const less=document.getElementById("lesser-than")
var score=0;
great.onclick=()=>{
    if(number1>number2){
        score+=1
        resetTime(timerid);
    }else{
        location.href="./gameover.html"
    }
    number1=Math.round(Math.random()*100);
    num1.innerHTML=number1
    number2=Math.round(Math.random()*100);
    num2.innerHTML=number2
};

equal.onclick=()=>{
    if(number1==number2){
        score+=1
        resetTime(timerid);
    }else{
        location.href="./gameover.html"
    }
    number1=Math.round(Math.random()*100);
    num1.innerHTML=number1
    number2=Math.round(Math.random()*100);
    num2.innerHTML=number2
};

less.onclick=()=>{
    if(number1<number2){
        score+=1
        resetTime(timerid);
    }else{
        location.href="./gameover.html"
    }
    number1=Math.round(Math.random()*100);
    num1.innerHTML=number1
    number2=Math.round(Math.random()*100);
    num2.innerHTML=number2
};

// Iteration 4: Build a timer for the game
const timer=document.getElementById("timer");
var time=5;
var timerid;

function setTimer(){
    time=5;
    timer.innerHTML=time
    timerid=setInterval (() => {
        time--;
        if (time==0){
            location.href="./gameover.html"
        }
        timer.innerHTML=time;
    },1000)
    localStorage.setItem("score",score);
}
function resetTime(intervalId){
    clearInterval(intervalId);
    setTimer();

}
setTimer();