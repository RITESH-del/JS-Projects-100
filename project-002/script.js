// 1. add more functionality such as up-down history button by using localStorage, 2. A rank-up button changing the 4X4 grid to 5X5 grid, and adding logarithms, trignomety and other math button



const arr = ["AC","C","%","/","7","8","9","*","4","5","6","-","1","2","3","+"," ","0",".","="];

const Container = document.querySelector(".Container");

var inputValue= "";

arr.forEach((value) => {
  const button = document.createElement("button");
  button.textContent = value;

  button.addEventListener("click", () => {
    if (value === "AC") {
      inputValue = "";
    } else if(value === "C") {
      inputValue = inputValue.slice(0,-1);
    }
    else if (value === "=") {
      try {
        inputValue = eval(inputValue);
      } catch (error) {
        console.log("Unexpected input");
      }
    } else {
      inputValue += value;
    }
    
    document.getElementById("Display").value = inputValue;
  });

  Container.appendChild(button);
});

const display =  document.getElementById("Display");

// display.addEventListener("keydown",(event)=>{
//   return display.value = event.code
// });

