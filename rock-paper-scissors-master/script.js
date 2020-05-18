const scorePoints = document.getElementById("scorePoints");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const rock = document.getElementById("rock");
const triangle = document.getElementById("triangle");
const ruleBtn = document.getElementById("ruleBtn");
const ruleBook = document.getElementById("ruleBook");
const closeBtn = document.getElementById("closeBtn");
const youPicked = document.getElementById("youPicked");
const housePicked = document.getElementById("housePicked");
const result = document.getElementById("result");
const playAgainBtn = document.getElementById("playAgainBtn");
const win_msg = "YOU WIN";
const lose_msg = "YOU LOSE";
let score = 0;
let player;
let house;
let rest = [];

ruleBtn.onclick = function() {
  ruleBook.classList.add("visible");
};

closeBtn.onclick = function() {
  ruleBook.classList.remove("visible");
};

paper.onclick = function() {
  playmode(paper, rock, scissors);
  playAgainBtn.onclick = function() {
    reset(paper, rock, scissors);
  };
};

scissors.onclick = function() {
  playmode(scissors, paper, rock);
  playAgainBtn.onclick = function() {
    reset(scissors, paper, rock);
  };
};

rock.onclick = function() {
  playmode(rock, scissors, paper);
  playAgainBtn.onclick = function() {
    reset(rock, scissors, paper);
  };
};

function playmode(chosen, other1, other2) {
  chosen.classList.add("player_field");
  other1.classList.add("hidden");
  other2.classList.add("hidden");
  triangle.classList.add("hidden");
  youPicked.classList.add("visible");
  housePicked.classList.add("visible");

  player = chosen;
  rest = [other1, other2];
  house = rest[Math.round(Math.random())];
  rest = [];
  setTimeout("show_up_on_house(house)", 1000);
  setTimeout(() => {
    if (who_is_winner(player, house)) {
      result.innerHTML = win_msg;
      score++;
    } else {
      result.innerHTML = lose_msg;
    }
    scorePoints.innerHTML = score;
    result.classList.add("visible");
    playAgainBtn.classList.add("visible");
  }, 2000);
}

function show_up_on_house(target) {
  target.classList.remove("hidden");
  target.classList.add("house_field");
}

function who_is_winner(player, house) {
  if (player == rock) {
    if (house == scissors) {
      return true;
    } else {
      return false;
    }
  } else if (player == scissors) {
    if (house == paper) {
      return true;
    } else {
      return false;
    }
  } else if (player == paper) {
    if (house == rock) {
      return true;
    } else {
      return false;
    }
  }
}

function reset(chosen, other1, other2) {
  chosen.classList.remove("player_field");
  other1.classList.remove("house_field");
  other2.classList.remove("house_field");
  chosen.classList.remove("hidden");
  other1.classList.remove("hidden");
  other2.classList.remove("hidden");
  triangle.classList.remove("hidden");
  youPicked.classList.remove("visible");
  housePicked.classList.remove("visible");
  result.classList.remove("visible");
  playAgainBtn.classList.remove("visible");
}
