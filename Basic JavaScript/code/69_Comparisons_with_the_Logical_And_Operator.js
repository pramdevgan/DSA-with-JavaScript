                            /*
        Comparisons with the Logical And Operator

Sometimes you will need to test more than one thing at a time. 
The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.

The same effect could be achieved by nesting an if statement inside another if:
                            */
function demoAndOperator(num) {
    if (num > 5){
        if (num < 10){
            return "Yes";
        }
    }
    return "No";
}

console.log(demoAndOperator(9));
console.log(demoAndOperator(10));

// will only return Yes if num is greater than 5 and less than 10. 
// The same logic can be written as:

function demoAndOperator1(num) {
    if (num >5 && num <10){
        return "Yes";
    }
    return "No";
}

console.log(demoAndOperator1(9));
console.log(demoAndOperator1(10));

                    // Answer
                        /*
Replace the two if statements with one statement, using the && operator, 
which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. 
Otherwise, will return the string No.
                        */
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25){
        return "Yes";
    }
    return "No";
}

console.log(testLogicalAnd(10))