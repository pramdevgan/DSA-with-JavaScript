                                                /*
                            Iterate Odd Numbers With a For Loop
For loops don't have to iterate one at a time. 
By changing our final-expression, we can count by even numbers.

We'll start at i = 0 and loop while i < 10. 
We'll increment i by 2 each loop with i += 2.
                                                */

const ourArray2 =[]; // change ourArray2 to ourArray
for (let i = 0; i < 10; i+=2){
    ourArray2.push(i);
}
console.log(ourArray2);

                                                /*
                                            Question
Push the odd numbers from 1 through 9 to myArray using a for loop.
                                                */
// Answer

const myArray2 =[]; // change myArray2 to myArray

for (let i = 0; i < 10; i++){

    if(i % 2 ==1)(
        myArray2.push(i)
    )
}

console.log(myArray2);