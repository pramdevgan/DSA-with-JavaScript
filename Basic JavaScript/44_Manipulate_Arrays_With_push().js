                                    /*
                        Manipulate Arrays With push()
The push() method inserts specified content at the end of the selected elements.
An easy way to append data to the end of an array is via the push() function.   
.push() takes one or more parameters and "pushes" them onto the end of the array.                                   
                                    */

// Example:

            const arr1 = [1, 2, 3];
            arr1.push(4);
            console.log(arr1);

            const arr2 = ["Stimpson", "J", "cat"];
            arr2.push(["happy", "joy"]);
            console.log(arr2);

// arr1 now has the value [1, 2, 3, 4] and 
// arr2 has the value ["Stimpson", "J", "cat", ["happy", "joy"]].

                                    /*
                                Question:
Push ["dog", 3] onto the end of the myArray variable.                                
                                    */
                            // Answer:
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3]);
console.log(myArray);