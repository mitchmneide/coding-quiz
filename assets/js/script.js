
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
        optionBtn.setAttribute("id","btn_id")
        optionBtn.innerText = quizQuestions[questionCounter].options[i];
        optionBtn.addEventListener("click", checkAnswer(questionCounter));
        optionBtn.classList.add("btn_class")
        document.body.appendChild(optionBtn);
        textEl.appendChild(optionBtn);
        console.log('buttons got loaded with eventlistener')
        // btn.addEventListener("click",)

        // tried puting this into it's own function called checkAnswer on line 59 i had it called (click, checkAnswer) but because these buttons were created in this for loop i can't reference them back in that function
        // so now i'm trying to make it go continue just from this function but still not getting a correct console log or textContent of correct
    }
   
  
};
var checkAnswer = function (choicesCounter) {
    if (quizQuestions[choicesCounter].options === quizQuestions[choicesCounter].answer){
        console.log('correct');
        return answerEl.textContent= "correct!";

    }
    else (quizQuestions[choicesCounter].options !== quizQuestions[choicesCounter].answer) 
        answerEl.textContent = "wrong";
    
}



// };
// timer settings
var quizTime = 10;
var penaltyTime = 10;
// my timer starts of slow doesn't load til like 2/3 seconds after the click, and it originally 60 seconds but for timing shorten down. also have to implement a -10 second penalty if question wrong
var timerCountdown = function () {
    timerEl.innerHTML= quizTime;
    var countTimer = setInterval(function () {
        timerEl.innerHTML=quizTime --;
        
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