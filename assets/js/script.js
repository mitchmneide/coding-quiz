
var beginEl = document.querySelector("#btn-begin");
var textEl = document.querySelector("#questionContainer");
var answerEl = document.querySelector("#correctWrong");
var timerEl = document.querySelector("#timeSet")
const container = document.getElementById("questions-content");
var questionEl = document.querySelector("#question")
var answerBtn = document.querySelector("#answers");
var scoreHigh = document.querySelector("#viewHigh")
var currentScore = document.querySelector("#current")
var saveInitial = document.querySelector("#initials");
var saveScore = document.querySelector("#submitInitials");
var highSection = document.querySelector("#high-score-section");
var finalScore = document.querySelector("#finalS")

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
var reset = function () {
    while(answerBtn.firstChild){
        answerBtn.removeChild
        (answerBtn.firstChild)
    }
}
// start quiz function 
var startQuiz = function () {
    beginEl.remove();
    textEl.remove();
    container.classList.remove('hidden')
    shuffleQs = questions.sort(() => Math.random() -.5)
    currentIndex = 0;
    timerCountdown();
    highScore();
    nextQuestion();
};
var nextQuestion = function() {
    reset();
    showQuestions(shuffleQs[currentIndex]);
}
var showQuestions = function(question){
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        var answerButton = document.createElement('button')
        answerButton.innerText = answer.text 
        answerButton.classList.add('option')
        if (answer.correct) {
            answerButton.dataset.correct= answer.correct
        }
        answerButton.addEventListener('click', answerSelected);
        answerBtn.appendChild(answerButton);
    })
}
var answerSelected = function (event) {
    var selectedAnswer = event.target
    var correctAnswer = selectedAnswer.dataset.correct 
    Array.from(answerBtn.children).forEach
    if (correctAnswer) {
        console.log("correct");
        currentScore.innerText =score +=1;
        answerEl.innerText = "Correct!"
    } 
    else {
        console.log ("wrong")
        quizTime -= 10;
        answerEl.innerText = "Wrong"
    }
    nextQuestion();
}
// timer settings
var quizTime = 10;
var penaltyTime = 10;
var timerCountdown = function () {
    timerEl.innerHTML = quizTime;
    var countTimer = setInterval(function () {
        quizTime--;
        timerEl.innerHTML = quizTime;
        if (quizTime <= 0) {
            clearInterval(countTimer);
            timerEl.innerHTML = "quiz over"
            quizOver();
        }
    }, 1000);

};
var score = 0;
var scoreTotal ="";
var highScore = function () {
    currentScore.classList.remove("hidden");
score = 0;
score +1;
}
var quizOver = function() {
    container.remove();
    highSection.classList.remove("hidden");
    saveInitial.classList.remove('hidden');
    saveScore.classList.remove('hidden');
    finalScore.textContent = score;
}



var savingScore = function (event){
finalScore = score
localStorage.setItem ("score", score.value);
localStorage.setItem ("initials", saveInitial.value);

localStorage.getItem("score")
localStorage.getItem("initials")


}
answerBtn.addEventListener("click", () => {
    currentIndex++
    if(currentIndex < questions.length){
    nextQuestion();
    }
    else {
        quizOver();
    }
    
})
saveScore.addEventListener("click", savingScore)
// begins the quiz
beginEl.addEventListener("click", startQuiz);