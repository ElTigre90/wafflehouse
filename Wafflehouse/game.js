const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter= 0
let availableQuestions = []

let questions = [
    {
     question:'What is javaScript a language for?',
     choice1: 'A language for Monkeys to make coffee.'
     choice2: 'A love language for romance.'
     choice3: 'A language for coding a computer.'
     choice4: 'Something to say while brushing yout teeth.'
     answer: 3,
    },
    {
     question:'What is javaScript a language for?',
     choice1: 'A language for Monkeys to make coffee.'
     choice2: 'A love language for romance.'
     choice3: 'A language for coding a computer.'
     choice4: 'Something to say while brushing yout teeth.'
     answer: 3,
    },
    {
        question:'What is javaScript a language for?',
        choice1: 'A language for Monkeys to make coffee.'
        choice2: 'A love language for romance.'
        choice3: 'A language for coding a computer.'
        choice4: 'Something to say while brushing yout teeth.'
        answer: 3,
            },
            {
                question:'What is javaScript a language for?',
                choice1: 'A language for Monkeys to make coffee.'
                choice2: 'A love language for romance.'
                choice3: 'A language for coding a computer.'
                choice4: 'Something to say while brushing your teeth.'
                answer: 3,
                    },
                    {
                        question:'Which of following two are used to describe a variable in JavaScript?',
                        choice1: 'var,let.'
                        choice2: 'sub, yum.'
                        choice3: 'var, div.'
                        choice4: 'tooth, brush.'
                        answer: 1,
                            },
                            {
                                question:'Upon encountering empty statements, what does the javaScript interpreter do?',
                                choice1: 'Throws an error.'
                                choice2: 'Ignores the statement.'
                                choice3: 'Gives a warning.'
                                choice4: 'Something to say while brushing your teeth.'
                                answer: 2,
                                    },
                                    {
                                        question:'Arrays in JavaScript are defined by which of the following statements?',
                                        choice1: 'It is an ordered list of vaules.'
                                        choice2: 'It is an ordered list of strings.'
                                        choice3: 'It is an ordered list of functions.'
                                        choice4: 'They are defined by toothbrushes.'
                                        answer: 1,
                                            },
                                            {
                                                question:'Which of the following is not a javascript data types?',
                                                choice1: 'Null type.'
                                                choice2: 'Undefined Type.'
                                                choice3: 'Number type.'
                                                choice4: 'All of the mentioned.'
                                                answer: 4,
                                                    },
                                                    {
                                                        question:'Which of the following can be used to call a JavaScript Code Snippet?',
                                                        choice1: 'A Function/Method.'
                                                        choice2: 'Preprocessor.'
                                                        choice3: 'Triggering Event.'
                                                        choice4: 'Brush Teeth.'
                                                        answer: 1,
                                                            },
                                                            {
                                                                question:'Why are event handlers are needed in JavaScript?',
                                                                choice1: 'Allows JS code to alter the behaviour of windows.'
                                                                choice2: 'Tells HTML what to do.'
                                                                choice3: 'To change to a new server.'
                                                                choice4: 'To prevent cavities.'
                                                                answer: 1,
                                                                    },
                                                                    {
                                                                        question:'Which of the following is not a framework?',
                                                                        choice1: 'JavaScript.Net.'
                                                                        choice2: 'javaScript.'
                                                                        choice3: 'CocoaJS.'
                                                                        choice4: 'jQuery.'
                                                                        answer: 2,
                                                                            },       
]

const SCORE_POINTS= 100
const MAX_QUESTIONS = 10

StartGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
if(availableQuestions.length === 0) || (questionCounter > MAX_QUESTIONS) {
    localstorage.setItem('mostRecentScore', score)

    return.window.location.assign('/end.html')
 }
    
 
 questionCounter++
    progressText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS}'
    progressBarFull.style.width = ${(questionCounter/MAX_QUESTIONS)  * 100}%
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question
    
    choices.forEach(choice => {
        const number = choice.dataset ['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEac(choice => {
    choice.addEventListener('click', @ => {
        if(!acceptingAnswers return
       
       acceptingAnswers = false
       const selectedChoice = e.target
       const selectedAnswer = selectedChoice.dataset['number']

       let classtoApply = selectedAnswer == currentQuestion. answer ? 'correct' : 
       'incorrect'

       if(classtoApply === 'correct') {
        incrementScore(SCORE_POINTS)

       }
       )
    })
})