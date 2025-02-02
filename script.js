const correctAnswerSound = new Audio ('./correct-answer.mp3');
const wrongAnswerSound = new Audio ('error-sound.mp3');
const achievementSound = new Audio ('achievement-sound.mp3')
const questionOneInput = document.getElementById('question1-input');
const submitButtonOne = document.getElementById('question1-submit');
const answer = document.getElementById('answer');

document.getElementById('question1-input').focus();

submitButtonOne.onclick = resultOne;
questionOneInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        resultOne();
    }
});

function resultOne() {
    if (questionOneInput.value.toLowerCase() === "red") {
        document.getElementById('answer').innerHTML = '<span style="color:green ;">Correct!</span>';
        correctAnswerSound.play();
            setTimeout(() => {
                    questionTwoInput.focus();
                }, 1000);
    } else {
        document.getElementById('answer').innerHTML = '<span style="color:red ;">Try again!</span>';
        wrongAnswerSound.play();
        setTimeout(() => {
            questionOneInput.value = '';
            answer.innerHTML = '';
            questionOneInput.focus();
        }, 1500);
    }
}

const questionTwoInput = document.getElementById('question2-input');
const submitButtonTwo = document.getElementById('question2-submit');
const answerTwo = document.getElementById('answer2');

submitButtonTwo.onclick = resultTwo;
questionTwoInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        resultTwo();
    }
});

function resultTwo() {
    if (questionTwoInput.value.toLowerCase() === "black") {
        document.getElementById('answer2').innerHTML = '<span style="color:green ;">Correct!</span>';
        correctAnswerSound.play();
        setTimeout(() => {
            questionThreeInput.focus();
        }, 1000);
    } else {
        document.getElementById('answer2').innerHTML = '<span style="color:red ;">Try again!</span>';
        wrongAnswerSound.play();
        setTimeout(() => {
            questionTwoInput.value = '';
            answerTwo.innerHTML = '';
            questionTwoInput.focus();
        }, 1500);
    }
}

const questionThreeInput = document.getElementById('question3-input');
const submitButtonThree = document.getElementById('question3-submit');
const answerThree = document.getElementById('answer3');

submitButtonThree.onclick = resultThree;
questionThreeInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        resultThree();
    }
});

function resultThree() {
    if (questionThreeInput.value.toLowerCase() === "yellow") {
        document.getElementById('answer3').innerHTML = '<span style="color:green ;">Correct!</span>';
        correctAnswerSound.play();
        setTimeout(() => {
            questionFourInput.focus();
        }, 1000);
    } else {
        document.getElementById('answer3').innerHTML = '<span style="color:red ;">Try again!</span>';
        wrongAnswerSound.play();
        setTimeout(() => {
            questionThreeInput.value = '';
            answerThree.innerHTML = '';
            questionThreeInput.focus();
        }, 1500);
    }
}

const questionFourInput = document.getElementById('question4-input');
const submitButtonFour = document.getElementById('question4-submit');
const answerFour = document.getElementById('answer4');
const greeting = document.getElementById('great-job');

submitButtonFour.onclick = resultFour;
questionFourInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        resultFour();
    }
});

function resultFour() {
    if (questionFourInput.value.toLowerCase() === "pink") {
        document.getElementById('answer4').innerHTML = '<span style="color:green ;">Correct!</span>';
        correctAnswerSound.play();
        setTimeout(() => {
            questionFiveInput.focus();
        }, 1000);

    } else {
        document.getElementById('answer4').innerHTML = '<span style="color:red ;">Try again!</span>';
        wrongAnswerSound.play();
        setTimeout(() => {
            questionFourInput.value = '';
            answerFour.innerHTML = '';
            questionFourInput.focus();
        }, 1500);
    }
}

const questionFiveInput = document.getElementById('question5-input');
const submitButtonFive = document.getElementById('question5-submit');
const answerFive = document.getElementById('answer5');

submitButtonFive.onclick = resultFive;
questionFiveInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        resultFive();
    }
});

function resultFive() {
    if (questionFiveInput.value.toLowerCase() === "blue") {
        document.getElementById('answer5').innerHTML = '<span style="color:green ;">Correct!</span>';
        correctAnswerSound.play();
        setTimeout(() => {
            questionSixInput.focus();
        }, 1000);
    } else {
        document.getElementById('answer5').innerHTML = '<span style="color:red ;">Try again!</span>';
        wrongAnswerSound.play();
        setTimeout(() => {
            questionFiveInput.value = '';
            answerFive.innerHTML = '';
            questionFiveInput.focus();
        }, 1500);
    }
}

const questionSixInput = document.getElementById('question6-input');
const submitButtonSix = document.getElementById('question6-submit');
const answerSix = document.getElementById('answer6');

submitButtonSix.onclick = resultSix;
questionSixInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        resultSix();
    }
});

function resultSix() {
    if (questionSixInput.value.toLowerCase() === "green") {
        document.getElementById('answer6').innerHTML = '<span style="color:green ;">Correct!</span>';
        correctAnswerSound.play();
        setTimeout(() => {
            questionSevenInput.focus();
        }, 1000);
    } else {
        document.getElementById('answer6').innerHTML = '<span style="color:red ;">Try again!</span>';
        wrongAnswerSound.play();
        setTimeout(() => {
            questionSixInput.value = '';
            answerSix.innerHTML = '';
            questionSixInput.focus();
        }, 1500);
    }
}

const questionSevenInput = document.getElementById('question7-input');
const submitButtonSeven = document.getElementById('question7-submit');
const answerSeven = document.getElementById('answer7');

submitButtonSeven.onclick = resultSeven;
questionSevenInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        resultSeven();
    }
});

function resultSeven() {
    if (questionSevenInput.value.toLowerCase() === "orange") {
        document.getElementById('answer7').innerHTML = '<span style="color:green ;">Correct!</span>';
        correctAnswerSound.play();
        setTimeout(() => {
            questionEightInput.focus();
        }, 1000);
    } else {
        document.getElementById('answer7').innerHTML = '<span style="color:red ;">Try again!</span>';
        wrongAnswerSound.play();
        setTimeout(() => {
            questionSevenInput.value = '';
            answerSeven.innerHTML = '';
            questionSevenInput.focus();
        }, 1500);
    }
}

const questionEightInput = document.getElementById('question8-input');
const submitButtonEight = document.getElementById('question8-submit');
const answerEight = document.getElementById('answer8');

submitButtonEight.onclick = resultEight;
questionEightInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        resultEight();
    }
});

function resultEight() {
    if (questionEightInput.value.toLowerCase() === "purple") {
        document.getElementById('answer8').innerHTML = '<span style="color:green ;">Correct!</span>';
        correctAnswerSound.play();
        setTimeout(() => {
            questionNineInput.focus();
        }, 1000);
    } else {
        document.getElementById('answer8').innerHTML = '<span style="color:red ;">Try again!</span>';
        wrongAnswerSound.play();
        setTimeout(() => {
            questionEightInput.value = '';
            answerEight.innerHTML = '';
            questionEightInput.focus();
        }, 1500);
    }
}

const questionNineInput = document.getElementById('question9-input');
const submitButtonNine = document.getElementById('question9-submit');
const answerNine = document.getElementById('answer9');

submitButtonNine.onclick = resultNine;
questionNineInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        resultNine();
    }
});

function resultNine() {
    if (questionNineInput.value.toLowerCase() === "brown") {
        document.getElementById('answer9').innerHTML = '<span style="color:green ;">Correct!</span>';
        correctAnswerSound.play();
        setTimeout(() => {
            questionTenInput.focus();
        }, 1000);
    } else {
        document.getElementById('answer9').innerHTML = '<span style="color:red ;">Try again!</span>';
        wrongAnswerSound.play();
        setTimeout(() => {
            questionNineInput.value = '';
            answerNine.innerHTML = '';
            questionNineInput.focus();
        }, 1500);
    }
}

const questionTenInput = document.getElementById('question10-input');
const submitButtonTen = document.getElementById('question10-submit');
const answerTen = document.getElementById('answer10');
const finalGreeting = document.getElementById('final-great-job');

const refresh = document.getElementById('refresh-button');

submitButtonTen.onclick = resultTen;
questionTenInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        resultTen();
    }
});

function resultTen() {
    if (questionTenInput.value.toLowerCase() === "white") {
        document.getElementById('answer10').innerHTML = '<span style="color:green ;">Correct!</span>';
        correctAnswerSound.play();
        setTimeout(() => {
            finalGreeting.innerHTML = '<span style="color:blue ;">AMAZING WORK!!</span>';
            achievementSound.play();
            refresh.focus();
        }, 1000);
    } else {
        document.getElementById('answer10').innerHTML = '<span style="color:red ;">Try again!</span>';
        wrongAnswerSound.play();
        setTimeout(() => {
            questionTenInput.value = '';
            answerTen.innerHTML = '';
            questionTenInput.focus();
        }, 1500);
    }
}

refresh.onclick = refreshPage;

function refreshPage() {
    location.reload();
}
