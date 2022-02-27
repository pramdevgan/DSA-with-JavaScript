                                    /*
Use the Spread Operator to Evaluate Arrays In-Place
ES6 introduces the spread operator, which allows us to expand arrays 
and other expressions in places where multiple parameters or elements are expected.

The ES5 code below uses apply() to compute the maximum value in an array:
                                    */


var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
console.log("Max is " + maximus);
// maximus would have a value of 89.

                                    /*
We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() 
expects comma-separated arguments, but not an array. 
The spread operator makes this syntax much better to read and maintain.
                                    */

const arr1 = [6,89, 3, 45]; // change arr1 to arr
const maximus1 = Math.max(...arr1); // change maximus1 to maximus
console.log("Max is " + maximus1);

                                    /*
...arr returns an unpacked array. 
In other words, it spreads the array. 
However, the spread operator only works in-place, 
like in an argument to a function or in an array literal. 
The following code will not work:
                                    */
// const spreaded = ...arr;

                                    /*
                                Question:
Copy all contents of arr1 into another array arr2 using the spread operator.
                                    */ 

const arr2 = ['JAN', 'FAB', 'MAR', 'APR', 'MAY'];
let arr3;
arr3 =[...arr2];
console.log(arr3);

