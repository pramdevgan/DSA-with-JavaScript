                                                    /*
                            Write Concise Declarative Functions with ES6
When defining functions within objects in ES5, we have to use the keyword function as follows:
                                                    */

const person = {
    name: 'Param Devgan',
    sayHello: function (){
        return `Hello! My name is ${person.name}.`;
    }
}
console.log(person.sayHello());

                                                    /*
With ES6, you can remove the function keyword and colon altogether when defining functions in objects. 
Here's an example of this syntax:
                                                    */

const person11 = {
    name : "Param Devgan",
    sayHello () {
        return `Hello! My name is ${person.name}.`;
    }
}
console.log(person11.sayHello());
console.log("Here above we got same  result");

                                                    /*
                                                Question:
Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.
                                                    */

// Answer

// Only change code below this line
const bicycle = {
    gear:2,
    setGear(newGear) {
        this.gear =newGear
    }
}

console.log("\nBefore update gear: ", bicycle.gear);
bicycle.setGear(3)
console.log("After update gear: ", bicycle.gear);