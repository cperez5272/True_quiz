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

function startQuiz () {
    $('.quiz_container').hide()
    $('.scoreboard').hide()
    $('.start_quiz').click('submit', function (event) {
        console.log('button working');
        $('header').fadeOut('fast');
        renderQuestion();
        $('.submit_button').click(function() {
        // $('.quiz_container').fadeOut('fast')
            nextQuestion()
        })
    })
}

function renderQuestion () {
        $('.scoreboard').show()
        $('.quiz_container').show('slow', function () {
            $('.quiz_display').text(STORE[questionNumber].question)
            $('.answer_1').text(STORE[questionNumber].answers[0])
            $('.answer_2').text(STORE[questionNumber].answers[1])
            $('.answer_3').text(STORE[questionNumber].answers[2])
            $('.answer_4').text(STORE[questionNumber].answers[3])
        $(".answer_form").submit(function(event) {
            event.preventDefault()
            $('.answer').prop('checked', false)
        })
    })
}

function wrongAnswer () {
    $('.response').html(`
    <h3>Your answer was wrong!</h3>
    <img src="https://thumbs.gfycat.com/ClearQualifiedAfricanparadiseflycatcher-size_restricted.gif" alt= "Old man screaming in fear" class= "images">
    <p>The correct answer is actually:</p>
    <p>${STORE[questionNumber].correctAnswer}</p>
    <button>Continue</button>`
    )
}

function rightAnswer () {
    $('.response').html(`
    <h3>Your answer was right!</h3>
    <img src="https://miro.medium.com/max/2560/1*U291PytRexmkC81_cqArNg.jpeg" alt= "Two guys posing!" class= "images">
    <button>Continue</button>`
    )
    updateScore() // work on that in a bit, but it should be called here.
}

function submitAnswer () {
    $('.submit_button').on('click', function (event) {
        if (STORE[questionNumber].answers === STORE[questionNumber].correctAnswer) {
            console.log('yea yea yea')
            rightAnswer()
        } else {
            console.log('nah nah nah')
            wrongAnswer()
        }
    })
}

function nextQuestion () {
    questionNumber++
    renderQuestion()
}

//Where all the functions should be called
function makeQuiz () {
    startQuiz();
}
$(makeQuiz)
