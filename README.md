# Calculator

A simple calculator built using HTML, CSS, and JavaScript, implementing basic arithmetic functions with extra features for an enhanced user experience. This project includes additional functionalities like decimal input, keyboard support, and a backspace option.

## Features

- **Basic Arithmetic Operations**: 
  - Addition, subtraction, multiplication, and division.
  
- **Chained Operations**: 
  - Perform consecutive calculations, where the result of one operation is used in the next.
  
- **Display**: 
  - Shows the current number input and results after each calculation.
  
- **Clear Button**: 
  - Resets the calculator, clearing the display and any stored values.
  
- **Decimal Input**: 
  - Allows the user to input decimal numbers, while preventing multiple decimal points in a single number.
  
- **Backspace Functionality**: 
  - A backspace button to delete the last digit or decimal point in the display.

- **Keyboard Support**: 
  - Operate the calculator using the keyboard for a seamless experience.

- **Error Handling**: 
  - Prevents division by zero with a snarky error message instead of crashing.

## Extra Credit Features

- **Decimal Point Input**: 
  - Users can input floating-point numbers by pressing the decimal button, and it ensures that only one decimal point is added.
  
- **Keyboard Support**: 
  - Users can perform all operations via the keyboard, enhancing usability.
  
- **Backspace Button**: 
  - Added the ability to delete the last input number or operator.
  
- **Stylish Design**: 
  - Improved the user interface by differentiating the operation buttons from the number buttons using CSS.

## How to Use

1. Click the buttons or use your keyboard to input numbers and operations.
2. Press the `=` button or the `Enter` key to evaluate the expression.
3. Use the `Clear` button to reset the calculator.
4. The `Backspace` button (or backspace key on the keyboard) removes the last character in the display.
5. Decimal numbers are allowed with the `.` button or period key, but only one decimal point per number.

## Known Gotchas

- Only two numbers are evaluated at a time. If you chain operations, the result of the previous operation is used in the next calculation.
- The calculator rounds results to prevent overflow on the display.
- Trying to divide by zero shows an error message.

## Technologies Used

- **HTML**
- **CSS**
- **JavaScript**

## Getting Started

1. Open the link below in your browser:
   ```bash
   https://barakshamailov.github.io/Calculator/
