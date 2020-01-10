let displayValue = [""];

let display = document.getElementById("displayText");
const clear = document.getElementById("clearButton");
const back = document.getElementById("backButton");
const zero = document.getElementById("0Button");
const one = document.getElementById("1Button");
const two = document.getElementById("2Button");
const three = document.getElementById("3Button");
const four = document.getElementById("4Button");
const five = document.getElementById("5Button");
const six = document.getElementById("6Button");
const seven = document.getElementById("7Button");
const eight = document.getElementById("8Button");
const nine = document.getElementById("9Button");
const plus = document.getElementById("additionButton");
const minus = document.getElementById("subtractionButton");
const divide = document.getElementById("divisionButton");
const multiply = document.getElementById("multiplicationButton");
const squarert = document.getElementById("squarertButton");
const dot = document.getElementById("decimalButton");
const equals = document.getElementById("equalsButton");

function updateArray() {
    displayValue.push(display.innerHTML);
    displayValue.splice(0, 1);
    console.log (displayValue);
}

clear.addEventListener("click", function(e){
    display.innerHTML = "";
    displayValue = [""];
})

zero.addEventListener("click", function(e){
    let aString = displayValue.toString();
    if (display.innerHTML.length > 29) {
        alert("Don't test the display...");
    }
    else if (aString.endsWith(" / ") === true) {
        alert("A number divided by 0 is undefined")
    }
    else { 
        display.innerHTML += "0";
        updateArray();
    }})

one.addEventListener("click", function(e){
    if (display.innerHTML.length > 29) {
        alert("Don't test the display...");
    }
    else { 
        display.innerHTML += "1";
        updateArray();
    }})

two.addEventListener("click", function(e){
    if (display.innerHTML.length > 29) {
        alert("Don't test the display...");
    }
    else { 
        display.innerHTML += "2";
        updateArray();
    }})

three.addEventListener("click", function(e){
    if (display.innerHTML.length > 29) {
        alert("Don't test the display...");
    }
    else { 
        display.innerHTML += "3";
        updateArray();
    }})

four.addEventListener("click", function(e){
    if (display.innerHTML.length > 29) {
        alert("Don't test the display...");
    }
    else { 
        display.innerHTML += "4";
        updateArray();
    }})

five.addEventListener("click", function(e){
    if (display.innerHTML.length > 29) {
        alert("Don't test the display...");
    }
    else { 
        display.innerHTML += "5";
        updateArray();
    }})

six.addEventListener("click", function(e){
    if (display.innerHTML.length > 29) {
        alert("Don't test the display...");
    }
    else { 
        display.innerHTML += "6";
        updateArray();
    }})

seven.addEventListener("click", function(e){
    if (display.innerHTML.length > 29) {
        alert("Don't test the display...");
    }
    else { 
        display.innerHTML += "7";
        updateArray();
    }})

eight.addEventListener("click", function(e){
    if (display.innerHTML.length > 29) {
        alert("Don't test the display...");
    }
    else { 
        display.innerHTML += "8";
        updateArray();
    }})

nine.addEventListener("click", function(e){
    if (display.innerHTML.length > 29) {
        alert("Don't test the display...");
    }
    else { 
        display.innerHTML += "9";
        updateArray();
    }})
 
dot.addEventListener("click", function(e){
    let aString = displayValue.toString();
    if (display.innerHTML.length > 29) {
        alert("Don't test the display...");
    }
    else if (aString.endsWith(".") === true) {
        alert("A decimal cannot be used directly next to another decimal.")
    }
    else {
        display.innerHTML += ".";
        updateArray();
}})

plus.addEventListener("click", function(e){
    let aString = displayValue.toString();
    if (display.innerHTML.length > 29) {
        alert("Don't test the display...");
    }
    else if (display.innerHTML.length <= 0) {
        alert ("You cannot begin an operation with +.")
    }
    else if (aString.endsWith(" ") === true) {
        alert("This operator cannot be used directly next to another operator.");
    }
    else if (aString.endsWith(".") === true) {
        alert("An operator cannot be used directly next to a decimal.");
    }
    else {
        display.innerHTML += " + ";
        updateArray();
    }
})

minus.addEventListener("click", function(e){
    let aString = displayValue.toString();
    if (display.innerHTML.length > 29) {
        alert("Don't test the display...");
    }
    else if (aString.endsWith(".") === true) {
        alert("An operator cannot be used directly next to a decimal.");
    }
    else {
        display.innerHTML += " - ";
        updateArray();
    }
})

divide.addEventListener("click", function(e){
    let aString = displayValue.toString();
    if (display.innerHTML.length > 29) {
        alert("Don't test the display...");
    }
    else if (display.innerHTML.length <= 0) {
        alert ("You cannot begin an operation with ÷.")
    }
    else if (aString.endsWith(" ") === true) {
        alert("An operator cannot be used directly next to another operator.");
    }
    else if (aString.endsWith(".") === true) {
        alert("An operator cannot be used directly next to a decimal.");
    }
    else {
        display.innerHTML += " / ";
        updateArray();
    }
})

multiply.addEventListener("click", function(e){
    let aString = displayValue.toString();
    if (display.innerHTML.length > 29) {
        alert("Don't test the display...");
    }
    else if (display.innerHTML.length <= 0) {
        alert ("You cannot begin an operation with x.")
    }
    else if (aString.endsWith(" ") === true) {
        alert("This operator cannot be used directly next to another operator.");
    }
    else if (aString.endsWith(".") === true) {
        alert("An operator cannot be used directly next to a decimal.");
    }
    else {
        display.innerHTML += " * ";
        updateArray();
    }
})

squarert.addEventListener("click", function(e){
    let aString = displayValue.toString();
    if (display.innerHTML.length > 29) {
        alert("Don't test the display...");
    }
    else if (aString.endsWith(".") === true) {
        alert("This operator cannot be used directly next to a decimal.");
    }
    else {
        display.innerHTML += " √ ";
        updateArray();
    }
})

function operate() {
    let operation = eval(displayValue.toString());
    console.log(operation);
    display.innerHTML = operation;
}

equals.addEventListener("click", function(e){
    let aString = displayValue.toString();
    if (display.innerHTML.length <= 0) {
        alert ("You cannot begin an operation with =.")
    }
    else if (aString.endsWith(" ") === true) {
        alert("= can only be used after a full expression is entered.");
    }
    else {
        operate();
        updateArray();
   }
})

back.addEventListener("click", function(e){
    let aString = displayValue.toString();
    let backSpace = (aString.slice(0, aString.length -1));
    let deleteOperator = (aString.slice(0, aString.length -3));
    if (aString.endsWith(" ") === true) {
        display.innerHTML = deleteOperator;
        updateArray();
    }
    else {
        display.innerHTML = backSpace;
        updateArray();
    }
})