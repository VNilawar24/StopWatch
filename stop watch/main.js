const timer = document.getElementById("stopwatch");
var hr = 0;
let min = 0;
let sec= 0;
var stoptime = true;

function startTimer(){
    if(stoptime == true){
        stoptime = false;
        timerCycle();

    }
}
function stopTimer(){
    if(stopTime == false)
    {
        stoptime = true;
        timerCycle();

    }
}
function timerCycle(){

    if(stoptimer == false){
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec = sec + 1 ;

        if(sec == 60){
            min = min+1;
            sec = 0;
        }
        if(min == 60){
            
        }
    }
}
