// . User starts off typing numbers (e.g. 12 )
//         1. Have 0-9 buttons and they need values (HTML buttons)
//         3. onclick 0-9 buttons - trigger an event - addEventListener
//         3. Get the value from the button (event.target.value)
//         4. Value of the button goes into input box - document.getElementById .. set innerHTML - ... 
//         6. IF the input already has a value -> append it to the end of the current value
//         7. Store the value in a variable


//         ... Have functions/operators (+ - * /) as buttons and they need values
//         1. Onclick of the button
//         2. add the "+" to the input box
//         3. Keep a note of the operator which was clicked
//         4. OPTION #1 - change the function which is run when the = is clicked 
//                        (e.g. We click "+" this means the "=" needs to run a doAddition(param1,param2))
//         ... HOPE the user puts in another number (e.g. 3)


//         1. Onclick of the button
//         2. add the number to the input box
//         3. IF the input already has a value -> append it to the end of the current value
//         ... equals button

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


let partOneSum
let partTwoSum
let activeOperator

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
    case "/":
      display.value = divideFunction(partOneSum, partTwoSum);
      console.log("this divides");
      break;
    
  }
})

document.getElementById("clear").addEventListener("click", (event) => {
  //set the input back to 0
 document.getElementById("display").value = 0

})

document.getElementById("del").addEventListener("click", (event) => {
  
})

document.getElementById("+").addEventListener("click", (event) => {
  partOneSum = display.value
  activeOperator = "+"
  display.value += event.target.id
})

document.getElementById("/").addEventListener("click", (event) => {
  partOneSum = display.value
  activeOperator = "/"
  display.value += event.target.id
})

document.getElementById("x").addEventListener("click", (event) => {
  partOneSum = display.value
  activeOperator = "x"
  display.value += event.target.id
})

document.getElementById("-").addEventListener("click", (event) => {
  partOneSum = display.value
  activeOperator = "-"
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