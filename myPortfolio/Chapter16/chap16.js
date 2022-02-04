// declare variables
var story = document.getElementById("story");
var siteFooter = document.getElementById("siteFooter");
var question = document.getElementById("question");
var answer = document.getElementById("answer");
var yourAnswer = document.getElementById("yourAnswer");
var submit = document.getElementById("submit");
var answers = [];

/* listen for clicks on the submit button and call the getAnswer() function when they happen. */
submit.addEventListener("click", getAnswer);

// call the function to ask the first question.
askQuestion(0);

/* askQuestion() asks a question, based on the number passed to it. */
function askQuestion(questionNumber) {
    answer.style.display = "block";


    answers.length = questionNumber;

    switch (questionNumber) {
        case 0:
            question.innerHTML = "Are you ready to play?";
            break;
        case 1:
            question.innerHTML = "Go to Mars, or stay home?";
            break;
        case 2:
            question.innerHTML = "Risk it, or go home.";
            break;
        case 3:
            question.innerHTML = "Pack and leave, or Call for help";
            break;
        case 4:
            question.innerHTML = "Night or Day";
        default:
            break;
    }

}

/* getAnswer() gets the answer from the text field and pushes it into the answers array, then calls the continueStory function */
function getAnswer() {
    cleanInput = yourAnswer.value.toUpperCase();
    answers.push(cleanInput);
    yourAnswer.value = "";
    continueStory(answers.length - 1);
}

/* continueStory() displays part of the story or an error based on the value of an item in the answers array. */
function continueStory(answerNumber) {
    switch (answerNumber) {
        case 0://are you ready to play
            if (answers[0] === "YES") {
                story.innerHTML = document.getElementById("answer01").innerHTML;
                askQuestion(1);
            } else if (answers[0] === "NO") {
                story.innerHTML = document.getElementById("answer02").innerHTML;
                askQuestion(0);
            } else {
                story.innerHTML = document.getElementById("err0").innerHTML;
                askQuestion(0);
            }
            break;
        case 1://go to mars or stay home
            if (answers[1] === "GO TO MARS") {
                story.innerHTML = document.getElementById("answer11").innerHTML;
                askQuestion(2);
            } else if (answers[1] === "STAY HOME") {
                story.innerHTML = document.getElementById("answer12").innerHTML;
                theEnd();
            } else {
                story.innerHTML = document.getElementById("err1").innerHTML;
                askQuestion(1);
            }
            break;
        case 2://risk it or home
            if (answers[2] === "RISK IT") {//answer for q2 
                story.innerHTML = document.getElementById("answer21").innerHTML;
                askQuestion(3);
            } 
            else if (answers[2] === "GO HOME") {
                story.innerHTML = document.getElementById("answer22").innerHTML;
                theEnd();
            } 
            else {
                story.innerHTML = document.getElementById("err2").innerHTML;
                askQuestion(2);
            }
            break;

        case 3://sleep or walk
            if(answers[3] === "PACK AND LEAVE"){
                story.innerHTML = document.getElementById("answer3").innerHTML;
                theEnd();
            }
            else if(answers[3] === "CALL FOR HELP"){
                story.innerHTML = document.getElementById("answer4").innerHTML;
                askQuestion(4);
            }
            else {
                story.innerHTML = document.getElementById("err3").innerHTML;
                askQuestion(3);
            }
            break;
        case 4:
            if(answers[4] === "DAY"){
                story.innerHTML = document.getElementById("answer5").innerHTML;
                theEnd();
            }
            else if(answers[4] === "NIGHT"){
                story.innerHTML = document.getElementById("answer6").innerHTML;
                theEnd();
            }
            else{
                story.innerHTML = document.getElementById("err5").innerHTML;
                askQuestion(4);
            }
        default:
            story.innerHTML = "The story is over!";

            break;
    }
}

/* theEnd() ends the story and hides the input field */
function theEnd() {
    story.innerHTML += "<p>The End.</p>";
    question.innerHTML = "";
    answer.style.display = "none";
}