                                        /*
            Comparison with the Less Than Or Equal To Operator

The less than or equal to operator (<=) compares the values of two numbers. 
If the number to the left is less than or equal to the number to the right, it returns true. 
If the number on the left is greater than the number on the right, it returns false. 
Like the equality operator, the less than or equal to operator converts data types.

                                    Examples

                                    4   <= 5
                                    '7' <= 7
                                    5   <= 5
                                    3   <= 2
                                    '8' <= 4

In order, these expressions would evaluate to true, true, true, false, and false.
                                        */

function testLessOrEqual(val) {
    if (val <= 12){
        return "Smaller than or equal to 12";
    }

    if ( val <= 24){
        return "Smaller than or equal to 24";
    }

    return "More Than 24";
}

console.log(testLessOrEqual(12))
console.log(testLessOrEqual(24))
console.log(testLessOrEqual(25))