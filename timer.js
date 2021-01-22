
var timerDOM = document.querySelector(".timer")
var counter = 10;


function runTimer(){

    timerDOM.innerHTML = counter;
    if(counter === 0){
        console.log("gameover");
        alert("Game Over!\n Score: " + score)

        return;
    }
    counter--;
    setTimeout(runTimer,1000)

}