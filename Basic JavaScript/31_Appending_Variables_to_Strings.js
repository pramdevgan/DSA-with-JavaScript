                                    /*
                    Appending Variables to Strings
Just as we can build a string over multiple lines out of string literals, 
we can also append variables to a string using the plus equals (+=) operator.
                                    */
// Example:
// chnage myStr4 to myStr

const anAdjective = "awesome!";
let ourStr4 = "freeCodeCamp is ";
ourStr4 += anAdjective;

console.log(ourStr4);

// ourStr would have the value freeCodeCamp is awesome!.

                                        /*
Set someAdjective to a string of at least 3 characters 
and append it to myStr using the += operator.
                                        */

const someAdjective = "best";
let myStr7 = "Learning to code is ";
myStr7 += someAdjective;
console.log(myStr7);