const arr = ["", "", "", "", "", "", "", "", ""];
let turns = 0;

const showTurn = document.getElementById("Show");

const Container = document.querySelector(".Container");

arr.forEach((value, index) => {
  let button = document.createElement("button");
  button.textContent = value;
  button.setAttribute("key",`${index}`);

  button.addEventListener("click", () => {
    if (button.textContent !== "") return;
    turns += 1;

    if (turns % 2 == 0) {
      button.textContent = "X";
      button.classList.add("blue");
      showTurn.textContent = "#Player-2 turn";
      let key = button.getAttribute("key");
      arr[key] = "X";
    } else {
      button.textContent = "O";
      button.classList.add("red");
      showTurn.textContent = "#Player-1 turn";
      let key = button.getAttribute("key");
      arr[key] = "O";
    }
    console.log(arr);
    winLogic(arr);
  });

  Container.appendChild(button);
});

function winLogic() {
  //   1
  if (arr[0] !== "" && arr[0] == arr[1] && arr[0] == arr[2]) {
    if (arr[0] === "O") {
      showTurn.textContent = "#Player-1 wins";
    } else {
      showTurn.textContent = "#Player-2 wins";
      
    }
    
  }
  //   2
  if (arr[0] != "" && arr[0] == arr[3] && arr[0] == arr[6]) {
    if (arr[0] === "O") {
      showTurn.textContent = "#Player-1 wins";
    } else {
      showTurn.textContent = "#Player-2 wins";
      
    }
  }
  //   3
  if (arr[0] != "" && arr[0] == arr[4] && arr[0] == arr[8]) {
    if (arr[0] === "O") {
      showTurn.textContent = "#Player-1 wins";
    } else {
      showTurn.textContent = "#Player-2 wins";
      
    }
  }
  //   4
  if (arr[1] != "" && arr[1] == arr[4] && arr[1] == arr[7]) {
    if (arr[1] === "O") {
      showTurn.textContent = "#Player-1 wins";
    } else {
      showTurn.textContent = "#Player-2 wins";
      
    }
  }
  //   5
  if (arr[2] != "" && arr[2] == arr[5] && arr[2] == arr[8]) {
    if (arr[2] === "O") {
      showTurn.textContent = "#Player-1 wins";
    } else {
      showTurn.textContent = "#Player-2 wins";
      
    }
  }
  //   6
  if (arr[2] != "" && arr[2] == arr[4] && arr[2] == arr[6]) {
    if (arr[2] === "O") {
      showTurn.textContent = "#Player-1 wins";
    } else {
      showTurn.textContent = "#Player-2 wins";
      
    }
  }
  //   7
  if (arr[3] != "" && arr[3] == arr[4] && arr[3] == arr[5]) {
    if (arr[3] === "O") {
      showTurn.textContent = "#Player-1 wins";
    } else {
      showTurn.textContent = "#Player-2 wins";
      
    }
  }
  //   8
  if (arr[6] != "" && arr[6] == arr[7] && arr[6] == arr[8]) {
    if (arr[6] === "O") {
      showTurn.textContent = "#Player-1 wins";
    } else {
      showTurn.textContent = "#Player-2 wins";
      
    }
  }

}

