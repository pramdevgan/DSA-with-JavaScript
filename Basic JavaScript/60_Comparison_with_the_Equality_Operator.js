                                    /*
                Comparison with the Equality Operator

There are many comparison operators in JavaScript. 
All of these operators return a boolean true or false value.

The most basic operator is the equality operator ==. 
The equality operator compares two values and returns true if they're equivalent or false if they are not. 
Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left.
                                    */

function equalityTest (myVal) {
    if (myVal == 10){
        return "Equal";
    }
    return "Not Equal";
}

console.log(equalityTest(10));

                                    /*
If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, and the function will return Equal. 
Otherwise, the function will return Not Equal. 
In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. 
This is known as Type Coercion. Once it does, however, it can compare terms as follows:
                                1   ==   1
                                1   ==   2
                                1   ==  '1'
                                "3" ==   3

In order, these expressions would be true, false, true, and true.
                                    */

function testEqual(val) {
    if (val == 12){
        return "Equal"; // Change this line
    }
    return "No Equal";
}

console.log(testEqual(10));