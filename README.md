# Unexpected String Concatenation Bug in JavaScript

This repository demonstrates a common, yet subtle, bug in JavaScript involving unexpected string concatenation.  The `foo` function is designed to add numbers, but it inadvertently concatenates strings when given string inputs. This highlights the importance of type checking in JavaScript.

## Bug Description

The `bug.js` file contains a JavaScript function that performs addition. However, if the inputs are strings, the function concatenates them instead of performing numerical addition. 

## Solution

The `bugSolution.js` file provides a corrected version of the function that explicitly checks the type of the inputs and handles them appropriately.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` in your favorite code editor.
3. Run the code in a JavaScript environment (e.g., Node.js, browser console).
4. Observe that the function concatenates strings instead of adding numbers when the inputs are strings.
5. Compare the output with the corrected behavior in `bugSolution.js`.