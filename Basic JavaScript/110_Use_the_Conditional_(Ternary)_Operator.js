                                    /*
                    Use the Conditional (Ternary) Operator
The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

The syntax is a ? b : c, where a is the condition, 
b is the code to run when the condition returns true, and c is the code to run when the condition returns false.

The following function uses an if/else statement to check a condition:
                                    */

function findGreater(a, b) {
    if(a > b) {
        return "a is greater";
    }
        else {
        return "b is greater or equal";
    }
}
console.log(findGreater(10,9));

// This can be re-written using the conditional operator:

function findGreater(a,b) {
    return a > b ? "a is greater" : "b is greater";
}
console.log(findGreater(7,9));

                                    /*
                                Question
Use the conditional operator in the checkEqual function to check if two numbers are equal or not. 
The function should return either the string Equal or the string Not Equal.
                                    */
function checkEqual(a,b) {
    return a == b ? "Equal" : "Not Equal";
}

console.log(checkEqual(1,2));
console.log(checkEqual(1,1));
console.log(checkEqual(1,-1));
