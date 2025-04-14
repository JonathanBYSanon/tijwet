let numberOfQuestions = 0;
let currentQuestion = 1;
let correctAnswersCount = 0;
let Question = {
    equation : "",
    num1 : 0,
    num2 : 0,
    operator : "",
    answer : 0
}

let Answers = [];
let IsQuestionAnswered = true;

function getRandomQuestion(){
    const min = 1;
    const max = 20;

    let num1 = Math.floor(Math.random() * max) + min;
    let num2 = Math.floor(Math.random() * max) + min;

    const operators = ['+', '-', '*', '/'];
    let operator = operators[Math.floor(Math.random() * operators.length)];
    let answer = 0;

    if (operator === '+') {
        answer = num1 + num2;
    } else if (operator === '-') {
        if (num2 > num1) [num1, num2] = [num2, num1];
        answer = num1 - num2;
    } else if (operator === '*') {
        answer = num1 * num2;
    } else if (operator === '/') {
        answer = Math.floor(Math.random() * 5) + 1;
        num2 = Math.floor(Math.random() * max) + 1;
        num1 = answer * num2;
    }

    Question.num1 = num1;
    Question.num2 = num2;
    Question.operator = operator;
    Question.answer = answer;
    Question.equation = `${num1} ${operator} ${num2}`;
}

function getRandomAnswers() {
    const correct = Question.answer;
    Answers = [];

    // Create wrong answers based on small variations
    for (let i = 0; i < 3; i++) {
        let variation = Math.floor(Math.random() * 11) - 5; // between -5 and +5
        let fakeAnswer = correct + variation;

        // Make sure it's not the same as correct
        if (fakeAnswer === correct || Answers.includes(fakeAnswer) || fakeAnswer < 0) {
            i--; // retry
            continue;
        }

        Answers.push(fakeAnswer);
    }

    // Add correct answer and shuffle
    Answers.push(correct);
    Answers.sort(() => Math.random() - 0.5);
}


function verifyAnswer(selectedAnswer) {
    return parseInt(selectedAnswer) === Question.answer;
}

function resetBackEnd() {
    currentQuestion = 1;
    correctAnswersCount = 0;
    numberOfQuestions = parseInt(countSetter.value) || 0;
    Question = {
        equation : "",
        num1 : 0,
        num2 : 0,
        operator : "",
        answer : 0
    };
    Answers = [];
}


// ################## UI ################## //

const questionElement = document.getElementById('question');
const answersTd = document.querySelectorAll('.answer');
const nextButton = document.getElementById('next-button');
const message = document.getElementById('message');
const countSetter = document.getElementById('questions-count');

function resetUi() {
    message.innerHTML = 'Start the quiz when you are ready!';
    nextButton.innerText = 'START';
    questionElement.innerHTML = 'what is the result of ?';
    answersTd.forEach(td => {
        td.innerHTML = '?';
        td.classList.remove('correct', 'wrong');
    });
}


function InitializeGame() {
    resetBackEnd();
    resetUi();
}

function displayQuestion() {
    getRandomQuestion();
    getRandomAnswers();
    questionElement.innerHTML = `How much is "${Question.equation}" ?`;
    message.innerHTML = `Question ${currentQuestion} of ${numberOfQuestions}`;

    answersTd.forEach((td, index) => {
        td.classList.remove('correct', 'wrong');
        td.innerHTML = Answers[index];  
    });

    IsQuestionAnswered = false;
}

function showResult() {
    message.innerHTML = `You answered ${correctAnswersCount} out of ${numberOfQuestions} questions correctly!`;
    nextButton.innerText = 'FINISH';
}

nextButton.addEventListener('click', () => {
    const action = nextButton.innerText.toLowerCase();

    switch(action) {
        case "start":
            displayQuestion();
            nextButton.innerText = "NEXT";
            break;
        case "next":
            currentQuestion++;
            if (currentQuestion <= numberOfQuestions) {
                displayQuestion();
                IsQuestionAnswered = false;       
            } else {
                showResult();
            }
            break;
        case "finish":
            InitializeGame();
            break;
    }
});

answersTd.forEach(td => {
    td.addEventListener('click', () => {
        if (IsQuestionAnswered) return;

        const selectedAnswer = td.innerHTML;
        const isCorrect = verifyAnswer(selectedAnswer);

        if (isCorrect) {
            correctAnswersCount++;
            td.classList.add('correct');
            message.innerHTML = 'Correct!';
        } else {
            td.classList.add('wrong');
            const correctAnswer = Question.answer.toString();
            answersTd.forEach(answerTd => {
                if (answerTd.innerHTML === correctAnswer) {
                    answerTd.classList.add('correct');
                }
            });
            message.innerHTML = `Wrong!`;
        }

        IsQuestionAnswered = true;
    });
});

countSetter.addEventListener('change', () => {
    numberOfQuestions = parseInt(countSetter.value) || 0;
    if (numberOfQuestions < 10 || numberOfQuestions > 50) {
        countSetter.value = 10;
        numberOfQuestions = 10;
    }

    InitializeGame();
});

InitializeGame();