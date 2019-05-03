const qBank = [
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
        answers: ['Dragmire', 'Gerudo', 'Nohansen', 'None'],
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
        answers: ['Outset Island', 'Windfall Island', 'Crescent Island', 'Overlook Island'],
        rightAnswer: 'Outset Island'
    },
    {
        question: 'How much in-game time can pass in Majora\'s Mask before the moon falls?',
        answers: ['24 Hours', '30 Hours', '72 Hours', '48 hours'],
        rightAnswer: '72 Hours'
    },
    {
        question: 'In Breath of the Wild where is the Master Sword located?',
        answers: ['Korok Forest', 'Hyrule Castle', 'Death Mountain', 'Lake Kolomo'],
        rightAnswer: 'Korok Forest'
    },
];

let totalScore = 0;

let questionCount = 0;

function questionTemplate() {
    return `
        
        <h2>${qBank[questionCount].question}</h2>
        
        <form class="form-vert">
            <fieldset>
                <label class="answerNum">
                    <input type="radio" value="${qBank[questionCount].answers[0]}" name="answer" required>
                    <span class="ans">${qBank[questionCount].answers[0]}</span>
                </label>

                <label class="answerNum">
                    <input type="radio" value="${qBank[questionCount].answers[1]}" name="answer" required>
                    <span class="ans">${qBank[questionCount].answers[1]}</span>
                </label>

                <label class="answerNum">
                    <input type="radio" value="${qBank[questionCount].answers[2]}" name="answer" required>
                    <span class="ans">${qBank[questionCount].answers[2]}</span>
                </label>

                <label class="answerNum">
                    <input type="radio" value="${qBank[questionCount].answers[3]}" name="answer" required>
                    <span class="ans">${qBank[questionCount].answers[3]}</span>
                </label>

                <button type="submit" class="submit-button">Submit</button>
            </fieldset>
        </form>`
    
}


function startQuiz() {
// This function should make the starting screen turn into the first question when the start button is clicked.
    $('.start-button').click(function(event) {
        $('.before-start').hide();
        $('.question-num').text(1);
        $('.question-answer-form, .question-li, .score-li').css('display', 'block');

        renderQuestion();
    })
}

function changeQuestion() {
    $('.question-answer-form').on('click', '.next-question', function(event){
        event.preventDefault();
        if (questionCount < qBank.length-1) {
            questionCount++;
            $('.question-num').text(questionCount+1)
            renderQuestion();
        } else {
            displayResults();
        }
    })
}

function renderQuestion() {
// This function should render the different questions and display them to the DOM
     $('.question-answer-form').html(questionTemplate());
}

function handleAnswer() {
// this function should determine if the users answer was correct or incorrect and then display the proper feedback to the user
    $('.question-answer-form').submit(function(event){
        event.preventDefault();
        let choice = $('input:checked').val();
        let rightChoice = `${qBank[questionCount].rightAnswer}`;
        const isLast = questionCount === 9;
        if (choice === rightChoice) {
            displayCorrect(isLast);
            increaseScore();
        } else {
            displayIncorrect(isLast);
        }
    })
}

function increaseScore() {
    totalScore++;

    $('.current-score').text(totalScore);
}

function displayCorrect(isLast) {
//this function should contain the html for the correct answer
$('.question-answer-form').html(`<div class="correct-answer">
<h3>You are correct!</h3>
<button type="submit" class="next-question">Next Question</button>
</div>`)

if (isLast) {
    $('.next-question').text("See Results");
}

}

function displayIncorrect(isLast) {
//this function should contain the html for the wrong answers
    $('.question-answer-form').html(`<div class="incorrect-answer">
    <h3>You are incorrect</h3>
    <p>The correct answer was ${qBank[questionCount].rightAnswer}</p>
    <button type="submit" class="next-question">Next Question</button>
    </div>`)

    if (isLast) {
    $('.next-question').text("See Results");
    }
}

function displayResults() {
//this function should display the results to the user when the quiz is over
    if (totalScore === 10) {
        $('.question-answer-form').html(`<div class="results">
        <h3>Congratulations! You have a perfect score.</h3>
        <p>Your score is ${totalScore}/10</p>
        <button type="submit" class="restart-quiz">Restart Quiz!</button>
        </div>`)
    }       else if (totalScore <=9 && totalScore > 5) {
                $('.question-answer-form').html(`<div class="results">
                <h3>Great job, you really know your stuff!</h3>
                <p>Your score is ${totalScore}/10</p>
                <button type="submit" class="restart-quiz">Restart Quiz!</button>
                </div>`)
            } else {
                $('.question-answer-form').html(`<div class="results">
                <h3>You can do better than that. Why not try again?</h3>
                <p>Your score is ${totalScore}/10</p>
                <button type="submit" class="restart-quiz">Restart Quiz!</button>
                </div>`)
            }
}

function restartQuiz() {
//this function should let the user restart the quiz from the restart button at the end of the quiz and from the home button
    $('.question-answer-form').on('click', '.restart-quiz', function(event){
        location.reload();
    })
}

function runFunctions() {
    startQuiz();
    //renderQuestion();
    handleAnswer();
    //displayCorrect();
    //displayIncorrect();
    //displayResults();
    restartQuiz();
    changeQuestion();
}

$(runFunctions);