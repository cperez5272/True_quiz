// question database
const STORE = [
    {
        question: `Which of the following JoBros poses with their face forward, right arm straight and fist clenched with their left arm raised in front of their face, palm open and facing backwards?`,
        answers: [
            `Okuyasu Nijimura`,
            `Caesar Antonio Zeppeli`,
            `Speedwagon`,
            `Hol Horse`,
        ],
        correctAnswer: `Caesar Antonio Zeppeli`
    },
    {
        question: `Which of these characters have the longest dialog ever seen in the series?`,
        answers: [
            `Jean Pierre Polnareff`,
            `Foo Fighters`,
            `Notorious B.I.G`,
            `Yoshikage Kira`,
        ],
        correctAnswer: `Yoshikage Kira`
    },
    {
        question: `Which Jojo apparently seems to somehow know what you will say next?`,
        answers: [
            `Joseph Joestar`, 
            `Johnny Joestar`,
            `Johnantan Joestar`,
            `Josuke Higashikata`,
        ],
        correctAnswer: `Joseph Joestar`
    },
    {
        question: `Which of the following stands has an insane ability that no reader or viewer could ever hope to understand?`,
        answers: [
            `The World`,
            `King Crimson`,
            `Gold Experience Requiem`, 
            `Dirty Deeds Done Dirt Cheap`,
        ],
        correctAnswer: `Dirty Deeds Done Dirt Cheap`
    },
    {
        question: `What was the name of the group that Bruno Bucciarat was the leader of?`,
        answers: [
            `Passione`, 
            `Rokakaka Organization`,
            `Speedwagon Foundation`,
            `Gangstars`, 
        ],
        correctAnswer: `Passione`
    },
    {
        question: `What was the importance of the stand Rolling Stone?`,
        answers: [
            `Admire oneself and their achievements`,
            `There is no way one can escape or change fate`,
            `Learn to move on despite the struggle`,
            `Understand the importance of friends`,
        ],
        correctAnswer: `There is no way one can escape or change fate`
    },
    {
        question: `In addition to Kira stand, Killer Queen, which other stand or stands Kira used against Josuke and his stand Crazy Diamond?`,
        answers: [
            `Stray Cat and Bad Company`,
            `Atom Heart Father and Red Hot Chili Pepper`,
            `Stray Cat and Atom Heart Father`,
            `Cinderella and Snow White`,
        ],
        correctAnswer: `Stray Cat and Atom Heart Father`
    },
    {
        question: `Lisa Lisa is considered the strongest harmon user during Battle Tendency, her weapon of choice was a scarf, but how was it made?`,
        answers: [
            `A Satiporoja Beetle`,
            `A Yellow Cobra`,
            `Sunflower Petals`,
            `Sunny D`,
        ],
        correctAnswer: `A Satiporoja Beetle`
    },
    {
        question: `What was the name of the town where Diamond is Unbreakable took place?`,
        answers: [
            `Morioh`,
            `Philadelphia`,
            `Egypt`,
            `Tokyo`,
        ],
        correctAnswer: `Morioh`
    },
    {
        question: `Out of the list below, what is considered the most popular jojo meme?`,
        answers: [
            `To be continued`,
            `Fighting Gold`,
            `AYYAYAYAYYYAAAA`,
            `OH MY GOD!`,
        ],
        correctAnswer: `To be continued`
    }
];
// Everything above here is good!

//set varaibles for both questions and score
let score = 0;
let questionNumber = 0;
let userSelected = 1;

function startQuiz () {
    console.log('startQuiz is working fine')
    $('.quiz_container').hide()
    $('.scoreboard').hide()
    $('.rightAnswer').hide()
    $('.wrongAnswer').hide()
    $('.congrats').hide()
    $('.defeat').hide()
    score = 0
    question = 0
    userSelected = 1
}

function beginQuiz() {
    $('.start_quiz').click('submit', function (event) {
        $('quiz_display').show()
        $('.answer_form').show()
        console.log('you clicked submit button');
        $('header').fadeOut('fast');
        renderQuestion();
        $('.tally').html(`<p> Question: <span class="question_number">1</span>/10 <span>Score: </span><span class="score_number">0</span></p>`)
    })
    $(".answer_form").submit(function(event) {
        event.preventDefault()
        if (STORE[questionNumber].correctAnswer === $("form input:checked").val()) {
            rightAnswer()
        } else {
            wrongAnswer() 
        }
        $("input:radio").prop('checked', $(this).is(":checked"));
    })
    $('.next_button').on('click', function () {
        console.log('You clicked next button')
        $('.quiz_display').show()
        $('.tally').show()
        $('.answer_form').show()
        $('.wrongAnswer').hide()
        $('.rightAnswer').hide()

        if (questionNumber < STORE.length -1) {
            console.log('button working')
            nextQuestion()
        } else {
            console.log('button not working')
            results()
        }
    })
}

function renderQuestion () {
    console.log('renderQuestion working fine')
    $('.scoreboard').show()
    $('.quiz_container').show('slow', function () {
        $('.quiz_display').text(STORE[questionNumber].question)
        $('.answer_1').text(STORE[questionNumber].answers[0])
        $('.answer_1').val(STORE[questionNumber].answers[0])

        $('.answer_2').text(STORE[questionNumber].answers[1])
        $('.answer_2').val(STORE[questionNumber].answers[1])

        $('.answer_3').text(STORE[questionNumber].answers[2])
        $('.answer_3').val(STORE[questionNumber].answers[2])

        $('.answer_4').text(STORE[questionNumber].answers[3])
        $('.answer_4').val(STORE[questionNumber].answers[3])
    })
}

function wrongAnswer () {
    console.log('wrongAnswer is fine')
    $('.quiz_display').hide()
    $('.tally').hide()
    $('.answer_form').hide()
    $('.wrongAnswer').show()
    $('.hint').text(STORE[questionNumber].correctAnswer)
}

function rightAnswer () {
    console.log('rightAnswer is fine')
    $('.quiz_display').hide()
    $('.tally').hide()
    $('.answer_form').hide()
    $('.rightAnswer').show()
    updateScore()
}

function results () {
    if (score >= 7) {
        $('.congrats').show()
    } else {
        $('.defeat').show()
    }
    $('.quiz_display').hide()
    $('.score_number').show()
    $('.answer_form').hide()
    $('.tally').html(`<p> Question: <span class="question_number">10</span>/10 <span>Score: </span><span class="score_number">${score}</span></p>`)
        $('.reset').click('submit', function () {
            $('.starting_header').show()
            $('.starting_quiz').show()
            startQuiz()
            
        })
}

function nextQuestion () {
    questionNumber++
    renderQuestion()
    $('.tally').html(`<p> Question: <span class="question_number">${questionNumber + 1}</span>/10 <span>Score: </span><span class="score_number">${score}</span></p>`)
}

function updateScore () {
    score++
    $('.tally').html(`<p> Question: <span class="question_number">0</span>/10 <span>Score: </span><span class="score_number">${score}</span></p>`)
    // renderQuestion()
}

//Where all the functions should be called
function makeQuiz () {
    startQuiz();
    beginQuiz();
    // listen()
}
$(makeQuiz)
