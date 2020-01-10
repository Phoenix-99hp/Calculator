let displayValue = [""];
//
let spanValue = [];

spanValueConverted = [""]

//let span = document.getElementsByTagName("SPAN");
/*
let aString = displayValue.toString();
    let splitString = aString.split(" ");
    
    function checkForExtraSpaces(splitString){
        return splitString != "";
    }

    let splitStringFiltered = splitString.filter(checkForExtraSpaces);

let aString =displayValue.toString();
let splitString = aString.split("<" && ">");
function removeSpanTags(splitString){
    return splitString != ('<span style="color: red;">' && '</span>');
}
let displayValueFiltered = displayValue.filter(removeSpanTags);
*/
//
let screen = document.getElementById("displayScreen");
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

//
function updateSpanValue() {
    let spans = document.getElementsByTagName("span");
    spanValue.push(spans.innerHTML);
    spanValue.splice(0, 1);
    console.log(spanValue);
    console.log(spans.innerHTML);
}
//
function updateArray() {
    displayValue.push(display.innerHTML);
    displayValue.splice(0, 1);
    //console.log(displayValue);
}

clear.addEventListener("click", function(e){
    while (screen.hasChildNodes()){
        screen.removeChild(screen.firstChild);
    }
    display.innerHTML = "";
    displayValue = [""];
    spanValue = [];
})

zero.addEventListener("click", function(e){
    let aString = spanValue.toString();
    if (aString.length > 29) {
        alert("Don't test the display...");
    }
//
   /* else if (display.innerHTML.length == 3 && display.innerHTML.includes(".") == false &&
        (display.innerHTML.charAt(display.innerHTML.length-1) == "0" || "1" || "2" ||
        "3" || "4" || "5" || "6" || "7" || "8" || "9")){
        display.innerHTML = display.innerHTML.slice(0,1) + "," + display.innerHTML.slice(1) + "0";
    }

    else if (display.innerHTML.length == 5 && display.innerHTML.includes(".") == false) {
        display.innerHTML = display.innerHTML.slice(0,1) + "0" + display.innerHTML.slice(1);
    }

    else if (display.innerHTML.length == 6 && display.innerHTML.includes(".") == false) {
        display.innerHTML = display.innerHTML.slice(0,2) + "0" + display.innerHTML.slice(2);
    }

    else if (display.innerHTML.length == 7 && display.innerHTML.includes(".") == false) {
        display.innerHTML = display.innerHTML.slice(0,1) + ",0" + display.innerHTML.slice(1);
    }

    else if (display.innerHTML.length == 9 && display.innerHTML.includes(".") == false) {
        display.innerHTML = display.innerHTML.slice(0,1) + "0" + display.innerHTML.slice(1);
    }
    
    else if (display.innerHTML.length == 10 && display.innerHTML.includes(".") == false) {
        display.innerHTML = display.innerHTML.slice(0,2) + "0" + display.innerHTML.slice(2);
    }

    else if (display.innerHTML.length == 11 && display.innerHTML.includes(".") == false) {
        display.innerHTML = display.innerHTML.slice(0,1) + ",0" + display.innerHTML.slice(1);
    }

    else if (display.innerHTML.length == 13 && display.innerHTML.includes(".") == false) {
        display.innerHTML = display.innerHTML.slice(0,1) + "0" + display.innerHTML.slice(1);
    }

    else if (display.innerHTML.length == 14 && display.innerHTML.includes(".") == false) {
        display.innerHTML = display.innerHTML.slice(0,2) + "0" + display.innerHTML.slice(2);
    }

    else if (display.innerHTML.length == 15 && display.innerHTML.includes(".") == false) {
        display.innerHTML = display.innerHTML.slice(0,1) + ",0" + display.innerHTML.slice(1);
    }

    else if (display.innerHTML.length == 17 && display.innerHTML.includes(".") == false) {
        display.innerHTML = display.innerHTML.slice(0,1) + "0" + display.innerHTML.slice(1);
    }

    else if (display.innerHTML.length == 18 && display.innerHTML.includes(".") == false) {
        display.innerHTML = display.innerHTML.slice(0,2) + "0" + display.innerHTML.slice(2);
    }

    else if (display.innerHTML.length == 19 && display.innerHTML.includes(".") == false) {
        display.innerHTML = display.innerHTML.slice(0,1) + ",0" + display.innerHTML.slice(1);
    }

    else if (display.innerHTML.length == 21 && display.innerHTML.includes(".") == false) {
        display.innerHTML = display.innerHTML.slice(0,1) + "0" + display.innerHTML.slice(1);
    }

    else if (display.innerHTML.length == 22 && display.innerHTML.includes(".") == false) {
        display.innerHTML = display.innerHTML.slice(0,2) + "0" + display.innerHTML.slice(2);
    }

    else if (display.innerHTML.length == 23 && display.innerHTML.includes(".") == false) {
        display.innerHTML = display.innerHTML.slice(0,1) + ",0" + display.innerHTML.slice(1);
    }

    else if (display.innerHTML.length == 25 && display.innerHTML.includes(".") == false) {
        display.innerHTML = display.innerHTML.slice(0,1) + "0" + display.innerHTML.slice(1);
    }

    else if (display.innerHTML.length == 26 && display.innerHTML.includes(".") == false) {
        display.innerHTML = display.innerHTML.slice(0,2) + "0" + display.innerHTML.slice(2);
    }

    else if (display.innerHTML.length == 27 && display.innerHTML.includes(".") == false) {
        display.innerHTML = display.innerHTML.slice(0,1) + ",0" + display.innerHTML.slice(1);
    }

    else if (display.innerHTML.length == 29 && display.innerHTML.includes(".") == false) {
        display.innerHTML = display.innerHTML.slice(0,2) + "0" + display.innerHTML.slice(2);
    }

*/

    //


//  



/*
        display.innerHTML.charAt(display.innerHTML.length - 1) !== "," && 
        display.innerHTML.charAt(display.innerHTML.length - 2) !== "," &&
        display.innerHTML.charAt(display.innerHTML.length - 3) !== ",") 
        display.innerHTML[1] === ",";
        updateArray();
    }

*/
   /*
        display.innerHTML[2] !== "0,"
        && display.innerHTML[2] !== "1," && display.innerHTML[2] !== "2," 
        && display.innerHTML[2] !== "3," && display.innerHTML[2] !== "4," 
        && display.innerHTML[2] !== "5," && display.innerHTML[2] !== "6," 
        && display.innerHTML[2] !== "7," && display.innerHTML[2] !== "8," 
        && display.innerHTML[2] !== "9,"){
        display.innerHTML += "0,";
        updateArray();
    }
    */
    
    else { 
        let span = document.createElement("span");
        screen.appendChild(span);
        span.innerHTML = "0";
        //console.log(span.innerHTML);
        spanValue.push(span.innerHTML);
        console.log(spanValue);
        console.log(span.innerHTML);
        let x = spanValue.toString();
        console.log(x);

       /* function spanValueFiltered(x){
            return x != ",";
        }
        let y = x.filter(spanValueFiltered);
        console.log(y);


        updateSpanValue();
        */
    }})

one.addEventListener("click", function(e){
    //let commaTime = display.innerHTML.match(/\d{3}/g);
    //let commaDown =  commaTime.forEach(element => console.log(element));
    if (display.innerHTML.length > 29) {
        alert("Don't test the display...");
    }
    //
   /* else if (display.innerHTML.length >= 3 && commaTime = 1){
        display.innerHTML = commaTime[1]
        //commaDown;
        console.log(commaTime);
        commaTime.forEach(element => (1 + "," + element));
    
    }
    */
    else { 
        let span = document.createElement("span");
        screen.appendChild(span);
        span.innerHTML = "1";
        //console.log(span.innerHTML);
        spanValue.push(span.innerHTML);
        console.log(spanValue);
        console.log(span.innerHTML);
    }})

two.addEventListener("click", function(e){
    if (display.innerHTML.length > 29) {
        alert("Don't test the display...");
    }
    else { 
        let span = document.createElement("span");
        screen.appendChild(span);
        span.innerHTML = "2";
        //console.log(span.innerHTML);
        spanValue.push(span.innerHTML);
        console.log(spanValue);
        console.log(span.innerHTML);
    }})

three.addEventListener("click", function(e){
    if (display.innerHTML.length > 29) {
        alert("Don't test the display...");
    }
    else { 
        let span = document.createElement("span");
        screen.appendChild(span);
        span.innerHTML = "3";
        //console.log(span.innerHTML);
        spanValue.push(span.innerHTML);
        console.log(spanValue);
        console.log(span.innerHTML);
    }})

four.addEventListener("click", function(e){
    if (display.innerHTML.length > 29) {
        alert("Don't test the display...");
    }
    else { 
        let span = document.createElement("span");
        screen.appendChild(span);
        span.innerHTML = "4";
        //console.log(span.innerHTML);
        spanValue.push(span.innerHTML);
        console.log(spanValue);
        console.log(span.innerHTML);
    }})

five.addEventListener("click", function(e){
    if (display.innerHTML.length > 29) {
        alert("Don't test the display...");
    }
    else { 
        let span = document.createElement("span");
        screen.appendChild(span);
        span.innerHTML = "5";
        //console.log(span.innerHTML);
        spanValue.push(span.innerHTML);
        console.log(spanValue);
        console.log(span.innerHTML);
    }})

six.addEventListener("click", function(e){
    if (display.innerHTML.length > 29) {
        alert("Don't test the display...");
    }
    else { 
        let span = document.createElement("span");
        screen.appendChild(span);
        span.innerHTML = "6";
        //console.log(span.innerHTML);
        spanValue.push(span.innerHTML);
        console.log(spanValue);
        console.log(span.innerHTML);
    }})

seven.addEventListener("click", function(e){
    if (display.innerHTML.length > 29) {
        alert("Don't test the display...");
    }
    else { 
        let span = document.createElement("span");
        screen.appendChild(span);
        span.innerHTML = "7";
        //console.log(span.innerHTML);
        spanValue.push(span.innerHTML);
        console.log(spanValue);
        console.log(span.innerHTML);
    }})

eight.addEventListener("click", function(e){
    if (display.innerHTML.length > 29) {
        alert("Don't test the display...");
    }
    else { 
        let span = document.createElement("span");
        screen.appendChild(span);
        span.innerHTML = "8";
        //console.log(span.innerHTML);
        spanValue.push(span.innerHTML);
        console.log(spanValue);
        console.log(span.innerHTML);
    }
})

nine.addEventListener("click", function(e){
    let aString = displayValue.toString();
    if (display.innerHTML.length > 29) {
        alert("Don't test the display...");
    }
    else { 
        let span = document.createElement("span");
        screen.appendChild(span);
        span.innerHTML = "9";
        //console.log(span.innerHTML);
        spanValue.push(span.innerHTML);
        console.log(spanValue);
        console.log(span.innerHTML);
    }})
 
dot.addEventListener("click", function(e){
    let aString = spanValue.toString();
    if (aString.length > 29) {
        alert("Don't test the display...");
    }
    else if (aString.endsWith(".") === true) {
        alert("A decimal cannot be used directly next to another decimal.")
    }
    else {
        let span = document.createElement("span");
        screen.appendChild(span);
        span.innerHTML = ".";
        span.style.color="red";
        //console.log(span.innerHTML);
        spanValue.push(span.innerHTML);
        console.log(spanValue);
        console.log(span.innerHTML);

        //updateSpanValue();

        /*updateArray();
        let aString = displayValue.toString();
        let splitString1 = aString.split("<");
        function removeSpanTag(splitString1){
            return splitString1 != ("/span>");
        }
        let splitStringFiltered1 = splitString1.filter(removeSpanTag);
        console.log(splitString1);
        console.log(splitStringFiltered1);
        splitStringFiltered1.splice(1, 1, ".");
        console.log(splitStringFiltered1);
        display.innerHTML = splitStringFiltered1.join("");
        console.log(display.innerHTML);
        displayValue.push(splitStringFiltered1.join(""));
        displayValue.splice(0, 1);
        console.log(displayValue);
        */
       /*
        spanValue.push(splitStringFiltered1);
        spanValue.splice(0,1);
        console.log(spanValue);
        */
        
        /*let splitString2 = splitString1.split(".");
        console.log(splitString2);
        function removeLastSpanTag(splitStringFiltered1){
            return splitStringFiltered1 != ('span style="color: red;">')
        }
*/

}})

plus.addEventListener("click", function(e){
    let aString = displayValue.toString();
    if (display.innerHTML.length > 29) {
        alert("Don't test the display...");
    }
    /*else if (display.innerHTML.length <= 0) {
        alert ("You cannot begin an operation with +.")
    }
    */
    else if (aString.endsWith(" ") === true) {
        alert("This operator cannot be used directly next to the selected operator.");
    }
    else if (aString.endsWith(".") === true) {
        alert("This operator cannot be used directly next to a decimal.");
    }
    else {
        let span = document.createElement("span");
        screen.appendChild(span);
        span.innerHTML = " + ";
        //console.log(span.innerHTML);
        spanValue.push(span.innerHTML);
        console.log(spanValue);
        console.log(span.innerHTML);
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
        let span = document.createElement("span");
        screen.appendChild(span);
        span.innerHTML = " - ";
        //console.log(span.innerHTML);
        spanValue.push(span.innerHTML);
        console.log(spanValue);
        console.log(span.innerHTML);
    }
})

divide.addEventListener("click", function(e){
    let aString = displayValue.toString();
    if (display.innerHTML.length > 29) {
        alert("Don't test the display...");
    }
    /*else if (display.innerHTML.length <= 0) {
        alert ("You cannot begin an operation with ÷.")
    }
    */
    else if (aString.endsWith(" ") === true) {
        alert("This operator cannot be used directly next to the selected operator.");
    }
    else if (aString.endsWith(".") === true) {
        alert("This operator cannot be used directly next to a decimal.");
    }
    else {
        let span = document.createElement("span");
        screen.appendChild(span);
        span.innerHTML = " / ";
        //console.log(span.innerHTML);
        spanValue.push(span.innerHTML);
        console.log(spanValue);
        console.log(span.innerHTML);
    }
})

multiply.addEventListener("click", function(e){
    let aString = displayValue.toString();
    if (display.innerHTML.length > 29) {
        alert("Don't test the display...");
    }
    /*
    else if (display.innerHTML.length <= 0) {
        alert ("You cannot begin an operation with x.")
    }
    */
    else if (aString.endsWith(" ") === true) {
        alert("This operator cannot be used directly next to the selected operator.");
    }
    else if (aString.endsWith(".") === true) {
        alert("This operator cannot be used directly next to a decimal.");
    }
    else {
        let span = document.createElement("span");
        screen.appendChild(span);
        span.innerHTML = " * ";
        //console.log(span.innerHTML);
        spanValue.push(span.innerHTML);
        console.log(spanValue);
        console.log(span.innerHTML);
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
        let span = document.createElement("span");
        screen.appendChild(span);
        span.innerHTML = " √ ";
        //console.log(span.innerHTML);
        spanValue.push(span.innerHTML);
        console.log(spanValue);
        console.log(span.innerHTML);
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

function reIndexFinder(){
    if (typeof Array.prototype.reIndexOf === 'undefined') {
        Array.prototype.reIndexOf = function (rx) {
            for (var i in this) {
                if (this[i].toString().match(rx)) {
                    return i;
                }
            }
            return -1;
        };
    }
}

function convertSpanValue(){
    reIndexFinder();
    console.log(spanValue);

    //let n = 0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30;
    let x = "0"||"1"||"2"||"3"||"4"||"5"||"6"||"7"||"8"||"9";
/* 
    let match1 = spanValue.match(/\.[0-9]+/);
    let match2 = spanValue.match(/[0-9]+\.[0-9]+/);
    let y = spanValue.toString();
    let decimalNumber = y.search(/\.[0-9]+/);
    let numberDecimalNumber = y.search(/[0-9]+\.[0-9]+/);
    y.replace(/\.[0-9]+/, decimalNumber -1);
    y.replace(/[0-9]+\.[0-9]+/, )
    y.replace(decimalNumber, decimalNumber)

   let catValue = y.charAt(decimalNumber -1) + spanValue.find(/\.[0-9]+/);
*/

    while ((spanValue[spanValue.indexOf("0")+1] == "0" ||
    spanValue[spanValue.indexOf("0")+1] == "1" || spanValue[spanValue.indexOf("0")+1] == "2" || spanValue[spanValue.indexOf("0")+1] == "3" ||
    spanValue[spanValue.indexOf("0")+1] == "5" || spanValue[spanValue.indexOf("0")+1] == "6" || spanValue[spanValue.indexOf("0")+1] == "7" ||
    spanValue[spanValue.indexOf("0")+1] == "8" || spanValue[spanValue.indexOf("0")+1] == "9")|| 
    
    (spanValue[spanValue.indexOf("1")+1] == "0" || 
    spanValue[spanValue.indexOf("1")+1] == "1" || spanValue[spanValue.indexOf("1")+1] == "2" || spanValue[spanValue.indexOf("1")+1] == "3" ||
    spanValue[spanValue.indexOf("1")+1] == "5" || spanValue[spanValue.indexOf("1")+1] == "6" || spanValue[spanValue.indexOf("1")+1] == "7" ||
    spanValue[spanValue.indexOf("1")+1] == "8" || spanValue[spanValue.indexOf("1")+1] == "9") ||

    (spanValue[spanValue.indexOf("2")+1] == "0" || spanValue[spanValue.indexOf("2")+1] == "1" || spanValue[spanValue.indexOf("2")+1] == "2" || spanValue[spanValue.indexOf("2")+1] == "3" ||
    spanValue[spanValue.indexOf("2")+1] == "5" || spanValue[spanValue.indexOf("2")+1] == "6" || spanValue[spanValue.indexOf("2")+1] == "7" ||
    spanValue[spanValue.indexOf("2")+1] == "8" || spanValue[spanValue.indexOf("2")+1] == "9") ||
        
    (spanValue[spanValue.indexOf("3")+1] == "0" || spanValue[spanValue.indexOf("3")+1] == "1" || spanValue[spanValue.indexOf("3")+1] == "2" || spanValue[spanValue.indexOf("3")+1] == "3" ||
    spanValue[spanValue.indexOf("3")+1] == "5" || spanValue[spanValue.indexOf("3")+1] == "6" || spanValue[spanValue.indexOf("3")+1] == "7" ||
    spanValue[spanValue.indexOf("3")+1] == "8" || spanValue[spanValue.indexOf("3")+1] == "9") ||

        (spanValue[spanValue.indexOf("4")+1] == "0" || spanValue[spanValue.indexOf("4")+1] == "1" || spanValue[spanValue.indexOf("4")+1] == "2" || spanValue[spanValue.indexOf("4")+1] == "3" ||
        spanValue[spanValue.indexOf("4")+1] == "5" || spanValue[spanValue.indexOf("4")+1] == "6" || spanValue[spanValue.indexOf("4")+1] == "7" ||
        spanValue[spanValue.indexOf("4")+1] == "8" || spanValue[spanValue.indexOf("4")+1] == "9") ||
        
        (spanValue[spanValue.indexOf("5")+1] == "0" || spanValue[spanValue.indexOf("5")+1] == "1" || spanValue[spanValue.indexOf("5")+1] == "2" || spanValue[spanValue.indexOf("5")+1] == "3" ||
        spanValue[spanValue.indexOf("5")+1] == "5" || spanValue[spanValue.indexOf("5")+1] == "6" || spanValue[spanValue.indexOf("5")+1] == "7" ||
        spanValue[spanValue.indexOf("5")+1] == "8" || spanValue[spanValue.indexOf("5")+1] == "9") ||


        (spanValue[spanValue.indexOf("6")+1] == "0" || spanValue[spanValue.indexOf("6")+1] == "1" || spanValue[spanValue.indexOf("6")+1] == "2" || spanValue[spanValue.indexOf("6")+1] == "3" ||
        spanValue[spanValue.indexOf("6")+1] == "5" || spanValue[spanValue.indexOf("6")+1] == "6" || spanValue[spanValue.indexOf("6")+1] == "7" ||
        spanValue[spanValue.indexOf("6")+1] == "8" || spanValue[spanValue.indexOf("6")+1] == "9") ||
        
        (spanValue[spanValue.indexOf("7")+1] == "0" || spanValue[spanValue.indexOf("7")+1] == "1" || spanValue[spanValue.indexOf("7")+1] == "2" || spanValue[spanValue.indexOf("7")+1] == "3" ||
        spanValue[spanValue.indexOf("7")+1] == "5" || spanValue[spanValue.indexOf("7")+1] == "6" || spanValue[spanValue.indexOf("7")+1] == "7" ||
        spanValue[spanValue.indexOf("7")+1] == "8" || spanValue[spanValue.indexOf("7")+1] == "9") ||


        (spanValue[spanValue.indexOf("8")+1] == "0" || spanValue[spanValue.indexOf("8")+1] == "1" || spanValue[spanValue.indexOf("8")+1] == "2" || spanValue[spanValue.indexOf("8")+1] == "3" ||
        spanValue[spanValue.indexOf("8")+1] == "5" || spanValue[spanValue.indexOf("8")+1] == "6" || spanValue[spanValue.indexOf("8")+1] == "7" ||
        spanValue[spanValue.indexOf("8")+1] == "8" || spanValue[spanValue.indexOf("8")+1] == "9") ||
        
        (spanValue[spanValue.indexOf("9")+1] == "0" || spanValue[spanValue.indexOf("9")+1] == "1" || spanValue[spanValue.indexOf("9")+1] == "2" || spanValue[spanValue.indexOf("9")+1] == "3" ||
        spanValue[spanValue.indexOf("9")+1] == "5" || spanValue[spanValue.indexOf("9")+1] == "6" || spanValue[spanValue.indexOf("9")+1] == "7" ||
        spanValue[spanValue.indexOf("9")+1] == "8" || spanValue[spanValue.indexOf("9")+1] == "9") ||


        (spanValue[spanValue.indexOf(".")+1] == "0" ||  spanValue[spanValue.indexOf(".")+1] == "1" || spanValue[spanValue.indexOf(".")+1] == "2" || spanValue[spanValue.indexOf(".")+1] == "3" ||
        spanValue[spanValue.indexOf(".")+1] == "5" || spanValue[spanValue.indexOf(".")+1] == "6" || spanValue[spanValue.indexOf(".")+1] == "7" ||
        spanValue[spanValue.indexOf(".")+1] == "8" || spanValue[spanValue.indexOf(".")+1] == "9") ||
        
        (spanValue[spanValue.indexOf(".")-1] == "0" || spanValue[spanValue.indexOf(".")+1] == "1" || spanValue[spanValue.indexOf(".")+1] == "2" || spanValue[spanValue.indexOf(".")+1] == "3" ||
        spanValue[spanValue.indexOf(".")+1] == "5" || spanValue[spanValue.indexOf(".")+1] == "6" || spanValue[spanValue.indexOf(".")+1] == "7" ||
        spanValue[spanValue.indexOf(".")+1] == "8" || spanValue[spanValue.indexOf(".")+1] == "9")){

        if ((spanValue.includes(".") && spanValue[spanValue.indexOf(".") - 1] == null) && (spanValue[spanValue.indexOf(".")+1] == "0" ||
            spanValue[spanValue.indexOf(".")+1] == "1" || spanValue[spanValue.indexOf(".")+1] == "2" || spanValue[spanValue.indexOf(".")+1] == "3" ||
            spanValue[spanValue.indexOf(".")+1] == "5" || spanValue[spanValue.indexOf(".")+1] == "6" || spanValue[spanValue.indexOf(".")+1] == "7" ||
            spanValue[spanValue.indexOf(".")+1] == "8" || spanValue[spanValue.indexOf(".")+1] == "9")){
            spanValue.splice(0, 2, cat(spanValue[spanValue.indexOf(".")], spanValue[spanValue.indexOf(".") +1]));
            console.log(spanValue);
        }

        else if ((spanValue.includes(".")) && (spanValue[spanValue.indexOf(".")-1] == "0" ||
            spanValue[spanValue.indexOf(".")-1] == "1" || spanValue[spanValue.indexOf(".")-1] == "2" || spanValue[spanValue.indexOf(".")-1] == "3" ||
            spanValue[spanValue.indexOf(".")-1] == "5" || spanValue[spanValue.indexOf(".")-1] == "6" || spanValue[spanValue.indexOf(".")-1] == "7" ||
            spanValue[spanValue.indexOf(".")-1] == "8" || spanValue[spanValue.indexOf(".")-1] == "9" )){
            spanValue.splice(spanValue.indexOf(".")-1, 2, cat(spanValue[spanValue.indexOf(".")-1], spanValue[spanValue.indexOf(".")]));
            console.log(spanValue);
        }

        else if ((spanValue.includes(".")) && (spanValue[spanValue.indexOf(".")+1] == "0" ||
            spanValue[spanValue.indexOf(".")+1] == "1" || spanValue[spanValue.indexOf(".")+1] == "2" || spanValue[spanValue.indexOf(".")+1] == "3" ||
            spanValue[spanValue.indexOf(".")+1] == "5" || spanValue[spanValue.indexOf(".")+1] == "6" || spanValue[spanValue.indexOf(".")+1] == "7" ||
            spanValue[spanValue.indexOf(".")+1] == "8" || spanValue[spanValue.indexOf(".")+1] == "9")){
            spanValue.splice(spanValue.indexOf("."), 2, cat(spanValue[spanValue.indexOf(".")], spanValue[spanValue.indexOf(".") +1]));
            console.log(spanValue);
        }

        else if ((spanValue.reIndexOf(/\.[0-9]+/) > -1) && (spanValue[spanValue.reIndexOf(/\.[0-9]+/) -1] == "0" || spanValue[spanValue.reIndexOf(/\.[0-9]+/) -1] == "1" ||
            spanValue[spanValue.reIndexOf(/\.[0-9]+/) -1] == "2" || spanValue[spanValue.reIndexOf(/\.[0-9]+/) -1] == "3" || spanValue[spanValue.reIndexOf(/\.[0-9]+/) -1] == "4" ||
            spanValue[spanValue.reIndexOf(/\.[0-9]+/) -1] == "5" || spanValue[spanValue.reIndexOf(/\.[0-9]+/) -1] == "6" || spanValue[spanValue.reIndexOf(/\.[0-9]+/) -1] == "7" ||
            spanValue[spanValue.reIndexOf(/\.[0-9]+/) -1] == "8" || spanValue[spanValue.reIndexOf(/\.[0-9]+/) -1] == "9")) {
            spanValue.splice(spanValue.reIndexOf(/\.[0-9]+/) -1, 2, cat(spanValue[spanValue.reIndexOf(/\.[0-9]+/)-1], 
            spanValue[spanValue.reIndexOf(/\.[0-9]+/)]));
            console.log(spanValue);
        }
    
        else if ((spanValue.reIndexOf(/\.[0-9]+/) > -1) && (spanValue[spanValue.reIndexOf(/\.[0-9]+/) +1] == "0" || spanValue[spanValue.reIndexOf(/\.[0-9]+/) +1] == "2" || 
            spanValue[spanValue.reIndexOf(/\.[0-9]+/) +1] == "3" || spanValue[spanValue.reIndexOf(/\.[0-9]+/) +1] == "4" || spanValue[spanValue.reIndexOf(/\.[0-9]+/) +1] == "5" ||
            spanValue[spanValue.reIndexOf(/\.[0-9]+/) +1] == "6" || spanValue[spanValue.reIndexOf(/\.[0-9]+/) +1] == "7" || spanValue[spanValue.reIndexOf(/\.[0-9]+/) +1] == "8" ||
            spanValue[spanValue.reIndexOf(/\.[0-9]+/) +1] == "9")) {
            spanValue.splice(spanValue.reIndexOf(/\.[0-9]+/), 2, cat(spanValue[spanValue.reIndexOf(/\.[0-9]+/)], 
            spanValue[spanValue.reIndexOf(/\.[0-9]+/)+1]));
            console.log(spanValue);
        }
    
        else if ((spanValue.reIndexOf(/[0-9]+\.[0-9]+/) > -1) && (spanValue[spanValue.reIndexOf(/[0-9]+\.[0-9]+/) -1] == "0" || spanValue[spanValue.reIndexOf(/[0-9]+\.[0-9]+/) -1] == "1" ||
            spanValue[spanValue.reIndexOf(/[0-9]+\.[0-9]+/) -1] == "2" || spanValue[spanValue.reIndexOf(/[0-9]+\.[0-9]+/) -1] == "3" || spanValue[spanValue.reIndexOf(/[0-9]+\.[0-9]+/) -1] == "4" ||
            spanValue[spanValue.reIndexOf(/[0-9]+\.[0-9]+/) -1] == "5" || spanValue[spanValue.reIndexOf(/[0-9]+\.[0-9]+/) -1] == "6" || spanValue[spanValue.reIndexOf(/[0-9]+\.[0-9]+/) -1] == "7" ||
            spanValue[spanValue.reIndexOf(/[0-9]+\.[0-9]+/) -1] == "8" || spanValue[spanValue.reIndexOf(/[0-9]+\.[0-9]+/) -1] == "9")){
            spanValue.splice(spanValue.reIndexOf(/[0-9]+\.[0-9]+/) -1, 2, cat(spanValue[spanValue.reIndexOf(/[0-9]+\.[0-9]+/)-1], 
            spanValue[spanValue.reIndexOf(/[0-9]+\.[0-9]+/)]));
            console.log(spanValue);
        }
    
        else if ((spanValue.reIndexOf(/[0-9]+\.[0-9]+/) > -1) && (spanValue[spanValue.reIndexOf(/[0-9]+\.[0-9]+/) +1] == "0" || spanValue[spanValue.reIndexOf(/[0-9]+\.[0-9]+/) +1] == "1" ||
            spanValue[spanValue.reIndexOf(/[0-9]+\.[0-9]+/) +1] == "2" || spanValue[spanValue.reIndexOf(/[0-9]+\.[0-9]+/) +1] == "3" || spanValue[spanValue.reIndexOf(/[0-9]+\.[0-9]+/) +1] == "4" ||
            spanValue[spanValue.reIndexOf(/[0-9]+\.[0-9]+/) +1] == "5" || spanValue[spanValue.reIndexOf(/[0-9]+\.[0-9]+/) +1] == "6" || spanValue[spanValue.reIndexOf(/[0-9]+\.[0-9]+/) +1] == "7" ||
            spanValue[spanValue.reIndexOf(/[0-9]+\.[0-9]+/) +1] == "8" || spanValue[spanValue.reIndexOf(/[0-9]+\.[0-9]+/) +1] == "9")) {
            spanValue.splice(spanValue.reIndexOf(/[0-9]+\.[0-9]+/), 2, cat(spanValue[spanValue.reIndexOf(/[0-9]+\.[0-9]+/)], 
            spanValue[spanValue.reIndexOf(/[0-9]+\.[0-9]+/)+1]));
            console.log(spanValue);
        }
    
        else if ((spanValue.reIndexOf(/[0-9]+/) > -1) && (spanValue[spanValue.reIndexOf(/[0-9]+/)-1] == "0" || spanValue[spanValue.reIndexOf(/[0-9]+/)-1] == "1" ||
            spanValue[spanValue.reIndexOf(/[0-9]+/)-1] == "2" || spanValue[spanValue.reIndexOf(/[0-9]+/)-1] == "3" || spanValue[spanValue.reIndexOf(/[0-9]+/)-1] == "4" ||
            spanValue[spanValue.reIndexOf(/[0-9]+/)-1] == "5" || spanValue[spanValue.reIndexOf(/[0-9]+/)-1] == "6" || spanValue[spanValue.reIndexOf(/[0-9]+/)-1] == "7" ||
            spanValue[spanValue.reIndexOf(/[0-9]+/)-1] == "8" || spanValue[spanValue.reIndexOf(/[0-9]+/)-1] == "9")){
            spanValue.splice(spanValue.reIndexOf(/[0-9]+/) -1, 2, cat(spanValue[spanValue.reIndexOf(/[0-9]+/)-1], 
            spanValue[spanValue.reIndexOf(/[0-9]+/)]));
            console.log(spanValue);
        }

        else if ((spanValue.reIndexOf(/[0-9]+/) > -1) && (spanValue[spanValue.reIndexOf(/[0-9]+/)+1] == "0" || spanValue[spanValue.reIndexOf(/[0-9]+/)+1] == "1" ||
            spanValue[spanValue.reIndexOf(/[0-9]+/)+1] == "2" || spanValue[spanValue.reIndexOf(/[0-9]+/)+1] == "3" || spanValue[spanValue.reIndexOf(/[0-9]+/)+1] == "4" ||
            spanValue[spanValue.reIndexOf(/[0-9]+/)+1] == "5" || spanValue[spanValue.reIndexOf(/[0-9]+/)+1] == "6" || spanValue[spanValue.reIndexOf(/[0-9]+/)+1] == "7" ||
            spanValue[spanValue.reIndexOf(/[0-9]+/)+1] == "8" || spanValue[spanValue.reIndexOf(/[0-9]+/)+1] == "9")){
            spanValue.splice(spanValue.reIndexOf(/[0-9]+/), 2, cat(spanValue[spanValue.reIndexOf(/[0-9]+/)], 
            spanValue[spanValue.reIndexOf(/[0-9]+/)]+1));
            console.log(spanValue);
        }
    }
}
        

/*
        else if (spanValue.search(/[0-9]\.[0-9]/) > -1) {
            spanValue.splice(spanValue[spanValue.indexOf(".")-1], 2, cat(spanValue[spanValue.indexOf(".")], spanValue[spanValue.indexOf(".") -1]));
        }
*/
    


/*function operationStation(){
//
    convertSpanValue();
    console.log("Hope this works");
*/
   /* let aString = spanValue.toString();
    console.log(aString);
    */
 /*   
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
            console.log(splitStringFiltered[splitStringFiltered.indexOf("/")+1]);
            display.innerHTML = "Undefined";
            break;
        }
        else if (splitStringFiltered.includes("-") && 
            splitStringFiltered[splitStringFiltered.lastIndexOf("-") - 1] == "-" &&
            splitStringFiltered[splitStringFiltered.lastIndexOf("-") - 2] == "-") {
            splitStringFiltered.splice(splitStringFiltered.lastIndexOf("-")-1, 2);
            display.innerHTML = splitStringFiltered;
            console.log(splitStringFiltered);
        }
        else if (splitStringFiltered.includes("-") && 
            splitStringFiltered[splitStringFiltered.lastIndexOf("-") - 1] == null) {
            splitStringFiltered.splice(splitStringFiltered.indexOf("-"), 2, 
            cat(splitStringFiltered[splitStringFiltered.indexOf("-")], 
            splitStringFiltered[splitStringFiltered.indexOf("-")+1])); 
            display.innerHTML = splitStringFiltered;
            console.log(splitStringFiltered);
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
            console.log(splitStringFiltered);
        }
       else if (splitStringFiltered.includes("-") && 
            splitStringFiltered[splitStringFiltered.lastIndexOf("-") - 1] === "-" && 
            splitStringFiltered[splitStringFiltered.lastIndexOf("-") - 2] != "-"){
            splitStringFiltered.splice(splitStringFiltered.lastIndexOf("-")-1, 2, "+"); 
            display.innerHTML = splitStringFiltered;
            console.log(splitStringFiltered);
        }
        else if (splitStringFiltered.includes("+") && 
            splitStringFiltered[splitStringFiltered.lastIndexOf("+") - 1] == "+"){
            splitStringFiltered.splice(splitStringFiltered.lastIndexOf("+")-1, 2, "+");
            display.innerHTML = splitStringFiltered;
            console.log(splitStringFiltered);
        }
        else if (splitStringFiltered.includes("+") && 
            splitStringFiltered[splitStringFiltered.lastIndexOf("+") - 1] == null){
            splitStringFiltered.splice(splitStringFiltered.indexOf("+"), 1,)
            display.innerHTML = splitStringFiltered;
            console.log(splitStringFiltered);
        }
        else if (splitStringFiltered.includes("√") && 
            splitStringFiltered[splitStringFiltered.indexOf("√")-1] != null && 
            splitStringFiltered[splitStringFiltered.indexOf("√")-1] != "+" && 
            splitStringFiltered[splitStringFiltered.indexOf("√")-1] != "-" && 
            splitStringFiltered[splitStringFiltered.indexOf("√")-1] != "/" && 
            splitStringFiltered[splitStringFiltered.indexOf("√")-1] != "*"){
            splitStringFiltered.splice(splitStringFiltered.indexOf("√"), 0, "*")
            display.innerHTML = splitStringFiltered;
            console.log(splitStringFiltered);
        }
        else if (splitStringFiltered.includes("√")){ 
            splitStringFiltered.splice(splitStringFiltered.indexOf("√"), 2, 
            rt(splitStringFiltered[splitStringFiltered.indexOf("√")+1])); 
            display.innerHTML = splitStringFiltered;
            console.log(splitStringFiltered);
        }
        else if (splitStringFiltered.includes("*") && splitStringFiltered.includes ("/") && 
            splitStringFiltered.indexOf("*") < splitStringFiltered.indexOf("/")) {
            splitStringFiltered.splice(splitStringFiltered.indexOf("*")- 1, 3, 
            multiplication(splitStringFiltered[splitStringFiltered.indexOf("*")-1], 
            splitStringFiltered[splitStringFiltered.indexOf("*")+1])); 
            display.innerHTML = splitStringFiltered;
            console.log(splitStringFiltered);
        }
       else if (splitStringFiltered.includes("*") && splitStringFiltered.includes ("/") && 
            splitStringFiltered.indexOf("*") > splitStringFiltered.indexOf("/")) {
            splitStringFiltered.splice(splitStringFiltered.indexOf("/")- 1, 3, 
            division(splitStringFiltered[splitStringFiltered.indexOf("/")-1], 
            splitStringFiltered[splitStringFiltered.indexOf("/")+1])); 
            display.innerHTML = splitStringFiltered;
            console.log(splitStringFiltered);
        }
        else if (splitStringFiltered.includes("*")) {
            splitStringFiltered.splice(splitStringFiltered.indexOf("*") -1, 3, 
            multiplication(splitStringFiltered[splitStringFiltered.indexOf("*")-1], 
            splitStringFiltered[splitStringFiltered.indexOf("*")+1])); 
            display.innerHTML = splitStringFiltered;
            console.log(splitStringFiltered);
        }
       else if (splitStringFiltered.includes("/")) {
            splitStringFiltered.splice(splitStringFiltered.indexOf("/") - 1, 3, 
            division(splitStringFiltered[splitStringFiltered.indexOf("/")-1], 
            splitStringFiltered[splitStringFiltered.indexOf("/")+1])); 
            display.innerHTML = splitStringFiltered;
            console.log(splitStringFiltered);
        }
        else if (splitStringFiltered.includes("+") && splitStringFiltered.includes ("-") && 
            splitStringFiltered.indexOf("+") < splitStringFiltered.indexOf("-")) {
            splitStringFiltered.splice(splitStringFiltered.indexOf("+") - 1, 3, 
            addition(splitStringFiltered[splitStringFiltered.indexOf("+")-1], 
            splitStringFiltered[splitStringFiltered.indexOf("+")+1])); 
            display.innerHTML = splitStringFiltered;
            console.log(splitStringFiltered);
        }
        else if (splitStringFiltered.includes("+") && splitStringFiltered.includes ("-") && 
            splitStringFiltered.indexOf("+") > splitStringFiltered.indexOf("-")) {
            splitStringFiltered.splice(splitStringFiltered.indexOf("-") - 1, 3, 
            subtraction(splitStringFiltered[splitStringFiltered.indexOf("-")-1], 
            splitStringFiltered[splitStringFiltered.indexOf("-")+1])); 
            display.innerHTML = splitStringFiltered;
            console.log(splitStringFiltered);
        }
        else if (splitStringFiltered.includes("+")) {
            splitStringFiltered.splice(splitStringFiltered.indexOf("+") - 1, 3, 
            addition(splitStringFiltered[splitStringFiltered.indexOf("+")-1], 
            splitStringFiltered[splitStringFiltered.indexOf("+")+1])); 
            display.innerHTML = splitStringFiltered;
            console.log(splitStringFiltered);
        }
        else if (splitStringFiltered.includes("-")) {
            splitStringFiltered.splice(splitStringFiltered.indexOf("-") - 1, 3, 
            subtraction(splitStringFiltered[splitStringFiltered.indexOf("-")-1], 
            splitStringFiltered[splitStringFiltered.indexOf("-")+1]));
            display.innerHTML = splitStringFiltered;
            console.log(splitStringFiltered);
        }
    }
}
*/
//}
equals.addEventListener("click", function(e){
    if (spanValue.length <= 0) {
        alert ("You cannot begin an operation with =.")
    }
    /*else if (spanValue.endsWith(" ") === true) {
        alert("= can only be used after a full expression is entered.");
    }
    */
    else {
        convertSpanValue();
        console.log(spanValue);
        //operationStation();
        console.log("did it work?")
        //updateArray();
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

/*

let dotSpan = document.createElement("span");
dotSpan;
display.appendChild(dotSpan);
dotSpan.innerHTML = ".";
display.innerHTML += dotSpan.innerHTML;
//

spanValue.push(newSpan.innerHTML);
spanValue.splice(0, 1);
console.log(spanValue);
*/

/*let commaTime = display.innerHTML.match(/\d{3}/g);

let commaDown =  commaTime.forEach().splice(0,0,",");
*/

//if display.innerHTML.includes("")