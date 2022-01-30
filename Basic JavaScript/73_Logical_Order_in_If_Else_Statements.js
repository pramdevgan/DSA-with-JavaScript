                                    /*
                Logical Order in If Else Statements

Order is important in if, else if statements.

The function is executed from top to bottom so you will want to be careful of what statement comes first.

Take these two functions as an example.
                                    */

// Here's the first:
function foo(x) {
    if (x < 1){
        return "Less than one";
    }
    else if (x < 2){
        return "Less than two";
    }
    else{
        return "Greater than or equal to two";
    }
}

// And the second just the order of the statement:
function bar(x) {
    if (x < 2){
        return "Less than two";
    }
    else if (x < 1){
        return "Less than one";
    }
    else{
        return "Greater than or equal to"
    }
}

// While these two functions look nearly dentical if we pass a number to both get different outputs.

console.log(foo(0));
console.log(bar(0));

// foo(0) will return the string Less than one, and 
// bar(0) will return the string Less than two.


// Change the order of logic in the function so that it will return the correct statements in all cases.

function orderMyLogic(val) {
    if(val < 5) {
        return "Less than 5";
    }
    else if (val < 10) {
        return "Less than 10";
    }
    else {
        return "Greater than or equal to 10";
    }
}

console.log(orderMyLogic(7));
console.log(orderMyLogic(4));
console.log(orderMyLogic(6));
console.log(orderMyLogic(10));