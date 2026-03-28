let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePrint = document.querySelector("#userScore");
const computerScorePrint = document.querySelector("#computerScore");


choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const playGame = (userChoice) => {
  const compChoice = genComputerChoice(); //Generate computer choice
  if (userChoice === compChoice) {  //Draw Game
    drawGame();
  } else {
    let userWin;
    if (userChoice === "rock") {  //scissors, paper 
      userWin = compChoice === "scissors" ? true : false;
    } else if (userChoice === "paper") {  //rock, scissors
      userWin = compChoice === "rock" ? true : false; 
    } else {  //rock, paper
      userWin = compChoice === "paper" ? true : false;
    }
    // console.log(`userWin: ${userWin}`);
    // console.log(`userChoice: ${userChoice}`);
    // console.log(`compChoice: ${compChoice}`);
    showWinner(userWin, userChoice, compChoice);
  }
};

const genComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#14457e";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePrint.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)} beats computer's ${compChoice.charAt(0).toUpperCase() + compChoice.slice(1)}.`;
    msg.style.backgroundColor = "green";
  } else {
    computerScore++;
    computerScorePrint.innerText = computerScore;
    msg.innerText = `You lost. Computer's ${compChoice.charAt(0).toUpperCase() + compChoice.slice(1)} beats your ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}.`;
    msg.style.backgroundColor = "red";
  }
};