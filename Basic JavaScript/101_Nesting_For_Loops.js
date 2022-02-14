                                            /*
                                    Nesting For Loops
If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. 
Here is an example:
                                            */

const arr1 = [[1,2], [3,4], [5,6]]; // change arr1 to arr

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
        console.log(arr1[i][j]);
    }
} 

// This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the .length of arr[i], since arr[i] is itself an array.


                                            /*
                                        Question
Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.
                                            */
// Answer
function multiplyAll  (arr) {
    let product = 1;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }

    return product;
}

console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));