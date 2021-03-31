
let partOneSum
let partTwoSum
let activeOperator

additionFunction = (partOneSum, partTwoSum) => {
 return Number(partOneSum) + Number(partTwoSum)
};

divideFunction = (partOneSum, partTwoSum) => {
  return partOneSum / partTwoSum
};

timesFunction = (partOneSum, partTwoSum) => {
  return partOneSum * partTwoSum
};

subtractFunction = (partOneSum, partTwoSum) => {
  return partOneSum - partTwoSum
};

percentFunction = (partOneSum, partTwoSum) => {
  return (partOneSum/100)*partTwoSum
};

document.getElementById("equals").addEventListener("click", (event) => {
  let bothNumbers = display.value.split(activeOperator)
  partTwoSum = bothNumbers[1]
  console.log(partOneSum, partTwoSum);
  
  switch (activeOperator) {
    case "+":
      display.value = additionFunction(partOneSum, partTwoSum);
      console.log("this adds");
      break;
    case "-":
      display.value = subtractFunction(partOneSum, partTwoSum);
      console.log("this subtracts");
      break;
    case "x":
      display.value = timesFunction(partOneSum, partTwoSum);
      console.log("this multiplies");
      break;
    case "÷":
      display.value = divideFunction(partOneSum, partTwoSum);
      console.log("this divides");
      break;
    case "%":
      display.value = percentFunction(partOneSum, partTwoSum);
      console.log("this finds percentage");
      break;
  }
})

const percent = document.getElementById("%")
const minus = document.getElementById("-")
const multiply = document.getElementById("x")
const divide = document.getElementById("÷")
const add = document.getElementById("+")
const del = document.getElementById("del")
const clear = document.getElementById("clear")

clear.addEventListener("click", (event) => {
 document.getElementById("display").value = 0

})

del.addEventListener("click", (event) => {
  display.value = display.value.slice(0, -1);
})

add.addEventListener('click', (event) => {
  partOneSum = display.value
  activeOperator = "+"
  console.log("this works", display.value);
  display.value += event.target.id
})

divide.addEventListener("click", (event) => {
  partOneSum = display.value
  activeOperator = "÷"
  display.value += event.target.id
})

multiply.addEventListener("click", (event) => {
  partOneSum = display.value
  activeOperator = "x"
  display.value += event.target.id
})

minus.addEventListener("click", (event) => {
  partOneSum = display.value
  activeOperator = "-"
  display.value += event.target.id
})

percent.addEventListener("click", (event) => {
  partOneSum = display.value
  activeOperator = "%"
  display.value += event.target.id
})


const decimal = document.getElementById("decimal")
const zero = document.getElementById("zero")
const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five =document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")

decimal.addEventListener("click", (event) => {
  if (display.value == 0) {
    display.value = event.target.value;
  } else {
    display.value += event.target.value
  }
})

zero.addEventListener("click", (event) => {
  if (display.value == 0) {
    display.value = event.target.value;
  } else {
    display.value += event.target.value;
  }
})

one.addEventListener("click", (event) => {
  if (display.value == 0) {
    display.value = event.target.value;
  } else {
    display.value += event.target.value;
  }
})

two.addEventListener("click", (event) => {
  if (display.value == 0) {
    display.value = event.target.value;
  } else {
    display.value += event.target.value;
  }
})

three.addEventListener("click", (event) => {
  if (display.value == 0) {
    display.value = event.target.value;
  } else {
    display.value += event.target.value;
  }
})

four.addEventListener("click", (event) => {
  if (display.value == 0) {
    display.value = event.target.value;
  } else {
    display.value += event.target.value;
  }
})

five.addEventListener("click", (event) => {
  if (display.value == 0) {
    display.value = event.target.value;
  } else {
    display.value += event.target.value;
  }
})

six.addEventListener("click", (event) => {
  if (display.value == 0) {
    display.value = event.target.value;
  } else {
    display.value += event.target.value;
  }
})

seven.addEventListener("click", (event) => {
  if (display.value == 0) {
    display.value = event.target.value;
  } else {
    display.value += event.target.value;
  }
})

eight.addEventListener("click", (event) => {
  if (display.value == 0) {
    display.value = event.target.value;
  } else {
    display.value += event.target.value;
  }
})

nine.addEventListener("click", (event) => {
  if (display.value == 0) {
    display.value = event.target.value;
  } else {
    display.value += event.target.value;
  }
})