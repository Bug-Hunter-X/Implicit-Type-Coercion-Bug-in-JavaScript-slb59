# Implicit Type Coercion Bug in JavaScript

This repository demonstrates a common JavaScript bug related to implicit type coercion. The function `foo` unexpectedly concatenates a number and a string due to JavaScript's loose typing.  This can lead to unexpected behavior and errors in applications if not handled correctly.

## Bug

The `bug.js` file contains the buggy code.  The function `foo` attempts to add a number and a string.  Instead of throwing an error (as might happen in a statically typed language), JavaScript implicitly coerces the number to a string and performs string concatenation.

## Solution

The `bugSolution.js` file demonstrates a solution.  This version includes explicit type checking using `typeof` to ensure both inputs are numbers. If they aren't, it either throws an error or converts the inputs to numbers using `parseInt` and handles potential `NaN` outputs. 

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js` to see the buggy behavior.
3. Run `node bugSolution.js` to see the corrected behavior.