                                        /*
                    Comparison with the Strict Equality Operator

Strict equality (===) is the counterpart to the equality operator (==). 
However, unlike the equality operator, which attempts to convert both values being compared to a common type, 
the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.
                                        */

            /* 
        Example:
        3   === 3
        3   === '3'
            */

// These conditions would return true and false respectively.

// In the second example, 3 is Number type and '3' is a String type.

                                    // Answer:
function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not equal";
}

console.log(testStrict(10));