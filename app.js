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
        correctanswer: `Caesar Antonio Zeppeli`
    },
    {
        question: `Which of these characters have the longest dialog ever seen in the series?`,
        answers: [
            `Jean Pierre Polnareff`,
            `Foo Fighters`,
            `Notorious B.I.G`,
            `Yoshikage Kira`,
        ],
        correctanswer: `Yoshikage Kira`
    },
    {
        question: `Which Jojo apparently seems to somehow know what you will say next?`,
        answers: [
            `Joseph Joestar`, 
            `Johnny Joestar`,
            `Johnantan Joestar`,
            `Josuke Higashikata`,
        ],
        correctanswer: `Joseph Joestar`
    },
    {
        question: `Which of the following stands has an insane ability that no reader or viewer could ever hope to understand?`,
        answers: [
            `The World`,
            `King Crimson`,
            `Gold Experience Requiem`, 
            `Dirty Deeds Done Dirt Cheap`,
        ],
        correctanswer: `Dirty Deeds Done Dirt Cheap`
    },
    {
        question: `What was the name of the group that Bruno Bucciarat was the leader of?`,
        answers: [
            `Passione`, 
            `Rokakaka Organization`,
            `Speedwagon Foundation`,
            `Gangstars`, 
        ],
        correctanswer: `Passione`
    },
    {
        question: `What was the importance of the stand Rolling Stone?`,
        answers: [
            `Admire oneself and their achievements`,
            `There is no way one can escape or change fate`,
            `Learn to move on despite the struggle`,
            `Understand the importance of friends`,
        ],
        correctanswer: `There is no way one can escape or change fate`
    },
    {
        question: `In addition to Kira’s stand, Killer Queen, which other stand or stands Kira used against Josuke and his stand Crazy Diamond?`,
        answers: [
            `Stray Cat and Bad Company`,
            `Atom Heart Father and Red Hot Chili Pepper`,
            `Stray Cat and Atom Heart Father`,
            `Cinderella and Snow White`,
        ],
        correctanswer: `Stray Cat and Atom Heart Father`
    },
    {
        question: `Lisa Lisa is considered the strongest harmon user during Battle Tendency, her weapon of choice was a scarf, but how was it made?`,
        answers: [
            `A Satiporoja Beetle`,
            `A Yellow Cobra`,
            `Sunflower Petals`,
            `Sunny D`,
        ],
        correctanswer: `A Satiporoja Beetle`
    },
    {
        question: `What was the name of the town where Diamond is Unbreakable took place?`,
        answers: [
            `Morioh`,
            `Philadelphia`,
            `Egypt`,
            `Tokyo`,
        ],
        correctanswer: `Morioh`
    },
    {
        question: `Out of the list below, what is considered the most popular jojo meme?`,
        answers: [
            `To be continued`,
            `Fighting Gold`,
            `AYYAYAYAYYYAAAA`,
            `OH MY GOD!`,
        ],
        correctanswer: `To be continued`
    }
];
// Everything above here is good!


//set varaibles for both questions and score
let score = 0;
let questionNumber = 0;

function startQuiz () {
 $('button').click('submit', function (event) {
    console.log('button working');
    event.preventDefault();
    $('header').fadeOut('fast');
    renderQuestion();
 }
    )}

function renderQuestion () {
    let question = STORE[0].question
    console.log(question)
}




//Where all the functions should be called
function makeQuiz () {
    startQuiz();
    renderQuestion();
}
$(makeQuiz)
