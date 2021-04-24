


const clockBtn = document.querySelector("#clock");
const clockContainer = document.querySelector(".clock-container");
const btnClass = document.querySelector(".btn-class"); 
const clock = document.querySelector(".clock-container-inner");
const timeElements = document.querySelectorAll(".time-elements");
const homeBtn = document.querySelector("#home");
const amPm = document.querySelector(".am-pm");


clockBtn.addEventListener("click",hideContent);

let timerValue;

function hideContent(){
      timerValue =  setInterval( () => {

            btnClass.style.display = "none";
            stopWatchContainer.style.display = "none";
            countDownContainer.style.display = "none";
            mainCountdown.style.display = "none";
            countdownComplete.style.display = "none";
            clockContainer.style.display = "flex"
             
           

            let hours = new Date().getHours();
            let minutes = new Date().getMinutes();
            let seconds = new Date().getSeconds();

            if(hours > 12){
                hours = Math.floor(hours%12);
                amPm.textContent = "PM";
            }
            else{
                amPm.textContent = "AM";
            }
            
            
            let array = [];

            array.push(hours, minutes, seconds);
            timeElements.forEach(function(element,i){

                if(array[i] < 10){
                    element.textContent = `0${array[i]}`;

                }
                else{
                    element.textContent = array[i];
                }


        })
        },1000);
}


homeBtn.addEventListener("click",function(){

    clearInterval(timerValue);
    clearInterval(miliSecondValue);
    clearInterval(countdownTimerValue); 

    btnClass.style.display ="flex";
    stopWatchContainer.style.display = "none";
    clockContainer.style.display = "none";
    countDownContainer.style.display = "none";
    mainCountdown.style.display = "none";
    countdownComplete.style.display = "none";
})


