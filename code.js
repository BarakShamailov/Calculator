
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



function displayResult() {
    items.push(nums.join(""));
    if (items.length === 1 && items[0] === "") {
        document.getElementById('display').value = 0;
    }
    if (items.length === 3 && isDigit(items[0]) && isDigit(items[2]) && operators.includes(items[1])) {
        try {
            let result = operate(parseInt(items[0]), items[1], parseInt(items[2]));
            document.getElementById('display').value = result;
            nums = [result];
            items = [];
            equalDone = true;
        } catch (error) {
            // Code to handle the error
            alert(error.message);
            clearDisplay();

        }
    } else {
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
    let buttonText = button.textContent;
    // Add the button text to the array
    nums.push(buttonText);
    // Keep only the last 3 items

    // Set the text in the input field
    document.getElementById('display').value = nums.join("");
}