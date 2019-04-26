const STORE = [
    {
        question: 'What year did Ocarina of Time come out in the United States?',
        answers: ['1998', '1996', '1999', '2001'],
        rightAnswer: '1998'
    },
    {
        question: 'What is the name of Link\'s hat and companion in The Minish Cap?',
        answers: ['Ozo', 'Tingle', 'Ezlo', 'Cappy'],
        rightAnswer: 'Ezlo'
    },
    {
    question: 'Which of the following is not an obtainable item in A Link to the Past?',
    answers: ['Golden Sword', 'Hookshot', 'Magic Mirror', 'Tornado Rod'],
    rightAnswer: 'Tornado Rod'
    },
    {
        question: 'Which of the following characters is the true identity of Sheik?',
        answers: ['Malon', 'Navi', 'Princess Zelda', 'Impa'],
        rightAnswer: 'Princess Zelda'
    },
    {
        question: 'What is Ganondorf\'s last name?',
        answers: ['Dragmire', 'Gerudo', 'Nohansen', 'He does not have one'],
        rightAnswer: 'Dragmire'
    },
    {
        question: 'Link turns into which animal in Twilight Princess?',
        answers: ['Bear', 'Horse', 'Cat', 'Wolf'],
        rightAnswer: 'Wolf'
    },
    {
        question: 'How many Gold Skulltula\'s does Link need to destroy in Ocarina of Time?',
        answers: ['100', '150', '50', '175'],
        rightAnswer: '100'
    },
    {
        question: 'What is the name of Link\'s home island in The Wind Waker?',
        answers: ['Outset Island', 'Windfall Island', 'Crescent Moon Island', 'Overlook Island'],
        rightAnswer: 'Outset Island'
    },
    {
        question: 'How much in-game time can pass in Majora\'s Mask before the moon falls?',
        answers: ['24 Hours', '30 Hours', '72 Hours', '48 hours'],
        rightAnswer: '72 Hours'
    },
    {
        question: 'In Breath of the Wild where is the Master Sword located?',
        answers: ['Korok Forest', 'Hyrule Castle', 'Death Mountain', 'Spring of Courage'],
        rightAnswer: 'Korok Forest'
    },
];

let totalScore = 0;

let questionCount = 0;


function startQuiz() {
// This function should make the starting screen turn into the first question when the start button is clicked.
};

function renderQuestion() {
// This function should render the different questions and display them to the DOM
};

function handleAnswer() {
// this function should determine if the users answer was correct or incorrect and then display the proper feedback to the user
};

function displayCorrect() {
//this function should contain the html for the correct answer
};

function displayIncorrect() {
//this function should contain the html for the wrong answers
};

function displayResults() {
//this function should display the results to the user when the quiz is over
};

function restartQuiz() {
//this function should let the user restart the quiz from the restart button at the end of the quiz and from the home button
};

function runFunctions() {
    startQuiz();
    renderQuestion();
    handleAnswer();
    displayCorrect();
    displayIncorrect();
    displayResults();
    restartQuiz();
};

runFunctions();

