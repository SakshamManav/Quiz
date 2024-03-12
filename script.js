const questions = [
    {
        question: "Which is the Largest animal in the world?",
        Answers:[
            {text:"Shark", correct:false},
            {text:"Blue Whale", correct:true},
            {text:"Elephant", correct:false},
            {text:"Giraffe", correct:false},
            
        ]
    },
    {
        question: "Who is the Prime Minister of India?",
        Answers:[
            {text:"Manmohan Singh", correct:false},
            {text:"Rahul Gandhi", correct:false},
            {text:"Amit Shah", correct:false},
            {text:"Narendra Modi", correct:true},
            
        ]

    },

    {
        question: "Which planet in the Milky Way is the hottest? ",
        Answers:[
            {text:"Earth", correct:false},
            {text:"Venus", correct:true},
            {text:"Mercury", correct:false},
            {text:"Jupiter", correct:false},
    
    ]
    },
    {
        question: "Which Player is GOAT?",
        Answers:[
            {text: "Sachin Tendulkar", correct : false},
            {text: "MS Dhoni", correct : false},
            {text: "Virat Kohli", correct : false},
            {text: "All of the above", correct : true},
            
        ]
    },
    {
        question: "The world’s longest international border is between",
        Answers:[
            {text:"India and Pakistan", correct:false},
            {text:"South Korea and North Korea", correct:false},
            {text:"China and Russia", correct:false},
            {text:"Canada and United States", correct:true},
            
        ]

    }

]

let ques = document.querySelector(".ques");
let btns = document.querySelectorAll(".btn");
let next = document.querySelector(".next");
let app = document.querySelector(".app");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    ques.innerHTML = questionNo + ". " + currentQuestion.question;
    btns[0].innerHTML = currentQuestion.Answers[0].text;
    btns[1].innerHTML = currentQuestion.Answers[1].text;
    btns[2].innerHTML = currentQuestion.Answers[2].text;
    btns[3].innerHTML = currentQuestion.Answers[3].text;


    btns.forEach(btn=>{
        btn.addEventListener("click", (e)=>{

            showNext();
            const selectedAnswer = e.target.innerText;
            const correctAnswer = currentQuestion.Answers.find(answer=>answer.correct).text;

            if(selectedAnswer === correctAnswer){
                btn.style.backgroundColor = "green";
                score++;
            }
            else{
                btn.style.backgroundColor = "red";
            }
        })
        btn.style.backgroundColor = "";
    })
}

function showNext(){
    next.style.visibility = "visible";
}

function reset(){
    next.style.visibility = "hidden";
}

startQuiz();

next.addEventListener("click", (e)=>{
    currentQuestionIndex++;
    if(currentQuestionIndex === 5){
        let newDiv = document.createElement("div");
        newDiv.className = "Final";
        newDiv.textContent = `You get ${score} correct out of ${currentQuestionIndex}`;
        app.appendChild(newDiv);

        let tryAgain = document.createElement("button");
        tryAgain.className = "btn2";
        tryAgain.textContent = "Try Again";
        app.appendChild(tryAgain);

        tryAgain.onclick=()=>{
            currentQuestionIndex = 0;
            score = 0;
            startQuiz();

            if(currentQuestionIndex === 0){
                newDiv.remove();
                tryAgain.remove();

            }
        }
    }

    showQuestion();
    reset();
})