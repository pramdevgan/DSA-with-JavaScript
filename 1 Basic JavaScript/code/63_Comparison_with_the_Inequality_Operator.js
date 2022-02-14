                                        /*
                    Comparison with the Inequality Operator
The inequality operator (!=) is the opposite of the equality operator. 
It means not equal and returns false where equality would return true and vice versa. 
Like the equality operator, the inequality operator will convert data types of values while comparing.

Examples

1 !=  2
1 != "1"
1 != '1'
1 != true
0 != false
In order, these expressions would evaluate to true, false, false, false, and false.
                                        */


                                    // Answer
function testNotEqual (val) {
    if (val != 99){
        return "No Equal";
    }
    return "Equal";
}

console.log(testNotEqual(10));