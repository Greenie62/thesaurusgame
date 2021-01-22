
var gameCard = document.querySelector(".gameCard")
var startModal = document.querySelector(".startModal")


var scareSyns = ['afraid','frightened','shook','nervous','cowardly','trepidated','fearful','terrified'];
var scareInt;
var startTextDiv = document.querySelector(".startGameTextDiv")
var scareDOM = document.querySelector(".scareslideshow");
var wrongDOM = document.querySelector(".wrong")
var correctDOM = document.querySelector(".correct");
let correct=0;
let wrong=0;




function slideShow(){
    scareDOM.innerHTML = scareSyns[Math.random() * scareSyns.length | 0]
}


scareInt = setInterval(slideShow,1500)



