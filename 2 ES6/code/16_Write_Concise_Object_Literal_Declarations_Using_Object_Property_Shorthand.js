                                                /*
            Write Concise Object Literal Declarations Using Object Property Shorthand

ES6 adds some nice support for easily defining object literals.

Consider the following code:
                                                */

const getMousePosition = (x,y) => ({
    x:x,
    y:y
});
console.log(getMousePosition(12,14));
                                                /*
getMousePosition is a simple function that returns an object containing two properties. 
ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. 
You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood.
Here is the same function from above rewritten to use this new syntax:
                                                */

const getMousePosition1 = (x,y) => ({x,y});  // change getMousePosition1 to getMousePosition

console.log(getMousePosition1(12,14));

                                            /*
                                        Question:
Use object property shorthand with object literals to create and 
return an object with name, age and gender properties.
                                            */

const createPerson = (name, age, gender) => {
    return{
        name,
        age,
        gender
    };
};
console.log(createPerson("Zodiac Hasbro", 56, "male"));
console.log(createPerson("Param Devgan", 20, "male"));