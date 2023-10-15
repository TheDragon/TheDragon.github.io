const Player = (PlayerInput) => {
  PlayerInput = PlayerInput.toLowerCase();
  if (
    PlayerInput === "rock" ||
    PlayerInput === "paper" ||
    PlayerInput === "scissor"
  ) {
    return PlayerInput;
  } else {
    console.log("Invalid Respose,Please Try again");
  }
};

const Computer = () => {
  const number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissor";
      break;
  }
};

const determineWinner = (Player, Computer) => {
  if (Computer === Player) {
    return alert(
      `You Picked ${Player},Computer Picked ${Computer} Therefore you had a Draw.😉`
    );
  }

  if (Player === "rock") {
    if (Computer === "paper") {
      return alert(
        `You Picked ${Player},Computer Picked ${Computer} Therefore you Lost😢.`
      );
    } else {
      return alert(
        `You Picked ${Player},Computer Picked ${Computer} Therefore you WON😃.`
      );
    }
  }

  if (Player === "paper") {
    if (Computer === "scissor") {
      return alert(
        `You Picked ${Player},Computer Picked ${Computer} Therefore you Lost😢.`
      );
    } else {
      return alert(
        `You Picked ${Player},Computer Picked ${Computer} Therefore you WON😃.`
      );
    }
  }
  if (Player === "scissor") {
    if (Computer === "rock") {
      return alert(
        `You Picked ${Player},Computer Picked ${Computer} Therefore you Lost😢.`
      );
    } else {
      return alert(
        `You Picked ${Player},Computer Picked ${Computer} Therefore you WON😃.`
      );
    }
  }
  if (Player == "Win!!!") {
    return alert("You are the Boss, So I guess You Won 😑");
  }
};

const playGame = () => {
  const userChoice = prompt("ROCK,PAPER OR SCISSOR");
  const ComputerInput = Computer();
  console.log(determineWinner(userChoice, ComputerInput));
};
