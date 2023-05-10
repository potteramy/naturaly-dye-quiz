var secondsLeft = 20;
var timePenalty = 5;
var score = 0;
var startButton = document.querySelector(".startButton");
var qTitle = document.getElementById("question")
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var questionBox = document.querySelector(".questionBox");
var results = document.querySelector(".results");
var timeSpan = document.getElementById("time");
var currentQuestion;
var currentQuestionIndex = 0;
var initials;
var timerInterval;

answer1.addEventListener("click", () => handleClick(1))
answer2.addEventListener("click", () => handleClick(2))
answer3.addEventListener("click", () => handleClick(3))
answer4.addEventListener("click", () => handleClick(4))



var listQuestions = [
  {
    id: 0,
    question: `Ferrous sulfate as a mordant will ___ the color`,
    answers: ["brighten", "dull", "sadden", "not affect"],
    correct: 2,
  },
  {
    id: 1,
    question: `What chemical would you use with Phaeolus schweinitzii to acheive orange natural dye`,
    answers: [
      "Vinegar",
      "Aluminum sulfate",
      "Ferrous sulfate",
      "Sodium carbonate",
    ],
    correct: 1,
  },
  {
    id: 2,
    question: `Which of the following will lower the dye bath's pH?`,
    answers: ["ammonia", "sodium bicarbonate", "sodium carbonate", "vinegar"],
    correct: 3,
  },
  {
    id: 3,
    question: `Indigo pigment requires ____ for extraction`,
    answers: [
      "a reduction vat",
      "a hot water Bath",
      "a one week sun exposed",
      "no special processing",
    ],
    correct: 0,
  },
];




startButton.addEventListener("click", startQuiz);


function startQuiz() {
  setTime()
  currentQuestion = listQuestions[0]
  showQuestion(currentQuestion);
  startButton.style.display = "none";
  questionBox.style.display = "block"
}

const handleClick = (num) => {
  if (currentQuestion.correct === num-1) {
    console.log("correct")
    score++
  } else {
    console.log("incorrect")
  }
  currentQuestionIndex++
  if (currentQuestionIndex < listQuestions.length) {

    currentQuestion = listQuestions[currentQuestionIndex]
    showQuestion(currentQuestion)
  } else {
    endGame()
  }
}

function endGame() {
  clearInterval(timerInterval);
  alert(`Game Over, you got ${score} points`);
  initials = prompt("Enter your initials:");
  localStorage.setItem("highScore", score);
  localStorage.setItem("initials", initials);
  showHighScore();
};

function setTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeSpan.innerHTML = secondsLeft
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      endGame()
    }
  }, 1000);
}

function showQuestion(question) {
  qTitle.innerHTML = question.question

  answer1.innerHTML = question.answers[0]
  answer2.innerHTML = question.answers[1]
  answer3.innerHTML = question.answers[2]
  answer4.innerHTML = question.answers[3]
};
function showHighScore() {
  var highScore = localStorage.getItem("highScore");
  var highScoreInitials = localStorage.getItem("initials");
  var highScoreSpan = document.getElementById("highScore");
  if (highScore && highScoreInitials) {
    highScoreSpan.textContent = `High Score: ${highScore} user: ${highScoreInitials}`;
  }
}