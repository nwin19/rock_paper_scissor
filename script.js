let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const result = document.querySelector('.result > p');
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissor = document.getElementById('s');


function getComputerChoice() {
    const items = ["r", "p", "s"];
    let randomNumber = Math.floor(Math.random() * 3);
    return items[randomNumber];
}


function convertToWord(letter) {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}


function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} YOU WIN!`;
    const color = document.getElementById(userChoice);
    color.classList.add('green-glow');
    setTimeout(function() {color.classList.remove('green-glow')}, 300);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result.innerHTML = `${convertToWord(userChoice)}${smallUserWord} LOSES to ${convertToWord(computerChoice)}${smallCompWord} YOU LOSE!`;
    const color = document.getElementById(userChoice);
    color.classList.add('red-glow');
    setTimeout(function() {color.classList.remove('red-glow')}, 300);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result.innerHTML = `${convertToWord(userChoice)}${smallUserWord} Equals to ${convertToWord(computerChoice)}${smallCompWord} DRAW!`;
    const color = document.getElementById(userChoice);
    color.classList.add('gray-glow');
    setTimeout(function() {color.classList.remove('gray-glow')}, 300);
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}


rock.addEventListener('click', function() {
    game("r");
})

paper.addEventListener('click', function() {
    game("p");
})

scissor.addEventListener('click', function() {
    game("s");
})

