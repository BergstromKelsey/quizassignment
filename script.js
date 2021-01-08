var gameTime = document.querySelector(".timeOfgame");
var letsPlay = document.getElementById("start");
var secondsLeft = 60;
var displayId = 0;
var nameStamp =document.getElementById("initials");
var myscore=0;


document.getElementById(displayId).style.display = "block";
letsPlay.addEventListener("click", startQuiz);

juno.addEventListener("click",continueQuiz);
anchorage.addEventListener("click", wrongAnswer);
austin.addEventListener("click", continueQuiz);
dallas.addEventListener("click", wrongAnswer);
stpaul.addEventListener("click", continueQuiz);
msp.addEventListener("click", wrongAnswer);
providence.addEventListener("click", continueQuiz);
cranston.addEventListener("click", wrongAnswer);
billings.addEventListener("click", wrongAnswer);
helena.addEventListener("click", continueQuiz);



function startQuiz() {
    setTime();
    document.getElementById(displayId).style.display = "none";
    displayId++;
    document.getElementById(displayId).style.display = "block";
}

function continueQuiz() {
    document.getElementById(displayId).style.display = "none";
    displayId++;
    document.getElementById(displayId).style.display = "block";
    document.getElementById("wrongbox").style.display = "none";
    myscore = myscore +1;
    document.querySelector(".scoretally").textContent=("Your Score:"+myscore);
    localStorage.setItem("score", myscore);
}

function wrongAnswer() {
    document.getElementById(displayId).style.display = "none";
    displayId++;
    document.getElementById(displayId).style.display = "block";
    // document.getElementById(displayId).style.display = "block";
    // document.getElementById(displayId).style.display = "none";
    document.getElementById("wrongbox").style.display = "block";
    secondsLeft = secondsLeft - 10;

}


function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        gameTime.textContent = secondsLeft + " seconds until the quiz ends!";

        if (secondsLeft <= 0) {
            clearInterval(timerInterval)
            // alert("Time is up");
            gameTime.textContent = "GAME OVER";
            document.getElementById(displayId).style.display = "none";
            displayId=6
            document.getElementById(displayId).style.display = "block";
            localStorage.setItem("initials", nameStamp);
            
        }

    }, 1000);


}

function highScore(score) {
    var saved = 0;
    try { saved = parseFloat(localStorage.highScore); } catch (e) { saved = 0; }
    if (!(typeof score === 'undefined')) {
       try { score = parseFloat(score); } catch (e) { score = 0; }
       if (score>saved) {
         saved = score;
         localStorage.highScore = '' + score;
       }
    }
    if (isNaN(saved)) {
       saved = 0;
       localStorage.highScore = '0';
    }
    


 }
document.querySelector(".highscore").textContent=("High Score:"+myscore);
   






