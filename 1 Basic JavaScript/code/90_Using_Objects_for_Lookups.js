                                        /*
                            Using Objects for Lookups

Objects can be thought of as a key/value storage, like a dictionary.
If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain. 
This is most useful when you know that your input data is limited to a certain range.

Here is an example of a simple reverse alphabet lookup:
                                            */

const alpa = {
    1:"Z",
    2:"Y",
    3:"X",
    4:"W",
    5:"T",
    /*.....*/
    21:"F",
    22:"E",
    23:"D",
    24:"C",
    25:"B",
    26:"A"
};

alpa[2];
alpa[24];
console.log(alpa[24]);
const value =2;
alpa[value];

console.log(alpa[value]);

                                            /*
                                        Question
Convert the switch statement into an object called lookup. 
Use it to look up val and assign the associated string to the result variable.
                                            */

// Setup
function phoneticLookup (val) {
    let result ="";

let lookup = {       
        "alpha":"Adams",
        "bravo":"Boston",
        "charlie":"Chicago",
        "delta":"Denver",
        "echo":"Easy",
        "foxtrot":"Frank"
    }
    result = lookup[val]; // we asign the value of the object properties using bract notation (dot notation works too) to variable called rerult and return it 
    return result;
}

phoneticLookup("charlie");
console.log(phoneticLookup("charlie"));