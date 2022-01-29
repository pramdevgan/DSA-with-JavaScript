                            /*
            Comparison with the Greater Than Operator

The greater than operator (>) compares the values of two numbers. 
If the number to the left is greater than the number to the right, it returns true. 
Otherwise, it returns false.

Like the equality operator, the greater than operator will convert data types of values while comparing.

                        Examples

                        5   >  3
                        7   > '3'
                        2   >  3
                        '1' >  9
In order, these expressions would evaluate to true, true, false, and false.
                            */

function testGreaterThan(val) {
    if (val > 100){
        return "Over 100";
    }

    if (val > 10){
        return "Over 10";
    }
    return "10 or Over";
}

console.log(testGreaterThan(101));
console.log(testGreaterThan(11));
console.log(testGreaterThan(10));