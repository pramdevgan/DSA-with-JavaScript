                                    /*
                Global vs. Local Scope in Functions 
It is possible to have both local and global variables with the same name. 
When you do this, the local variable takes precedence over the global variable.
                                           
                                    */

// In this example:      

const someVar = "Hat";

function myFun() {
    const someVar = "Head";
    console.log(someVar);
    return someVar;
    
  }

myFun();

                                    
// The function myFun will retrun the string Head because the local version of the variable is present.

                                            // Question:
// Add a local variable to myOutfit function to override the value of outerWear with the string sweater.

                                            // Answer

// Setup
const outerWear = "T-Shirt";

function myOutfit () {
    // Only change code below this line
    const outerWear = "sweater";
    console.log(outerWear);
    return outerWear;
    // Only change code above this line

}

myOutfit();