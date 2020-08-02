let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const scissor_div = document.getElementById("s");
const paper_div = document.getElementById("p");

function getComputerChoice(){
    const choices = ["r","s","p"];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "s") return "Scissor";
    return "Paper";
}

function win(userChoice, computerChoice){
    const smallUserWord = "User".fontsize(3).sub();
    const smallComputerWord = "Comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallComputerWord}. You Win!`;
    userChoice_div.classList.add("green-glow");
    setTimeout(function(){ userChoice_div.classList.remove("green-glow") }, 500);
}

function lose(userChoice, computerChoice){
    const smallUserWord = "User".fontsize(3).sub();
    const smallComputerWord = "Comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallComputerWord}. You Lost.`;
    userChoice_div.classList.add("red-glow");
    setTimeout(function(){ userChoice_div.classList.remove("red-glow") }, 500);
}

function draw(userChoice, computerChoice){
    const smallUserWord = "User".fontsize(3).sub();
    const smallComputerWord = "Comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallComputerWord}. Its a draw.`;
    userChoice_div.classList.add("gray-glow");
    setTimeout(function(){ userChoice_div.classList.remove("gray-glow") }, 500);
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice+computerChoice){
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener("click", function(){
        game("r");
    })
    scissor_div.addEventListener("click", function(){
        game("s");
    })
    paper_div.addEventListener("click", function(){
        game("p");
    })
}

main();