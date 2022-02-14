                                    /*
                Return a Value from a Function with Return

We can pass values into a function with arguments. 
You can use a return statement to send a value back out of a function.                
                                    */

// Example:

function plusThree(num) {
    return num + 3;
  }
const answer = plusThree(5);
console.log(answer);

// answer has the value 8.

// plusThree takes an argument for num and returns a value equal to num + 3.

                                    /*
                                Question:
Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.                               
                                    */
                                // Answer:
function timesFive(mult) {
    return mult * 5; 
  }         

timesFive(5);
timesFive(2);
timesFive(0);