                                        /*
Use Destructuring Assignment to Pass an Object as a Function's Parameters
In some cases, you can destructure the object in a function argument itself.

Consider the code below:
                                        */

const profileUpdate = (profileUpdate) => {
    const {name, age, nationality,location} = profileUpdate
}

// This effectively destructures the object sent into the function. This can also be done in-place:

const profileUpdate1 = ({name, age,nationality,location}) => {

}


// When profileData is passed to the above function, the values are destructured from the function parameter for use within the function.


                                        /*
Use Destructuring assignment within the function argument to the function
half to send only max and min inside the function.
                                        */

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75, //
    average: 35.85
};

const half = ({max, min}) => (max+min) /2.0;

console.log(stats);
console.log(half(stats));