                                    /*
            Use Bracket Notation to Find the Last Character in a String
In order to get the last letter of a string, you can subtract one from the string's length.

For example, if const firstName = "Ada", 
you can get the value of the last letter of the string by using 
firstName[firstName.length - 1].                                    
                                    */

// Example:
    const firstName1 = "Ada";
    const lastLetter1 = firstName1[firstName1.length -1];
    console.log(lastLetter1);

    // lastLetter would have a value of the string a.

                                    /*
                                Question:
Use bracket notation to find the last character in the lastName variable.

Hint: Try looking at the example above if you get stuck.      
                                    */
                                // Answer:
// Setup
const lastName3 = "Lovelace";
// Only change code below this line
const lastLetterOfLastName = lastName3[lastName3.length -1]; // Change this line
console.log(lastLetterOfLastName);