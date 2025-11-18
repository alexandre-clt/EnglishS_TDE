const statGameButton = document.querySelector(".start-quiz")
const questionConteiner = document.querySelector(".quiz-container1")
const answercontainer = document.querySelector(".quiz-container2")
const questionElement = document.querySelector(".question")
const nextButton = document.querySelector(".proxima-pergunta")


statGameButton.addEventListener("click", startGame)
nextButton.addEventListener("click", displayNextQuestion)

let currentQuestionIndex = 0
let totalScore = 0

function startGame() {
    statGameButton.classList.add("hide")
    questionConteiner.classList.remove("hide")
    displayNextQuestion()
}
function displayNextQuestion() {
resetState()

if (questions.length == currentQuestionIndex) {
    return finishGame()

}

    questionElement.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answer => {
        const newAnswer = document.createElement("button")
        newAnswer.classList.add("answers" , "but")
        newAnswer.textContent = answer.text
        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }
        answercontainer.appendChild(newAnswer)

        newAnswer.addEventListener("click", selectAnswer)
        })
}

function resetState() {
        while (answercontainer.firstChild) {
        answercontainer.removeChild(answercontainer.firstChild)
    }

    document.body.removeAttribute("class")
    nextButton.classList.add("hide")
}

function selectAnswer (event) {
    const answerClicked = event.target
    if (answerClicked.dataset.correct) {
        document.body.classList.add("correct")
        totalScore++
    } else {
        document.body.classList.add("wrong")
    }


    document.querySelectorAll(".answers").forEach(button => {
        if (button.dataset.correct) { 
            button.classList.add("correct")
        } else {
            button.classList.add("wrong")
        }
        button.disabled = true
    })

    nextButton.classList.remove("hide")
    currentQuestionIndex++

}
function finishGame() {
const totalQuestions = questions.length
const performance = Math.floor(totalScore * 100 / totalQuestions)

let performanceMessage = ""

switch  (true) {
    case (performance >= 80):
        performanceMessage = "Excelente trabalho!"
        break
    case (performance >= 50):
        performanceMessage = "Bom trabalho!"
        break
    default:
        performanceMessage = "Precisa melhorar! ;("
}     
    
questionConteiner.innerHTML = `
    <h2 class = "final" >Quiz Finalizado!</h2>
    <h3 class = "final" >Sua pontuação: ${totalScore} de ${totalQuestions}</h3>
    <h3 class = "final" >Desempenho: ${performance}%</h3>
    <h3 class = "final" >${performanceMessage}</h3>
    <button class="but" onclick="location.reload()">Reiniciar Quiz</button>
`

}

















const questions = [ { 
    question: "Em qual sentença está corretamente usado o verto 'TO GO', conforme as regras do Simple Present?",
    answers: [
        { text: "A - She go to school every day.", correct: false },
        { text: "B - She goes to school every day.", correct: true },
        { text: "C - She going to school every day.", correct: false },
        { text: "D -She to go school every day.", correct: false },
    ]

},  { 
    question: "Choose the negative form of the sentence: “They play soccer on weekends.",
    answers: [
        { text: "A - They not play soccer on weekends.", correct: false },
        { text: "B - They don’t plays soccer on weekends.", correct: false },
        { text: "C - They don’t play soccer on weekends.", correct: true },
        { text: "D  -They doesn’t play soccer on weekends.", correct: false },
    ]

}, { 
    question: "Which question is correct in the Simple Present?",
    answers: [
        { text: "A - Do he work in a bank?", correct: false },
        { text: "B - Does he works in a bank?", correct: false },
        { text: "C - Does he work in a bank?", correct: true },
        { text: "D - He does work in a bank?", correct: false },
    ]
}, { 
    question: "Complete the sentence: “She ___ coffee every morning.",
    answers: [
        { text: "A - drink", correct: false },
        { text: "B - drinking", correct: false },
        { text: "C - drinks", correct: true },
        { text: "D - drinkes", correct: false },
    ]
}, { 
    question: "Qual a sentença está correta?",
    answers: [
        { text: "A - I study English every day.", correct: false },
        { text: "B - He studies math at night.", correct: false },
        { text: "C - They plays soccer on Sunday.", correct: true },
        { text: "D - We watch TV in the evening.", correct: false },
    ]
}, { 
    question: "Escolha a sentença negativa correta do Simple Present:",
    answers: [
        { text: "A - She doesn’t like chocolate.", correct: true },
        { text: "B - She don’t like chocolate.", correct: false },
        { text: "C - She no like chocolate.", correct: false },
        { text: "D - She isn’t like chocolate.", correct: false },
    ]
}, { 
    question: "Complete the question: “___ you live in Brazil?",
    answers: [
        { text: "A - Do", correct: true },
        { text: "B - Does", correct: false },
        { text: "C - Did", correct: false },
        { text: "D - Are", correct: false },
    ]
}
]