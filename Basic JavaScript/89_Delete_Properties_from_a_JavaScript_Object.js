                                        /*
                    Delete Properties from a JavaScript Object

We can also delete properties from objects like this:

delete Object.prototype;
                                        */

// e.g.
const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails":1,
    "friends": ["everything!"],
    "bark":"bow-wow"
};

console.log(ourDog);
delete ourDog.bark;
console.log(ourDog);

// After the last line shown above, ourDog looks like:
/*
{
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
}
*/

                                                /*
                                            Question
Delete the tails property from myDog. 
You may use either dot or bracket notation.
                                                */

// Setup
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
    };

  // Only change code below this line
console.log(myDog);
delete myDog.tails;
console.log(myDog);