                                        /*
                        Manipulate Arrays With unshift()

The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.                        
Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning of an array i.e. add elements in front of the array.

.unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.                                   
                                        */

// Example:
const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
console.log(ourArray);

// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

                                            /*
                                        Question:
Add ["Paul", 35] to the beginning of the myArray variable using unshift().
                                            */
                                        // Answer

// Setup
const myArray = [["John", 23], ["dog", 3]];
console.log(myArray);
myArray.shift()

// Only change code below this line
myArray.unshift(["Paul", 35]);
console.log(myArray);                                    
