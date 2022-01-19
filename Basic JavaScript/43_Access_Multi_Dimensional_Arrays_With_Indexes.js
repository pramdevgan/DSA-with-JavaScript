                                    /*
            Access Multi-Dimensional Arrays With Indexes

One way to think of a multi-dimensional array, is as an array of arrays. 
When you use brackets to access your array, 
the first set of brackets refers to the entries in the outer-most (the first level) array,
and each additional pair of brackets refers to the next level of entries inside.                                    
                                    */

// Example:

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];

arr[3];
arr[3][0];
arr[3][0][1];

console.log(arr);
console.log(arr[3]);
console.log(arr[3][0]);
console.log(arr[3][0][1]);

// arr[3] is [[10, 11, 12], 13, 14], 
// arr[3][0] is [10, 11, 12], 
// and arr[3][0][1] is 11.

                                    /*
Note: There shouldn't be any spaces between the array name and the square brackets, 
like array [0][0] and even this array [0] [0] is not allowed. 
Although JavaScript is able to process this correctly, 
this may confuse other programmers reading your code.                                   
                                    */


                                    /*
                                Question:
Using bracket notation select an element from myArray such that myData is equal to 8.                                
                                    */
                                // Answer
    const myArray = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [[10, 11, 12], 13, 14],
        ];
        
        const myData1 = myArray[2][1];
        console.log(myData1);