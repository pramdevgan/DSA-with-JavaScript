                                            /*
                            Count Backwards With a For Loop
A for loop can also count backwards, so long as we can define the right conditions.

In order to decrement by two each iteration, we'll need to change our initialization, condition, and final expression.

We'll start at i = 10 and loop while i > 0. We'll decrement i by 2 each loop with i -= 2.
                                            */

const ourArray3 = []; // change ourArray3 to ourArray

for (let i = 10; i > 0; i-=2) {
    ourArray3.push(i);
}
console.log(ourArray3);

                                            /*
ourArray will now contain [10, 8, 6, 4, 2]. 
Let's change our initialization and final expression so 
we can count backwards by twos to create an array of descending odd numbers.
                                            */

// Push the odd numbers from 9 through 1 to myArray using a for loop.

const myArray3 = []; // change ourArray3 to ourArray

for (let i =10; i > 0; i--) {
    if(i % 2 === 1) {
        myArray3.push(i);
    }
}

console.log(myArray3);