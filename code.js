
let items = []
let nums = [];
let operators = ['+', '-', 'x', '/']
let equalDone = false;

function negativePositive() {
    if (nums[0] === "-") {
        nums.shift("-");
    } else {
        nums.unshift("-");
    }
    document.getElementById("display").value = nums.join("");
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        throw new Error("Cannot divide by zero!");
    }
    return num1 / num2;
}

function isDigit(str) {
    return !isNaN(str) && !isNaN(parseFloat(str));
}

function operate(num1, operator, num2) {

    if (operator === "+") {
        return add(num1, num2);
    }
    if (operator === "-") {
        return subtract(num1, num2);
    }
    if (operator === "x") {
        return multiply(num1, num2);
    }
    if (operator === "/") {
        return divide(num1, num2);
    }
}

function deleteItem() {
    nums.pop();
    document.getElementById("display").value = nums.join("");

}

function clearDisplay() {
    document.getElementById('display').value = "";
    items = [];
    nums = [];
}

function operatorClicked(operatorBtn) {


    items.push(nums.join(""), operatorBtn.textContent);
    nums = [];
}

function convertToFloat(num1,num2,operator)
{
    let floatNum1 = parseInt(num1);
    let floatNum2 = parseInt(num2);
    if(num1.includes("."))
    {
        floatNum1 = parseFloat(num1);
    }
    if(num2.includes("."))
    {
        floatNum2 = parseFloat(num2);
    }
    try{
        return operate(floatNum1,operator,floatNum2);
    }
    catch(error)
    {
        throw error;
    }
}

function displayResult() {
    items.push(nums.join(""));
    if (items.length === 1 && items[0] === "") {
        document.getElementById('display').value = 0;
    }
    let result = 0; 
    if (items.length === 3 && isDigit(items[0]) && isDigit(items[2]) && operators.includes(items[1])) {
        try {
            if(items[0].includes(".") || items[2].includes("."))
            {
                result = convertToFloat(items[0],items[2],items[1]);
               
            }
            else{
                
                    result = operate(parseInt(items[0]), items[1], parseInt(items[2]));
            }
            document.getElementById('display').value = parseFloat(result.toFixed(5));
            nums = [result];
            items = [];
            equalDone = true;
        }
         catch (error) {
                // Code to handle the error
                alert(error.message);
                clearDisplay();
            }
        }
    else {
        alert("Your input is invalid, please try again in this order: 2 + 3 and then press on '='.");
        clearDisplay();
    }

}


function displayText(button) {
    if (equalDone) {
        nums = []
        document.getElementById('display').value = button.textContent;
        equalDone = false;
    }
    
    if(!nums.includes(".") && button.textContent === "."){
        nums.push(button.textContent);
    }
    else if(!nums.includes(".") && button.textContent !== ".")
    {
        nums.push(button.textContent);
    }
    else if(nums.includes(".") && button.textContent !== ".")
    {
        nums.push(button.textContent);
    }
    document.getElementById('display').value = nums.join("");
}