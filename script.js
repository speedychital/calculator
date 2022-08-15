const display = document.querySelector(".display");
const components = document.querySelectorAll(".component");

let x = "0";
let result = 0;
let operator;

function handleClick(e) {
  if (isNaN(e.target.innerText)) {
    handleSymbol(e.target.innerText);
  } else {
    handleNumber(e.target.innerText);
  }
  displayResult();
}

function handleNumber(value) {
  if (x === "0") {
    x = value;
  } else x += value;
}

function handleSymbol(value) {
  switch (value) {
    case "C": {
      x = "0";
      result = 0;
      operator = null;
      break;
    }
    case "=": {
      if (operator === null) return;
      doOperation(parseInt(x));
      operator = null;
      x = `${result}`;
      result = 0;
      break;
    }
    case "←": {
      if (x.length === 1) {
        x = "0";
      } else {
        x = x.substring(0, x.length - 1);
      }
      break;
    }
    default:
      doMath(value);
      break;
  }
}

function doMath(value) {
  const intX = parseInt(x);

  if (result === 0) {
    result = intX;
  } else {
    doOperation(intX);
  }

  operator = value;
  x = "0";
}

function doOperation(intX) {
  switch (operator) {
    case "+": {
      result += intX;
      break;
    }
    case "-": {
      result -= intX;
      break;
    }
    case "x": {
      result *= intX;
      break;
    }
    case "/": {
      result = Math.floor(result / intX);
      break;
    }
  }
  return -1;
}

function displayResult() {
  display.innerText = x;
}
components.forEach((component) =>
  component.addEventListener("click", handleClick)
);
