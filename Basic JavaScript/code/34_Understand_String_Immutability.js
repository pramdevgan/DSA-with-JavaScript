                                    /*
                    Understand String Immutability

In JavaScript, String values are immutable, 
which means that they cannot be altered once created.                                    
                                    */

// For example, the following code:

let  myStr = "Bob";
myStr[0] = "J";
console.log(myStr);

                                    /*
cannot change the value of myStr to Job, because the contents of myStr cannot be altered. 
Note that this does not mean that myStr cannot be changed, just that the individual characters of a string literal cannot be changed. 
The only way to change myStr would be to assign it with a new string, like this:                                    
                                    */

// Change myStr Variable to myStr1

let myStr1 = "Bob";
myStr1 = "Job";
console.log(myStr1);

                                    /*
                                Question:
Correct the assignment to myStr so it contains the string value of 
Hello World using the approach shown in the example above.                           
                                    */

                                // Answer
                        // Change the myStr3 variable to myStr
// Setup
let myStr3 = "Jello World";

// Only change code below this line
myStr3 = "Hello World"; // Change this line
// Only change code above this line
console.log(myStr3);