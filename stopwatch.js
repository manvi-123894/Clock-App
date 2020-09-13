const stopBtn = document.querySelector("#stop-btn");
const stopWatchContainer = document.querySelector(".stop-watch-container");
const stopElements = document.querySelectorAll(".stop-elements");
const milliseconds = document.querySelector("#mili");
const homeStopBtn = document.querySelector("#stop-home");
const seconds = document.querySelector("#sec");
const minutes = document.querySelector("#min");
const hours = document.querySelector("#hour");
const stopWatchBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");
const saveBtn = document.querySelector("#save");

let status=false;
let milliCount = 0;
let secondCount = 0;
let minuteCount = 0;
let hourCount = 0;
let miliSecondValue;



stopBtn.addEventListener("click",function(){
    btnClass.style.display = "none";
    clockContainer.style.display = "none";
    countDownContainer.style.display = "none";
    countdownComplete.style.display = "none";
    stopWatchContainer.style.display = "flex";
})

homeStopBtn.addEventListener("click",function(){

    clearInterval(timerValue);
    clearInterval(miliSecondValue);
    clearInterval(countdownTimerValue);

    btnClass.style.display = "flex";
    stopWatchContainer.style.display = "none";
    clockContainer.style.display ="none";
    countDownContainer.style.display = "none";
    mainCountdown.style.display = "none";
    countdownComplete.style.display = "none";

    stopWatchBtn.textContent = "Start";
    status=false;
   
})

function startTimer(){

    
    
    miliSecondValue = setInterval( () => {
        
        milliCount+=1;
        if(milliCount < 10){
            milliseconds.textContent = `0${milliCount}`;
        }else if(milliCount > 99){
            milliseconds.textContent= "00";
        }
        else{
            milliseconds.textContent = milliCount;
        }

        if( milliCount>99){
            milliCount =0  
            secondCount+=1;

            if(secondCount < 10){
                seconds.textContent = `0${secondCount}`;
            }
            else if(secondCount > 59){
                seconds.textContent = "00";
            }
            else{
               seconds.textContent = secondCount;
            }
            if(secondCount > 59){
               secondCount=0;
               
               minuteCount+=1;

               if(minuteCount < 10){
                   minutes.textContent = `0${minuteCount}`;
               }
               else if(minuteCount > 59){
                   minutes.textContent = "00";
               }
               else{
                   minuteCount.textContent = minuteCount;
               }

               if(minuteCount > 59){
                   minuteCount = 0;

                   hourCount+=1;

                   if(hourCount < 10){
                       hours.textContent = `${hourCount}`;
                   }
                   else{
                       hours.textContent = hourCount;
                   }

                 

                }
        }   
    }
    },11);
}






stopWatchBtn.addEventListener("click",function(){
    

    if(!status){
        stopWatchBtn.textContent = "Stop";   
        startTimer(); 
        status = true;
    }
    else{
        stopWatchBtn.textContent = "Start";  
        clearInterval(miliSecondValue);
        status = false;
    }

})



resetBtn.addEventListener("click",function(){
    clearInterval(miliSecondValue);
    status = false;
    stopWatchBtn.textContent = "Start";
    secondCount =0;
    milliCount =0;
    minuteCount=0;
    hourContent=0;
    milliseconds.textContent = "00"
    seconds.textContent = "00";
    minutes.textContent = "00";
    hours.textContent = "00"; 
})



