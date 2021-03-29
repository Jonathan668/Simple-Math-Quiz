const display = document.getElementById('display')
const addButton = document.getElementById('add-btn')
const subButton = document.getElementById('sub-btn')
const multButton = document.getElementById('mult-btn')
const divButton = document.getElementById('div-btn')
const returnButton = document.getElementById('return-btn')
const menuContainerElement = document.getElementById('menu-container')

const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
let shuffledQuestions, currentQuestionIndex
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-btns')

addButton.addEventListener('click', startAddQuiz)
subButton.addEventListener('click', startSubQuiz)
multButton.addEventListener('click', startMultQuiz)
divButton.addEventListener('click', startDivQuiz)
returnButton.addEventListener('click', returnToMenu)

function startAddQuiz(){
    console.log('Addition Quiz Started')
    returnButton.classList.remove('hide')
    menuContainerElement.classList.add('hide')
    shuffledQuestions = addQuestions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}
function startSubQuiz(){
    console.log('Subtraction Quiz Started')
    returnButton.classList.remove('hide')
    menuContainerElement.classList.add('hide')
    shuffledQuestions = subQuestions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}
function startMultQuiz(){
    console.log('Multiplication Quiz Started')
    returnButton.classList.remove('hide')
    menuContainerElement.classList.add('hide')
    shuffledQuestions = multQuestions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}
function startDivQuiz(){
    console.log('Division Quiz Started')
    returnButton.classList.remove('hide')
    menuContainerElement.classList.add('hide')
    shuffledQuestions = divQuestions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function returnToMenu(){
    console.log('Return to menu')
    menuContainerElement.classList.remove('hide')
    questionContainerElement.classList.add('hide')
    returnButton.classList.add('hide')
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    display.classList.add('hide')
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
     questionElement.innerText = question.question
     question.answers.forEach(answer => {
         const button = document.createElement('button')
         button.innerText = answer.text
         button.classList.add('btn')
         if(answer.correct){
             button.dataset.correct = answer.correct
         }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
     })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    }   else{
        display.classList.remove('hide')
        display.innerText = "Done"
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }
    else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const addQuestions = [
    {
        question: 'What is 2 + 2?',
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false},
            {text: '5', correct: false},
            {text: '7', correct: false},
        ]
    },
    {
        question: 'What is 5 + 4?',
        answers: [
            {text: '10', correct: false},
            {text: '12', correct: false},
            {text: '9', correct: true},
            {text: '2', correct: false}
        ]
    },
    {
        question: 'What is 8 + 9?',
        answers: [
            {text: '27', correct: false},
            {text: '15', correct: false},
            {text: '24', correct: false},
            {text: '17', correct: true}
        ]
    },
    {
        question: 'What is 10 + 34?',
        answers: [
            {text: '56', correct: false},
            {text: '44', correct: true},
            {text: '53', correct: false},
            {text: '49', correct: false}
        ]
    },
    {
        question: 'What is 23 + 48?',
        answers: [
            {text: '71', correct: true},
            {text: '65', correct: false},
            {text: '86', correct: false},
            {text: '80', correct: false}
        ]
    }
    
]

const subQuestions = [
    {
        question: 'What is 4 - 2?',
        answers: [
            {text: '0', correct: false},
            {text: '2', correct: true},
            {text: '1', correct: false},
            {text: '7', correct: false}
        ]
    },
    {
        question: 'What is 44 - 22?',
        answers: [
            {text: '13', correct: false},
            {text: '23', correct: false},
            {text: '22', correct: true},
            {text: '17', correct: false}
        ]
    },
    {
        question: 'What is 56 - 21?',
        answers: [
            {text: '35', correct: true},
            {text: '28', correct: false},
            {text: '32', correct: false},
            {text: '37', correct: false}
        ]
    },
    {
        question: 'What is 73 - 45?',
        answers: [
            {text: '45', correct: false},
            {text: '28', correct: true},
            {text: '23', correct: false},
            {text: '36', correct: false}
        ]
    },
    {
        question: 'What is 32 - 14?',
        answers: [
            {text: '15', correct: false},
            {text: '23', correct: false},
            {text: '20', correct: false},
            {text: '18', correct: true}
        ]
    }
]

const multQuestions = [
    {
        question: 'What is 2 * 2?',
        answers: [
            {text: '4', correct: true},
            {text: '6', correct: false},
            {text: '10', correct: false},
            {text: '15', correct: false}
        ]
    },
    {
        question: 'What is 100 * 0?',
        answers: [
            {text: '100', correct: false},
            {text: '0', correct: true},
            {text: '110', correct: false},
            {text: '10', correct: false}
        ]
    },
    {
        question: 'What is 32 * 4?',
        answers: [
            {text: '125', correct: false},
            {text: '219', correct: false},
            {text: '128', correct: true},
            {text: '112', correct: false}
        ]
    },
    {
        question: 'What is 45 * 5?',
        answers: [
            {text: '125', correct: false},
            {text: '305', correct: false},
            {text: '228', correct: false},
            {text: '225', correct: true}
        ]
    },
    {
        question: 'What is 73 * 2?',
        answers: [
            {text: '180', correct: false},
            {text: '146', correct: true},
            {text: '158', correct: false},
            {text: '106', correct: false}
        ]
    }
]

const divQuestions = [
    {
        question: 'What is 4 / 2?',
        answers: [
            {text: '3', correct: false},
            {text: '2', correct: true},
            {text: '6', correct: false},
            {text: '12', correct: false}
        ]
    },
    {
        question: 'What is 44 / 0?',
        answers: [
            {text: '44', correct: false},
            {text: 'undefined', correct: true},
            {text: '0', correct: false},
            {text: '14', correct: false}
        ]
    },
    {
        question: 'What is 72 / 3?',
        answers: [
            {text: '35', correct: false},
            {text: '21', correct: false},
            {text: '34', correct: false},
            {text: '24', correct: true}
        ]
    },
    {
        question: 'What is 155 / 5?',
        answers: [
            {text: '31', correct: true},
            {text: '25', correct: false},
            {text: '45', correct: false},
            {text: '50', correct: false}
        ]
    },
    {
        question: 'What is 200 / 4?',
        answers: [
            {text: '40', correct: false},
            {text: '35', correct: false},
            {text: '25', correct: false},
            {text: '50', correct: true}
        ]
    }
]