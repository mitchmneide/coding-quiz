
var beginEl = document.querySelector("#btn-begin");
var textEl = document.querySelector("#questionContainer");
var answerEl = document.querySelector("#correctWrong");
var timerEl = document.querySelector("#timeSet")
var questionEl = document.querySelector("#questions-content")
let shuffleQs, currentIndex;
const questions = [
    { 
        question: "Where in the HTML does the JavaScript code go?",
        answers: [
            {text: "head", correct: false}, {text: "div", correct: false}, {text: "section", correct:false },{text:"body", correct: true} 
        ]
    
    },
    { 
        question: "What are Arrays in JavaScript defined by?",
        answers: [
            {text: "ordered list of values", correct:true}, {text:"ordered list of variables",correct:false}, {text: "ordered list of strings", correct:false}, {text:"ordered list of functions", correct: false}
        ]

    },
    { 
        question: "When ending code in Javascript what is used to close it out? ",
        answers: [
            {text:"comma",correct:false}, {text:"curly bracket", correct: false }, {text:"semi-colon",correct:true},{text:"colon",correct:false} 
        ]
    },
    { 
        question: "What are function and var known as in Javascript?",
        answers: [
            {text:"variables", correct:false},{text:"data", correct:false}, {text:"elements",correct:false},{text:"declaration statements", correct:true}
        ]
    },
    { 
        question: "In this example of an array var pokemon = ['Eevee','Vaporeon', 'Jolteon', 'Flareon', 'Espeon','Umbreon'] what is the element of[4] ",
        answers: [
            {text:"Flareon", correct:false}, {text:"Jolteon", correct: false}, {text: "Espeon", correct:true}, {text:"Umbreon", correct:false}
        ]
    }
];

var startQuiz = function () {
    beginEl.remove();
    textEl.remove();
    questionEl.classList.remove("hidden")
    shuffleQs = questions.sort(() => Math.random() -.5)
    currentIndex = 0;
    nextQuestion();
};
var nextQuestion = function() {

}
var showQuestions = function(question){
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        var answerButton = document.createElement('button')
        answerButton.innerText= answer.text 
        answerButton.classList.add('option')
        if (answer.correct) {
            answerButton.dataset.correct= answer.correct
        }
        answerButton.addEventListener('click', answerSelected)
    })
}

// timer settings
var quizTime = 10;
var penaltyTime = 10;
// my timer starts of slow doesn't load til like 2/3 seconds after the click, and it originally 60 seconds but for timing shorten down. also have to implement a -10 second penalty if question wrong
var timerCountdown = function () {
    timerEl.innerHTML= quizTime;
    var countTimer = setInterval(function () {
        timerEl.innerHTML = quizTime; timerEl.innerHTML=quizTime --;
        
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