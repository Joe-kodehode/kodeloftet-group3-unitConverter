// Unit Converter

// First we need to delcare our golbal-scope variables.

const fromUnit = document.getElementById("from");
const toUnit = document.getElementById("to");
const button = document.getElementById("convertBtn");
const input = document.getElementById("userInput");

// Our convert function which will run when the user clicks the convert button.
function convert() {
  // Variables which are only accessable in our function
  const inputValue = parseInt(input.value);
  const fromUnitValue = fromUnit.value;
  const toUnitValue = toUnit.value;
  let result;

  // conditional to check which unit the user has selected for "to" and "from" dropdowns, and what conversion to do based on the selections.
  if (fromUnitValue === "meters" && toUnitValue === "kilometers") {
    result = inputValue / 1000;
  } else if (fromUnitValue === "meters" && toUnitValue === "miles") {
    result = inputValue * 0.000621371;
  } else if (fromUnitValue === "kilometers" && toUnitValue === "meters") {
    result = inputValue * 1000;
  } else if (fromUnitValue === "kilometers" && toUnitValue === "miles") {
    result = inputValue * 0.621371;
  } else if (fromUnitValue === "miles" && toUnitValue === "meters") {
    result = inputValue * 1609.34;
  } else if (fromUnitValue === "miles" && toUnitValue === "kilometers") {
    result = inputValue * 1.60934;
  }

  // sending our result from the variable in javascript to the paragraph in html.
  document.getElementById("result").textContent = result.toFixed(2);
}

// listening for the user clicking the convert button, which runs our convert function
button.addEventListener("click", convert);

// listening for a change on our "to" and "from" selects, then running the "sameUnits" function.
fromUnit.addEventListener("change", sameUnits);
toUnit.addEventListener("change", sameUnits);

// function to compare unit values in "to" and "from", if they are the same, the button is disabled. Otherwise it is enabled.
function sameUnits() {
  if (fromUnit.value === toUnit.value) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}
