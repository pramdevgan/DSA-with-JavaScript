                                        /*
Use Bracket Notation to Find the First Character in a String
Bracket notation is a way to get a character at a specific index within a string.

Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. 
They start at 0. This is referred to as Zero-based indexing.

For example, the character at index 0 in the word Charles is C. 
So if const firstName = "Charles", you can get the value of the first letter of the string by using firstName[0].                                        
                                        */

// Example

const firstName = "Charles";
const firstLetter = firstName[0];
console.log(firstLetter);

// firstLetter would have a value of the string C.

                                        /*
                                    Question:                                        
Use bracket notation to find the first character in the lastName1 
variable and assign it to firstLetterOfLastName.

Hint: Try looking at the example above if you get stuck.                                        
                                        */
                                    // Answer

// Change the lastName1 variable to lastName 
let firstLetterOfLastName = "";
const lastName1 ="Lovelace";
// Only change code below this line
firstLetterOfLastName = lastName1[0]; // Change this line
console.log(firstLetterOfLastName);