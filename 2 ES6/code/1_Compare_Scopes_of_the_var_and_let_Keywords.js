                                /*
            Compare Scopes of the var and let Keywords
If you are unfamiliar with let, check out this challenge.

When you declare a variable with the var keyword, it is declared globally, 
or locally if declared inside a function.

The let keyword behaves similarly, but with some extra features. 
When you declare a variable with the let keyword inside a block, statement, or expression, 
its scope is limited to that block, statement, or expression.
                                */

// For example

var numArray = [];
for (var i = 0; i < 3; i++) {
    numArray.push(i);
}
console.log(numArray);
console.log(i);

                                    /*
Here the console will display the values [0, 1, 2] and 3.

With the var keyword, i is declared globally. 
So when i++ is executed, it updates the global variable. 
This code is similar to the following:
                                    */

var numArray = [];
var i;

for (i = 0; i < 3; i++) {
    numArray.push(i);
}
console.log(numArray);
console.log(i);

// Here the console will display the values [0, 1, 2] and 3.

var printNumTwo;
for (i = 0; i < 3; i++) {
    if( i === 2){
        printNumTwo = function(){
            return i;
        }
    }
}
console.log(printNumTwo());
// Here the console will display the value 3.
                                /*
As you can see, printNumTwo() prints 3 and not 2. 
This is because the value assigned to i was updated 
and the printNumTwo() returns the global i 
and not the value i had when the function was created in the for loop. 
The let keyword does not follow this behavior:
                                */

        // change below code to detect error
                /*
console.log("After Using let keyword:")
let printNumTwo1; // change printNumTwo1 to printNumTwo
for (let i1 = 0; i2 < 3; i2++) { // change i2 to i
    if (i2 === 2){
        printNumTwo1 = function(){
            return i2;
        };
    }
}
console.log(printNumTwo1());
console.log(i2);
                */
                                        /*
Here the console will display the value 2, and an error that i is not defined.

i is not defined because it was not declared in the global scope. 
It is only declared within the for loop statement. 
printNumTwo() returned the correct value because three different i variables 
with unique values (0, 1, and 2) were created by the let keyword 
within the loop statement.
                                        */

                                        /*
                                    Question
Fix the code so that i declared in the if statement is a separate variable 
than i declared in the first line of the function. Be certain not to use the var keyword anywhere in your code.

This exercise is designed to illustrate the difference between how var and let keywords assign scope to the declared variable. 
When programming a function similar to the one used in this exercise, it is often better to use different variable names to avoid confusion.
                                        */
                                // Answer

let i;
function checkScope() {
    i = 'function scope';
    if (true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}
