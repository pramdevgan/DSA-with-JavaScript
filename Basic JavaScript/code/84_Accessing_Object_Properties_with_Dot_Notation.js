                                /*
                Accessing Object Properties with Dot Notation

There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.

Dot notation is what you use when you know the name of the property you're trying to access ahead of time.
                                */

// Here is a sample of using dot notation (.) to read an object's property:

const muObj ={
    prop1: "val1",
    prop2: "val2",
};

const prop1val = muObj.prop1;
const prop2val = muObj.prop2;
console.log(prop1val);
console.log(prop2val);

// prop1val would have a value of the string val1, and prop2val would have a value of the string val2.

                                /*
Read in the property values of testObj using dot notation. Set the variable hatValue equal to the object's property hat and set the variable shirtValue equal to the object's property shirt.
                                */

const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
const hatValue = testObj.hat;
const shirtValue = testObj.shirt;

console.log(hatValue);
console.log(shirtValue);
