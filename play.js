

var playBtn = document.querySelector(".playBtn");
var clickBtn = document.querySelector(".clickBtn");
var currentWord = document.querySelector('.currentword');
var words = [];
var randomWords=[];
playBtn.onclick=startGame;


function startGame(){
    clearInterval(scareInt);
    gameCard.removeChild(startModal)
    let phrase = prompt("What phrase/word would you like to test?")

    runTimer()
    fetchAPI(phrase)

}



async function fetchAPI(phrase){
    currentWord.innerHTML = phrase;
    correctDOM.innerHTML = correct;
    wrongDOM.innerHTML = wrong;

    return new Promise((resolve,reject)=>{
try{
    fetch(`https://api.datamuse.com/words?ml=${phrase}`)
    .then(res=>res.json())
    .then(res=>{
        // console.log(res)
      
        // words = res.map(({word})=>({word}))
        res.forEach(r=>{
            words.push(r.word)
        })

    
    fetch("https://random-word-api.herokuapp.com/word?number=100")
    .then(res=>res.json())
    .then(res=>{
        // console.log(res);
        randomWords = res;
        game(words,randomWords)
    })
})


}
catch(err){
    console.log(err)
}

    })

    

}



var radioInputOne = document.querySelector(".radioinputone");
var radioInputTwo = document.querySelector(".radioinputtwo");
var radioInputThree = document.querySelector(".radioinputthree");
var radioInputFour = document.querySelector(".radioinputfour");


var labelOne = document.querySelector(".label1");
var labelTwo = document.querySelector(".label2");
var labelThree = document.querySelector(".label3");
var labelFour = document.querySelector(".label4");

var radioInputs = [
                  {input:radioInputOne,label:labelOne},
                  {input:radioInputTwo,label:labelTwo},
                  {input:radioInputThree,label:labelThree},
                  {input:radioInputFour,label:labelFour},
                   ]



var wordCounter=0;
var randomCounter=0;
var isRightWord = false;

function game(words,randoms){
    // console.log(words,randoms)

     
    isRightWord = false;

    radioInputs = radioInputs.sort((a,b)=>Math.random() - .5);

    // console.log(radioInputs)


    radioInputs.forEach(i=>{
        if(Math.random() > .25 && !isRightWord){
                 isRightWord = true;
                 i.input.value = words[wordCounter]
                 i.label.innerHTML = words[wordCounter]
                 i.label.setAttribute('for',words[wordCounter])
                 wordCounter++
                 console.log('rightWord listed!')
        }
        else{
            i.input.value = randoms[randomCounter];
            i.label.innerHTML = randoms[randomCounter]
            i.label.setAttribute('for',randoms[randomCounter])
            randomCounter++
        }
    })


}


clickBtn.onclick=checkAnswer



function checkAnswer(){
    let inputValue = document.querySelector("input[name='question']:checked").value;

    console.log(inputValue)

    if(words.indexOf(inputValue) !== -1){
        counter=10;
        console.log('rightanswer!')
        correct++
        correctDOM.innerHTML=correct;
    }
    else{
        console.log('wrong answer!!')
        wrong++
        wrongDOM.innerHTML=wrong;
    }

    game(words,randomWords)
}