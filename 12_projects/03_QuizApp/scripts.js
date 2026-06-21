import {
    uniqueCategories,
    getFilteredQuestions,
    prepareQuestions,
    getCorrectAnswer,
    isNewHighScore,
    computeFilterKey,
} from "./quiz-core.js";

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const changeButton = document.getElementById("change-btn");
const progressElement = document.getElementById("progress");
const highScoreElement = document.getElementById("high-score");
const timerElement = document.getElementById("timer");
const reviewElement = document.getElementById("review");

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const categorySelect = document.getElementById("category-select");
const difficultyOptions = document.getElementById("difficulty-options");
const startCount = document.getElementById("start-count");
const startButton = document.getElementById("start-btn");

const HIGH_SCORES_KEY = "quizapp.highScores";
const QUESTION_TIME = 15; // seconds allowed per question

let allQuestions = [];   // immutable source loaded from JSON
let questions = [];      // shuffled working set for the current run
let currentQuestionIndex = 0;
let score = 0;
let answered = false;    // guards against answering the same question twice
let runResults = [];     // per-question outcome, used for the review screen
let timerId = null;
let timeLeft = QUESTION_TIME;

let selectedCategory = "All";
let selectedDifficulty = "All";

/* ---------- Filtering (bind current selection to the pure core) ---------- */

function currentFilteredQuestions(){
    return getFilteredQuestions(allQuestions, selectedCategory, selectedDifficulty);
}

function currentFilterKey(){
    return computeFilterKey(selectedCategory, selectedDifficulty);
}

/* ---------- High scores (per category+difficulty) ---------- */

function loadHighScores(){
    try {
        return JSON.parse(localStorage.getItem(HIGH_SCORES_KEY)) || {};
    } catch {
        return {};
    }
}

function getHighScore(){
    return loadHighScores()[currentFilterKey()] || 0;
}

function saveHighScore(value){
    const scores = loadHighScores();
    scores[currentFilterKey()] = value;
    localStorage.setItem(HIGH_SCORES_KEY, JSON.stringify(scores));
}

function renderHighScore(){
    const total = currentFilteredQuestions().length;
    highScoreElement.innerHTML = total ? `Best: ${getHighScore()} / ${total}` : "";
}

/* ---------- Boot ---------- */

async function init(){
    try {
        const response = await fetch("questions.json");
        if(!response.ok) throw new Error(`HTTP ${response.status}`);
        allQuestions = await response.json();
    } catch (err){
        console.error("Failed to load questions.json:", err);
        startScreen.hidden = false;
        startCount.innerHTML = "Couldn't load questions. Serve this app over HTTP (see README).";
        startButton.disabled = true;
        return;
    }
    setupStartScreen();
    showStartScreen();
}

/* ---------- Start screen ---------- */

function setupStartScreen(){
    categorySelect.innerHTML = "";
    const allOption = document.createElement("option");
    allOption.value = "All";
    allOption.textContent = "All categories";
    categorySelect.appendChild(allOption);

    uniqueCategories(allQuestions).forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });

    categorySelect.addEventListener("change", () => {
        selectedCategory = categorySelect.value;
        refreshStartScreen();
    });

    difficultyOptions.querySelectorAll(".diff-btn").forEach(button => {
        button.addEventListener("click", () => {
            selectedDifficulty = button.dataset.difficulty;
            setActiveDifficulty();
            refreshStartScreen();
        });
    });

    setActiveDifficulty();
}

function setActiveDifficulty(){
    difficultyOptions.querySelectorAll(".diff-btn").forEach(button => {
        button.classList.toggle("active", button.dataset.difficulty === selectedDifficulty);
    });
}

function refreshStartScreen(){
    const count = currentFilteredQuestions().length;
    startCount.innerHTML = count
        ? `${count} question${count === 1 ? "" : "s"} available`
        : "No questions match this filter.";
    startButton.disabled = count === 0;
    renderHighScore();
}

function showStartScreen(){
    stopTimer();
    quizScreen.hidden = true;
    startScreen.hidden = false;
    refreshStartScreen();
}

/* ---------- Quiz ---------- */

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    runResults = [];
    nextButton.innerHTML = "Next";
    // Fresh randomisation every run: question order *and* answer order.
    questions = prepareQuestions(allQuestions, selectedCategory, selectedDifficulty);
    startScreen.hidden = true;
    quizScreen.hidden = false;
    renderHighScore();
    showQuestion();
}

function showQuestion(){
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    progressElement.innerHTML = `Question ${questionNo} of ${questions.length}`;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

    startTimer();
}

function resetState(){
    answered = false;
    stopTimer();
    timerElement.innerHTML = "";
    timerElement.classList.remove("warning");
    reviewElement.innerHTML = "";
    nextButton.style.display = "none";
    changeButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

/* ---------- Timer ---------- */

function startTimer(){
    timeLeft = QUESTION_TIME;
    renderTimer();
    timerId = setInterval(() => {
        timeLeft--;
        renderTimer();
        if(timeLeft <= 0){
            stopTimer();
            timeUp();
        }
    }, 1000);
}

function renderTimer(){
    timerElement.innerHTML = `⏱ ${timeLeft}s`;
    timerElement.classList.toggle("warning", timeLeft <= 5);
}

function stopTimer(){
    clearInterval(timerId);
    timerId = null;
}

function timeUp(){
    if(answered) return;
    answered = true;
    revealCorrect();
    recordResult(null, false);
    timerElement.innerHTML = "⏱ Time's up!";
    nextButton.style.display = "block";
}

/* ---------- Answering ---------- */

function selectAnswer(e){
    handleAnswer(e.target);
}

function handleAnswer(selectedBtn){
    if(answered) return;
    answered = true;
    stopTimer();

    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    revealCorrect();
    recordResult(selectedBtn.innerHTML, isCorrect);
    nextButton.style.display = "block";
}

// Highlight the right answer and lock every button.
function revealCorrect(){
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
}

function recordResult(selectedText, isCorrect){
    const current = questions[currentQuestionIndex];
    const correctText = getCorrectAnswer(current);
    runResults.push({
        question: current.question,
        selected: selectedText,
        correct: correctText,
        isCorrect
    });
}

/* ---------- Score + review ---------- */

function showScore(){
    resetState();
    progressElement.innerHTML = "";

    const newHighScore = isNewHighScore(score, getHighScore());
    if(newHighScore){
        saveHighScore(score);
    }

    questionElement.innerHTML =
        `You scored ${score} out of ${questions.length}!` +
        (newHighScore ? " 🎉 New high score!" : "");
    renderHighScore();
    renderReview();
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    changeButton.style.display = "block";
}

function renderReview(){
    const items = runResults.map((result, i) => {
        const youAnswered = result.selected === null
            ? "No answer (time's up)"
            : result.selected;
        const statusClass = result.isCorrect ? "review-item--correct" : "review-item--incorrect";
        const correctLine = result.isCorrect
            ? ""
            : `<div class="review-correct">Correct: ${result.correct}</div>`;
        return `
            <li class="review-item ${statusClass}">
                <div class="review-q">${i + 1}. ${result.question}</div>
                <div class="review-a">Your answer: ${youAnswered}</div>
                ${correctLine}
            </li>`;
    }).join("");

    reviewElement.innerHTML = `<h3 class="review-title">Review</h3><ul class="review-list">${items}</ul>`;
}

/* ---------- Navigation ---------- */

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz(); // "Play Again" — same filters
    }
});

changeButton.addEventListener("click", showStartScreen);

startButton.addEventListener("click", () => {
    if(!startButton.disabled){
        startQuiz();
    }
});

// Keyboard support: 1–4 select an answer, Enter advances or starts.
document.addEventListener("keydown", (e) => {
    if(!startScreen.hidden){
        if(e.key === "Enter" && !startButton.disabled){
            startButton.click();
        }
        return;
    }
    if(["1", "2", "3", "4"].includes(e.key)){
        const button = answerButtons.children[Number(e.key) - 1];
        if(button && !answered){
            handleAnswer(button);
        }
    } else if(e.key === "Enter" && nextButton.style.display === "block"){
        nextButton.click();
    }
});

init();
