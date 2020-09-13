const countDownBtn = document.querySelector("#countdown");
const countDownContainer = document.querySelector(".countdown-container");
const countdownInner = document.querySelector(".countdown-inner");
const mainCountdown = document.querySelector(".main-countdown");
const countdownComplete = document.querySelector(".countdown-complete");
const countdownElements = document.querySelectorAll(".span");
const homeCountBtn = document.querySelector("#count-home");
const mainCountdownHomeBtn =  document.querySelector(".count-home");
const resetCountBtn = document.querySelector("#countdown-button")
const countdownTitle = document.querySelector("#countdown-title");
const completeDate = document.querySelector("#complete");
const newCountdownBtn = document.querySelector("#new-countdown");
const countdownName = document.querySelector(".countdown-name");
const form = document.querySelector("#form");
const title = document.querySelector("#title");
const startDate = document.querySelector("#date");
let countTitle;
let countDate;
let finalDate;
let countdownTimerValue;
let distance;
let array = [];

let today = new Date().toISOString().split('T')[0];
startDate.min = today;


const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;


countDownBtn.addEventListener("click",function(){

    btnClass.style.display = "none";
    clockContainer.style.display = "none";
    countdownComplete.style.display = "none";
    stopWatchContainer.style.display = "none";
    countDownContainer.style.display = "flex";

    if(localStorage.getItem('Countdown')){
        mainCountdown.style.display = " flex";
    }else{
        countdownInner.style.display = "flex";
    }

})


homeCountBtn.addEventListener("click",resetFunc);
resetCountBtn.addEventListener("click",resetFunc);
newCountdownBtn.addEventListener("click",resetFunc);
mainCountdownHomeBtn.addEventListener("click",function(){
    btnClass.style.display = "flex";
    clockContainer.style.display = "none";
    countdownComplete.style.display = "none";
    stopWatchContainer.style.display = "none";
    countDownContainer.style.display = "none";
    countdownInner.style.display = "none";
    mainCountdown.style.display = "none";
})
form.addEventListener("submit",submitForm);





function submitForm(e){
    e.preventDefault();

    countTitle = title.value;
    countDate = date.value;


    finalDate = new Date(countDate).getTime();

    const dateObject = {
        title : countTitle,
        date : countDate
    }


    localStorage.setItem('Countdown',JSON.stringify(dateObject));

    form.reset(); 
    updateDom();
}


function updateDom(){

    countdownTimerValue = setInterval( () => {
        array = [];

    let  currentTime = new Date().getTime();
    distance = finalDate - currentTime;

     let days = Math.floor(distance / day);
     let hours = Math.floor((distance % day)/hour);
     let minutes = Math.floor((distance % hour) / minute);
     let seconds = Math.floor((distance % minute) / second);

     countdownTitle.textContent = countTitle;

 
      array.push(days, hours, minutes,seconds);

      countdownElements.forEach(function(element,i){

      
        element.textContent = `${array[i]}`;
      

        

        countdownInner.style.display = "none";
        mainCountdown.style.display = "flex";
        

        if(distance < 0){
            mainCountdown.style.display = "none";
            countdownComplete.style.display = "flex";


           let todayDate = new Date().toISOString().split('T')[0];

           completeDate.textContent = todayDate;
           countdownName.textContent = countTitle;
        }


      });
    },1000);
  
}



function resetFunc(){

    clearInterval(timerValue);
    clearInterval(miliSecondValue);
    clearInterval(countdownTimerValue);

    btnClass.style.display = "flex";
    stopWatchContainer.style.display = "none";
    clockContainer.style.display ="none";
    countDownContainer.style.display = "none";
    mainCountdown.style.display = "none";
    countdownComplete.style.display = "none";

    localStorage.removeItem('Countdown');
}


function fetchData(){
    if(localStorage.getItem('Countdown')){

        btnClass.style.display = "none";
        countDownContainer.style.display = "flex";

        dateObject = JSON.parse(localStorage.getItem('Countdown'));

        countDate = dateObject.date;
        countTitle = dateObject.title;

        finalDate = new Date(countDate).getTime();

        updateDom();
    }
}


fetchData();