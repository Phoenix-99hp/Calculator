
let displayValueOne = []
let displayValueTwo = []
let displayOperator = []
let firstSlice = displayValueOne.slice(displayValueOne.length -1, displayValueOne.length);
let secondSlice = displayValueTwo.slice(displayValueTwo.length -1, displayValueTwo.length);
let operatorSlice = displayOperator.slice(displayOperator.length -1, displayOperator.length);


/*var firstSlice = displayValueOne.slice(displayValueOne.length -1, displayValueOne.length);
var displayOperator = []
var secondSlice = displayValueTwo.slice(displayValueTwo.length -1, displayValueTwo.length);
*/

/*
function firstSlice(){
    return displayValueOne.slice(displayValueOne.slice(displayValueOne.length -1, displayValueOne.length));
}
*/
/*
var firstNumber =  ;
var operator = ;
var secondNumber = ;
*/


let display = document.getElementById("displayText");
const clear = document.getElementById("clearButton");
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
const dot = document.getElementById("decimalButton");
const equals = document.getElementById("equalsButton");

function clearDisplay() {
    display.innerHTML = "";
}

clear.addEventListener("click", function(e){
    display.innerHTML = "";
})

zero.addEventListener("click", function(e){
    if (display.innerHTML.length > 14) {
        alert("The maximum number of digits allowed is 15.");
    }
    else if (display.innerHTML.includes("+") || display.innerHTML.includes ("-") || display.innerHTML.includes ("÷") || display.innerHTML.includes ("x")) {
        display.innerHTML += "0";
        displayValueTwo.push(display.innerHTML);
    }
    else if (displayValueTwo.length > 0) {
        display.innerHTML += "0";
        displayValueTwo.push(display.innerHTML);
    }
    else {
        display.innerHTML += "0";
        displayValueOne.push(display.innerHTML);
}})

one.addEventListener("click", function(e){
    if (display.innerHTML.length > 14) {
        alert("The maximum number of digits allowed is 15.");
    }
    else if (display.innerHTML.includes("+") || display.innerHTML.includes ("-") || display.innerHTML.includes ("÷") || display.innerHTML.includes ("x")) {
        display.innerHTML += "1";
        displayValueTwo.push(display.innerHTML);
    }
    else if (displayValueTwo.length > 0) {
        display.innerHTML += "1";
        displayValueTwo.push(display.innerHTML);
    }
    else {
        display.innerHTML += "1";
        displayValueOne.push(display.innerHTML);
}})

two.addEventListener("click", function(e){
    if (display.innerHTML.length > 14) {
        alert("The maximum number of digits allowed is 15.");
    }
    else if (display.innerHTML.includes("+") || display.innerHTML.includes ("-") || display.innerHTML.includes ("÷") || display.innerHTML.includes ("x")) {
        display.innerHTML += "2";
        displayValueTwo.push(display.innerHTML);
    }
    else if (displayValueTwo.length > 0) {
        display.innerHTML += "2";
        displayValueTwo.push(display.innerHTML);
    }
    else {
        display.innerHTML += "2";
        displayValueOne.push(display.innerHTML);
}})

three.addEventListener("click", function(e){
    if (display.innerHTML.length > 14) {
        alert("The maximum number of digits allowed is 15.");
    }
    else if (display.innerHTML.includes("+") || display.innerHTML.includes ("-") || display.innerHTML.includes ("÷") || display.innerHTML.includes ("x")) {
        display.innerHTML += "3";
        displayValueTwo.push(display.innerHTML);
    }
    else if (displayValueTwo.length > 0) {
        display.innerHTML += "3";
        displayValueTwo.push(display.innerHTML);
    }
    else {
        display.innerHTML += "3";
        displayValueOne.push(display.innerHTML);
}})

four.addEventListener("click", function(e){
    if (display.innerHTML.length > 14) {
        alert("The maximum number of digits allowed is 15.");
    }
    else if (display.innerHTML.includes("+") || display.innerHTML.includes ("-") || display.innerHTML.includes ("÷") || display.innerHTML.includes ("x")) {
        display.innerHTML += "4";
        displayValueTwo.push(display.innerHTML);
    }
    else if (displayValueTwo.length > 0) {
        display.innerHTML += "4";
        displayValueTwo.push(display.innerHTML);
    }
    else {
        display.innerHTML += "4";
        displayValueOne.push(display.innerHTML);
}})

five.addEventListener("click", function(e){
    if (display.innerHTML.length > 14) {
        alert("The maximum number of digits allowed is 15.");
    }
    else if (display.innerHTML.includes("+") || display.innerHTML.includes ("-") || display.innerHTML.includes ("÷") || display.innerHTML.includes ("x")) {
        display.innerHTML += "5";
        displayValueTwo.push(display.innerHTML);
    }
    else if (displayValueTwo.length > 0) {
        display.innerHTML += "5";
        displayValueTwo.push(display.innerHTML);
    }
    else {
        display.innerHTML += "5";
        displayValueOne.push(display.innerHTML);
}})

six.addEventListener("click", function(e){
    if (display.innerHTML.length > 14) {
        alert("The maximum number of digits allowed is 15.");
    }
    else if (display.innerHTML.includes("+") || display.innerHTML.includes ("-") || display.innerHTML.includes ("÷") || display.innerHTML.includes ("x")) {
        display.innerHTML += "6";
        displayValueTwo.push(display.innerHTML);
    }
    else if (displayValueTwo.length > 0) {
        display.innerHTML += "6";
        displayValueTwo.push(display.innerHTML);
    }
    else {
        display.innerHTML += "6";
        displayValueOne.push(display.innerHTML);
}})

seven.addEventListener("click", function(e){
    if (display.innerHTML.length > 14) {
        alert("The maximum number of digits allowed is 15.");
    }
    else if (display.innerHTML.includes("+") || display.innerHTML.includes ("-") || display.innerHTML.includes ("÷") || display.innerHTML.includes ("x")) {
        display.innerHTML += "7";
        displayValueTwo.push(display.innerHTML);
    }
    else if (displayValueTwo.length > 0) {
        display.innerHTML += "7";
        displayValueTwo.push(display.innerHTML);
    }
    else {
        display.innerHTML += "7";
        displayValueOne.push(display.innerHTML);
}})

eight.addEventListener("click", function(e){
    if (display.innerHTML.length > 14) {
        alert("The maximum number of digits allowed is 15.");
    }
    else if (display.innerHTML.includes("+") || display.innerHTML.includes ("-") || display.innerHTML.includes ("÷") || display.innerHTML.includes ("x")) {
        display.innerHTML += "8";
        displayValueTwo.push(display.innerHTML);
    }
    else if (displayValueTwo.length > 0) {
        display.innerHTML += "8";
        displayValueTwo.push(display.innerHTML);
    }
    else {
        display.innerHTML += "8";
        displayValueOne.push(display.innerHTML);
}})

nine.addEventListener("click", function(e){
    if (display.innerHTML.length > 14) {
        alert("The maximum number of digits allowed is 15.");
    }
    else if (display.innerHTML.includes("+") || display.innerHTML.includes ("-") || display.innerHTML.includes ("÷") || display.innerHTML.includes ("x")) {
        display.innerHTML += "9";
        displayValueTwo.push(display.innerHTML);
    }
    else if (displayValueTwo.length > 0) {
        display.innerHTML += "9";
        displayValueTwo.push(display.innerHTML);
    }
    else {
        display.innerHTML += "9";
        displayValueOne.push(display.innerHTML);
}})

dot.addEventListener("click", function(e){
    if (display.innerHTML.length > 14) {
        alert("The maximum number of digits allowed is 15.");
    }
    else if (display.innerHTML.includes(".")) {
        alert("Only one decimal can be entered at a time.")
    }
    else {
        display.innerHTML += ".";
        displayValueOne.push(display.innerHTML);
}})

plus.addEventListener("click", function(e){
    if (display.innerHTML.includes("+") || display.innerHTML.includes ("-") || display.innerHTML.includes ("÷") || display.innerHTML.includes ("x")) {
        alert("Only one operator can be entered at a time.")
    }
    else {
        display.innerHTML += " + ";
        displayOperator.push(display.innerHTML);
    }
})

minus.addEventListener("click", function(e){
    if (display.innerHTML.includes("+") || display.innerHTML.includes ("-") || display.innerHTML.includes ("÷") || display.innerHTML.includes ("x")) {
        alert("Only one operator can be entered at a time.")
    }
    else {
        display.innerHTML += " - ";
        displayOperator.push(display.innerHTML);
    }
})

divide.addEventListener("click", function(e){
    if (display.innerHTML.includes("+") || display.innerHTML.includes ("-") || display.innerHTML.includes ("÷") || display.innerHTML.includes ("x")) {
        alert("Only one operator can be entered at a time.")
    }
    else {
        display.innerHTML += " ÷ ";
        displayOperator.push(display.innerHTML);
    }
})

multiply.addEventListener("click", function(e){
    if (display.innerHTML.includes("+") || display.innerHTML.includes ("-") || display.innerHTML.includes ("÷") || display.innerHTML.includes ("x")) {
        alert("Only one operator can be entered at a time.")
    }
    else {
        display.innerHTML += " x ";
        displayOperator.push(display.innerHTML);
    }
})

function addition() {
    return firstSlice + secondSlice;
}

function subtraction() {
    return firstSlice - secondSlice;
}

function multiplication() {
    return firstSlice * secondSlice;
}

function division() {
    return firstSlice / secondSlice;
}

function operate() {
    if (operatorSlice === "+"){
        addition();
    }
    else if (operatorSlice === "-"){
        subtraction();
    }
    else if (operatorSlice === "x"){
        multiplication();
    }
    else if (operatorSlice === "÷"){
        division();
    }
}

equals.addEventListener("click", function(e){
    display.innerHTML = operate();
})

