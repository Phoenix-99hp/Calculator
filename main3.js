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
    console.log(displayValue);
}

window.addEventListener("keypress", function(e){
    if ((e.keyCode == 48 || e.keyCode == 49 || e.keyCode == 50 || e.keyCode == 51 ||
        e.keyCode == 52 || e.keyCode == 53 || e.keyCode == 54 || e.keyCode == 55 ||
        e.keyCode == 56 || e.keyCode == 57 || e.keyCode == 190 || e.keyCode == 107 || e.keyCode == 189) && (display.innerHTML.length > 29)) {
        alert("Don't test the display...");
    }
    else if (e.keyCode == 48) { 
        display.innerHTML += "0";
        updateArray();
    }
    else if (e.keyCode == 49) {
        display.innerHTML += "1";
        updateArray();
    }
    else if (e.keyCode == 50) {
        display.innerHTML += "2";
        updateArray();
    }
    else if (e.keyCode == 51) {
        display.innerHTML += "3";
        updateArray();
    }
    else if (e.keyCode == 52) {
        display.innerHTML += "4";
        updateArray();
    }
    else if (e.keyCode == 53) {
        display.innerHTML += "5";
        updateArray();
    }
    else if (e.keyCode == 54) {
        display.innerHTML += "6";
        updateArray();
    }
    else if (e.keyCode == 55) {
        display.innerHTML += "7";
        updateArray();
    }
    else if (e.keyCode == 56) {
        display.innerHTML += "8";
        updateArray();
    }
    else if (e.keyCode == 57) {
        display.innerHTML += "9";
        updateArray();
    }
//
    else if ((e.keyCode == 190) && 
        (display.innerHTML.endsWith(".") === true)) {
        alert("A decimal cannot be used directly next to another decimal.");
    }
    else if (e.keyCode == 190) {
        display.innerHTML += ".";
        updateArray();
    }
    else if ((e.keyCode == 107) && (display.innerHTML.length <= 0)) {
        alert ("You cannot begin an operation with +.");
    }
    else if ((e.keyCode == 107) && (display.innerHTML.endsWith(" ") === true)) {
        alert("This operator cannot be used directly next to the selected operator.");
    }
    else if ((e.keyCode == 107) && (display.innerHTML.endsWith(".") === true)) {
        alert("This operator cannot be used directly next to a decimal.");
    }
    else if (e.keyCode == 107) {
        display.innerHTML += " + ";
        updateArray();
    }
    else if ((e.keyCode == 189) && (display.innerHTML.endsWith(".") === true)) {
        alert("This operator cannot be used directly next to a decimal.");
    }
    else if ((e.keyCode == 189) && (display.innerHTML.endsWith("√ ") === true)) {
        alert("You cannot take the square root of a negative number.");
    }
    else if (e.keyCode == 189) {
        display.innerHTML += " - ";
        
    }
//
})

clear.addEventListener("click", function(e){
    display.innerHTML = "";
    displayValue = [""];
})

zero.addEventListener("click", function(e){
    if (display.innerHTML.length > 29) {
        alert("Don't test the display...");
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
        alert("This operator cannot be used directly next to the selected operator.");
    }
    else if (aString.endsWith(".") === true) {
        alert("This operator cannot be used directly next to a decimal.");
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
        alert("This operator cannot be used directly next to a decimal.");
    }
    else if (aString.endsWith("√ ") === true) {
        alert("You cannot take the square root of a negative number.");
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
        alert("This operator cannot be used directly next to the selected operator.");
    }
    else if (aString.endsWith(".") === true) {
        alert("This operator cannot be used directly next to a decimal.");
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
        alert("This operator cannot be used directly next to the selected operator.");
    }
    else if (aString.endsWith(".") === true) {
        alert("This operator cannot be used directly next to a decimal.");
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

function addition(a, b){
    return (a * 1) + (b * 1);
}

function cat(a, b){
    return a + b;
}

function subtraction(a, b){
    return a - b;
}

function multiplication(a, b){
    return a * b;
}

function division(a, b){
    return a / b;
}

function rt (a) {
    return Math.sqrt(a);
}

// The name says it all. It may not be pretty, but this is how I built in order of operations. 
function operationStation(){
    let aString = displayValue.toString();
    let splitString = aString.split(" ");
    
    function checkForExtraSpaces(splitString){
        return splitString != "";
    }

    let splitStringFiltered = splitString.filter(checkForExtraSpaces);

    while (splitStringFiltered.includes("+") || splitStringFiltered.includes("-") 
    || splitStringFiltered.includes("/") || splitStringFiltered.includes("*") 
    || splitStringFiltered.includes("√") || splitStringFiltered[1]){

        if (splitStringFiltered.includes("/") &&  
            splitStringFiltered[splitStringFiltered.indexOf("/")+1] == "0"){
            //console.log(splitStringFiltered[splitStringFiltered.indexOf("/")+1]);
            display.innerHTML = "Undefined";
            break;
        }
        else if (splitStringFiltered.includes("-") && 
            splitStringFiltered[splitStringFiltered.lastIndexOf("-") - 1] == "-" &&
            splitStringFiltered[splitStringFiltered.lastIndexOf("-") - 2] == "-") {
            splitStringFiltered.splice(splitStringFiltered.lastIndexOf("-")-1, 2);
            display.innerHTML = splitStringFiltered;
            //console.log(splitStringFiltered);
        }
        else if (splitStringFiltered.includes("-") && 
            splitStringFiltered[splitStringFiltered.lastIndexOf("-") - 1] == null) {
            splitStringFiltered.splice(splitStringFiltered.indexOf("-"), 2, 
            cat(splitStringFiltered[splitStringFiltered.indexOf("-")], 
            splitStringFiltered[splitStringFiltered.indexOf("-")+1])); 
            display.innerHTML = splitStringFiltered;
            //console.log(splitStringFiltered);
        }
        else if ((splitStringFiltered.includes("-")) && 
            (splitStringFiltered[splitStringFiltered.indexOf("-") - 1] === "+" ||
            splitStringFiltered[splitStringFiltered.indexOf("-") - 1] === "/" ||
            splitStringFiltered[splitStringFiltered.indexOf("-") - 1] === "*") && 
            splitStringFiltered[splitStringFiltered.indexOf("-") + 1] != "-"){
            splitStringFiltered.splice(splitStringFiltered.indexOf("-"), 2, 
            cat(splitStringFiltered[splitStringFiltered.indexOf("-")], 
            splitStringFiltered[splitStringFiltered.indexOf("-")+1])); 
            display.innerHTML = splitStringFiltered;
            //console.log(splitStringFiltered);
        }
       else if (splitStringFiltered.includes("-") && 
            splitStringFiltered[splitStringFiltered.lastIndexOf("-") - 1] === "-" && 
            splitStringFiltered[splitStringFiltered.lastIndexOf("-") - 2] != "-"){
            splitStringFiltered.splice(splitStringFiltered.lastIndexOf("-")-1, 2, "+"); 
            display.innerHTML = splitStringFiltered;
            //console.log(splitStringFiltered);
        }
        else if (splitStringFiltered.includes("+") && 
            splitStringFiltered[splitStringFiltered.lastIndexOf("+") - 1] == "+"){
            splitStringFiltered.splice(splitStringFiltered.lastIndexOf("+")-1, 2, "+");
            display.innerHTML = splitStringFiltered;
            //console.log(splitStringFiltered);
        }
        else if (splitStringFiltered.includes("+") && 
            splitStringFiltered[splitStringFiltered.lastIndexOf("+") - 1] == null){
            splitStringFiltered.splice(splitStringFiltered.indexOf("+"), 1,)
            display.innerHTML = splitStringFiltered;
            //console.log(splitStringFiltered);
        }
        else if (splitStringFiltered.includes("√") && 
            splitStringFiltered[splitStringFiltered.indexOf("√")-1] != null && 
            splitStringFiltered[splitStringFiltered.indexOf("√")-1] != "+" && 
            splitStringFiltered[splitStringFiltered.indexOf("√")-1] != "-" && 
            splitStringFiltered[splitStringFiltered.indexOf("√")-1] != "/" && 
            splitStringFiltered[splitStringFiltered.indexOf("√")-1] != "*"){
            splitStringFiltered.splice(splitStringFiltered.indexOf("√"), 0, "*")
            display.innerHTML = splitStringFiltered;
            //console.log(splitStringFiltered);
        }
        else if (splitStringFiltered.includes("√")){ 
            splitStringFiltered.splice(splitStringFiltered.indexOf("√"), 2, 
            rt(splitStringFiltered[splitStringFiltered.indexOf("√")+1])); 
            display.innerHTML = splitStringFiltered;
            //console.log(splitStringFiltered);
        }
        else if (splitStringFiltered.includes("*") && splitStringFiltered.includes ("/") && 
            splitStringFiltered.indexOf("*") < splitStringFiltered.indexOf("/")) {
            splitStringFiltered.splice(splitStringFiltered.indexOf("*")- 1, 3, 
            multiplication(splitStringFiltered[splitStringFiltered.indexOf("*")-1], 
            splitStringFiltered[splitStringFiltered.indexOf("*")+1])); 
            display.innerHTML = splitStringFiltered;
            //console.log(splitStringFiltered);
        }
       else if (splitStringFiltered.includes("*") && splitStringFiltered.includes ("/") && 
            splitStringFiltered.indexOf("*") > splitStringFiltered.indexOf("/")) {
            splitStringFiltered.splice(splitStringFiltered.indexOf("/")- 1, 3, 
            division(splitStringFiltered[splitStringFiltered.indexOf("/")-1], 
            splitStringFiltered[splitStringFiltered.indexOf("/")+1])); 
            display.innerHTML = splitStringFiltered;
            //console.log(splitStringFiltered);
        }
        else if (splitStringFiltered.includes("*")) {
            splitStringFiltered.splice(splitStringFiltered.indexOf("*") -1, 3, 
            multiplication(splitStringFiltered[splitStringFiltered.indexOf("*")-1], 
            splitStringFiltered[splitStringFiltered.indexOf("*")+1])); 
            display.innerHTML = splitStringFiltered;
            //console.log(splitStringFiltered);
        }
       else if (splitStringFiltered.includes("/")) {
            splitStringFiltered.splice(splitStringFiltered.indexOf("/") - 1, 3, 
            division(splitStringFiltered[splitStringFiltered.indexOf("/")-1], 
            splitStringFiltered[splitStringFiltered.indexOf("/")+1])); 
            display.innerHTML = splitStringFiltered;
            //console.log(splitStringFiltered);
        }
        else if (splitStringFiltered.includes("+") && splitStringFiltered.includes ("-") && 
            splitStringFiltered.indexOf("+") < splitStringFiltered.indexOf("-")) {
            splitStringFiltered.splice(splitStringFiltered.indexOf("+") - 1, 3, 
            addition(splitStringFiltered[splitStringFiltered.indexOf("+")-1], 
            splitStringFiltered[splitStringFiltered.indexOf("+")+1])); 
            display.innerHTML = splitStringFiltered;
            //console.log(splitStringFiltered);
        }
        else if (splitStringFiltered.includes("+") && splitStringFiltered.includes ("-") && 
            splitStringFiltered.indexOf("+") > splitStringFiltered.indexOf("-")) {
            splitStringFiltered.splice(splitStringFiltered.indexOf("-") - 1, 3, 
            subtraction(splitStringFiltered[splitStringFiltered.indexOf("-")-1], 
            splitStringFiltered[splitStringFiltered.indexOf("-")+1])); 
            display.innerHTML = splitStringFiltered;
            //console.log(splitStringFiltered);
        }
        else if (splitStringFiltered.includes("+")) {
            splitStringFiltered.splice(splitStringFiltered.indexOf("+") - 1, 3, 
            addition(splitStringFiltered[splitStringFiltered.indexOf("+")-1], 
            splitStringFiltered[splitStringFiltered.indexOf("+")+1])); 
            display.innerHTML = splitStringFiltered;
            //console.log(splitStringFiltered);
        }
        else if (splitStringFiltered.includes("-")) {
            splitStringFiltered.splice(splitStringFiltered.indexOf("-") - 1, 3, 
            subtraction(splitStringFiltered[splitStringFiltered.indexOf("-")-1], 
            splitStringFiltered[splitStringFiltered.indexOf("-")+1]));
            display.innerHTML = splitStringFiltered;
            //console.log(splitStringFiltered);
        }
    }
}

equals.addEventListener("click", function(e){
    if (display.innerHTML.length <= 0) {
        alert ("You cannot begin an operation with =.")
    }
    else if (display.innerHTML.endsWith(" ") === true) {
        alert("= can only be used after a full expression is entered.");
    }
    else {
        operationStation();
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