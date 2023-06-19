let add = document.querySelector(".add");
let sub = document.querySelector(".sub");
let mult = document.querySelector(".mult");
let div = document.querySelector(".div");
let show = document.querySelector(".show");
let reset = document.querySelector(".reset");
let level = document.querySelector("#level");
let min = 1;
let max = 9;
let num = 3;
let rightAnswers=localStorage.getItem("rightAnswers")
let wrongAnswers=localStorage.getItem("wrongAnswers")
function rightAnswer(sign, num1, num2, answer, Tid) {
    let userAnswer =  $('#answ').val();
    clearTimeout(Tid)
    if (userAnswer == answer) {
        $('#answer').html('<br>'+"Молодец");
        rightAnswers++
        localStorage.setItem("rightAnswers",rightAnswers)
    } else {
        $('#answer').html('<br>'+`не правильно, ${num1} ${sign} ${num2} = ${answer}`);
        wrongAnswers++
        localStorage.setItem("wrongAnswers",wrongAnswers)
    }
}
function checkUserAnswer(sign, num1, num2, answer) {
    $('#answer').html('<br>'+`${num1} ${sign} ${num2} =?`+'<br>'+'<br>'+'<input type="text" id="answ">'+ '<button id="userAnswer">Ответить</button>');
    let Tid = setTimeout(rightAnswer, num*1000, sign, num1, num2, answer);
    $('#userAnswer').click(function(){
        rightAnswer(sign, num1, num2, answer, Tid);
    })
}
function getRandomNumber() {
    return Math.floor(Math.random() * (max - min) + min);
}
$('.reset').click(function() {
   localStorage.setItem("wrongAnswers",0);
   localStorage.setItem("rightAnswers",0);
   rightAnswers = localStorage.getItem("rightAnswers")
   wrongAnswers = localStorage.getItem("wrongAnswers")
});
add.onclick = function () {
    let num1 = getRandomNumber();
    let num2 = getRandomNumber();
    let answer = num1 + num2;
    checkUserAnswer("+", num1, num2, answer);
};
sub.onclick = function () {
    let num1 = getRandomNumber();
    let num2 = getRandomNumber();
    let answer = num1 - num2;
    checkUserAnswer("-", num1, num2, answer);
};
mult.onclick = function () {
    let num1 = getRandomNumber();
    let num2 = getRandomNumber();
    let answer = num1 * num2;
    checkUserAnswer("*", num1, num2, answer);
};
div.onclick = function () {
    let num1 = getRandomNumber();
    let num2 = getRandomNumber();
    let answer = num1 / num2;
    checkUserAnswer("/", num1, num2, answer.toFixed(2));
};
show.onclick = function(){
    alert(`правильные ответы: ${rightAnswers}. неправильные ответы: ${wrongAnswers}`)
}
level.onchange = function (event) {
    console.log(event.target.value);
    // if(event.target.value==="eazy"){
    //     min=1
    //     max=9
    // }
    // if(event.target.value==="mid"){
    //     min=10
    //     max=99
    // }
    // if(event.target.value==="hard"){
    //     min=100
    //     max=999
    // }
    switch (event.target.value) {
        case "eazy":
            min = 1;
            max = 9;
            break;
        case "mid":
            min = 10;
            max = 99;
            break;
        default: 
            min = 100;
            max = 999;
            break;
    }
};
$('.reset').click(function() {
   localStorage.setItem("wrongAnswers",0);
   localStorage.setItem("rightAnswers",0);
   rightAnswers = localStorage.getItem("rightAnswers")
   wrongAnswers = localStorage.getItem("wrongAnswers")
});