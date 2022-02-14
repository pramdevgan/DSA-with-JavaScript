                                        /*
                    Accessing Object Properties with Variables

Another use of bracket notation on objects is to access a property which is stored as the value of a variable. 
This can be very useful for iterating through an object's properties or when accessing a lookup table.

Here is an example of using a variable to access a property:
                                        */

const dogs= {
    Fido : "Mutt",
    Hunter : "Doberman",
    Snoopie : "Beagle"
};

const mydog = "Hunter";
const myBreed = dogs[mydog];
console.log(myBreed);

                                        /*
The string Doberman would be displayed in the console.

Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows:
                                        */

const someObj = {
    propName : "John"
};

function propPrefix(str){
    const s = "prop";
    return s + str;
}

const someProp = propPrefix("Name");
console.log(someObj[someProp]);

                                        /*
                                    Question
Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.
                                        */
                                    // Answer

// Setup
const testObj1 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  const playerNumber = 16;  // Change this line
  const player = testObj1[playerNumber];   // Change this line
  console.log(player);