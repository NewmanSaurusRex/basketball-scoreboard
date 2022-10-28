let homeScoreBtnOne = document.getElementById("home-score-btn1");
let homeScoreBtnTwo = document.getElementById("home-score-btn2");
let homeScoreBtnThree = document.getElementById("home-score-btn3");
let homeScoreEl = document.getElementById("home-score");
let homeScore = 0;

let guestScoreBtnOne = document.getElementById("guest-score-btn1");
let guestScoreBtnTwo = document.getElementById("guest-score-btn2");
let guestScoreBtnThree = document.getElementById("guest-score-btn3");
let guestScoreEl = document.getElementById("guest-score");
let guestScore = 0;

function homeAddOne() {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
}

function homeAddTwo() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
}

function homeAddThree() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
}

function guestAddOne() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
}

function guestAddTwo() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}

function guestAddThree() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}
