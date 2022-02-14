                                        /*
                            Local Scope and Functions
Variables which are declared within a function, as well as the function parameters, have local scope. 
That means they are only visible within that function.

Here is a function myTest with a local variable called loc.                                        
                                        */

function myTest (){
    const loc = "foo";
    console.log(loc);
}

myTest();
console.log(loc);

                                        /*
                                    Question:
The myTest() function call will display the string foo in the console. 
The console.log(loc) line will throw an error, as loc is not defined outside of the function.                                        
                                        */
                                    // Answer

function myLocalScope() {
    // Only change code below this line

    let myVar;
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);