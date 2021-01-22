
var timerDOM = document.querySelector(".timer")
var counter = 10;


function runTimer(){

    timerDOM.innerHTML = counter;
    if(counter === 0){
        console.log("gameover");
        return;
    }
    counter--;
    setTimeout(runTimer,1000)
    alert("Game Over!\n Score: " + score)

}