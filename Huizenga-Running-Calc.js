/**
* A running calculator program in Javascript.
*
* @author Jillian Huizenga
* @version CIS 371 Fall 2021
*
* Discussed ideas with Amela Aganovic, but completed assignment 
*	individually.
*/

/** setting up readline */
const readline = require('readline');

/** creates input and output streams */
const rl = readline.createInterface( process.stdin, 
	process.stdout );

/** holds the running calculator total */
let runningTotal = 0.0;

/**
 * Display the current total and prompt the user for an operator.
 */
function chooseOperator(){
	
	console.log("\nCurrent total: " + runningTotal);
	rl.question("\nEnter operation (+-*/, q to quit): ", 
		(op) => {chooseValue(op)});
}

/**
 * Check operator validity and prompt the user for a value.
 * 
 * @param op A chosen operator for calculation.
 */
function chooseValue(op){
	
	if (op == '+' || op == '-' || op == '*' || op == '/'){
		
		rl.question("Enter value: ", 
			(val) => {calculate(op, val)});

	} else if (op == 'q'){
	
		console.log("\nFinal value: " + runningTotal + 
			"\n");
		rl.close();	
	
	} else {
		
		console.log("Invalid operator. Please try again.");
		chooseOperator();
	}
}

/**
 * Calculate new total with valid operator and value.
 * 
 * @param operator A chosen operator for calculation. Must be 
 *		checked for validity before calling function. 
 * @param value A chosen value for calculation.
 */
function calculate(operator, value){
	
	if (isNaN(value)){
		
		console.log("Invalid value. Please try again.");
		chooseOperator();

	} else {

		switch (operator){
		
			case '+':
				runningTotal += parseFloat(value);
				chooseOperator();
				break;

			case '-':
				runningTotal -= value;
				chooseOperator();
				break;

			case '*':
				runningTotal *= value;
				chooseOperator();
				break;

			case '/':
				if (value == 0){
					
					console.log("Unable to divide by zero.");
				
				} else {
					
					runningTotal /= value;
				}
			
				chooseOperator();
				break;
		}
	}
}

// program begins here
rl.question("\nWelcome to Huizenga-Running-Calc.js\n\nCurrent Total: " +
	runningTotal + "\n\nEnter operation (+-*/, q to quit): ", 
	(op) => {chooseValue(op)});

