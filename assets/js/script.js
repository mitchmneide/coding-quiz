
var beginEl = document.querySelector("#btn-begin");
var textEl = document.querySelector("#questionContainer");
var answerEl = document.querySelector("#correctWrong");
var timerEl = document.querySelector("#timeSet")

var quizQuestions = [
    {
        Q: "Where in the HTML does the JavaScript code go?",
        options: ["head", "div", "section", "body"],
        answer: "body"
    },
    {
        Q: "What are Arrays in JavaScript defined by?",
        options: ["ordered list of values", "ordered list of variables", "ordered list of strings", "ordered list of functions"],
        answer: "ordered list of values"
    },
    {
        Q: "When ending code in Javascript what is used to close it out? ",
        options: ["comma", "curly bracket", "semi-colon", "colon"],
        answer: "semi-colon"
    },
    {
        Q: "What are function and var known as in Javascript?",
        options: ["variables", "data", "elements", "declaration statements"],
        answer: "declaration statements"
    },
    {
        Q: "In this example of an array var pokemon = ['Eevee','Vaporeon', 'Jolteon', 'Flareon', 'Espeon','Umbreon'] what is the element of[4] ",
        options: ["Flareon", "Jolteon", "Espeon", "Umbreon"],
        answer: "Espeon"

    }
];


// highscore 
var score = 0;
// start quiz 
var startQuiz = function () {
    beginEl.remove();
    renderQuestions();
    timerCountdown();
};
var counter = 0;
var renderQuestions = function () {
    textEl.textContent = quizQuestions[counter].Q
    renderChoices(counter);
    counter++;
    

};
var renderChoices = function (questionCounter) {
    for (var i = 0; i < quizQuestions[questionCounter].options.length; i++) {
        // make a button for each
        var optionBtn = document.createElement("button");
        optionBtn.innerText = quizQuestions[questionCounter].options[i];
        textEl.appendChild(optionBtn);
        // btn.addEventListener("click",)
        optionBtn.addEventListener("click",checkAnswer(questionCounter));
    }
   
    
};
var checkAnswer = function (choicesCounter) {
if (quizQuestions[choicesCounter].options === quizQuestions[choicesCounter].answer){
    console.log('correct')
    answerEl.textContent= "correct!";
}
else (quizQuestions[choicesCounter].options !== quizQuestions[choicesCounter].answer) 
    answerEl.textContent = "wrong";

};
// timer settings
var quizTime = 10;
var penaltyTime = 10;

var timerCountdown = function () {
    timerEl.innerHTML = quizTime;
    var countTimer = setInterval(function () {
        quizTime - 1;
        timerEl.innerHTML = quizTime--;
        if (quizTime <= 0) {
            clearInterval(countTimer);
            timerEl.innerHTML = "Quiz over";
        }
    }, 1000)


};


// var answerEl = function(event) {
//     var answerPicked = event.target 
//     if (quizQuestions[0].a === answerPicked.innerText) {
//         answerEl.innerText= "Correct!";
//     }
//     else {
//         answerEl.innerText = "Wrong!";
//     }
// };


beginEl.addEventListener("click", startQuiz);