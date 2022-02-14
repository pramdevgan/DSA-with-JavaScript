                                /*
                Assignment with a Returned Value

If you'll recall from our discussion of Storing Values with the Assignment Operator, 
everything to the right of the equal sign is resolved before the value is assigned. 
This means we can take the return value of a function and assign it to a variable.

Assume we have pre-defined a function sum which adds two numbers together, then:
                                */
// ourSum = sum(5,12);

// will call the sum function, which returns a value of 17 and asigns it to the ourSum variable.

                                /*
                            Question:
call the proccessArg function with an argument of 7 and assign its retr value to the variable prcessed.                    
                                */
// Answer                               

            // Setup
            let processed = 0; 

            function processArg (num) {
                return (num + 3) / 5;
            }

            // Only change code below this line
            processed = processArg(7); 

            console.log(processed);