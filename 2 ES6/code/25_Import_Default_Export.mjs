                                            /*
                                Import a Default Export
In the last challenge, you learned about export default and its uses. 
To import a default export, you need to use a different import syntax. 
In the following example, add is the default export of the math_functions.js file. 
Here is how to import it:
                                            */

import add from './default_math_functions.mjs';

                                            /*
The syntax differs in one key place. The imported value, add, is not surrounded by curly braces ({}). 
add here is simply a variable name for whatever the default export of the math_functions.js file is. 
You can use any name here when importing a default.
                                            */
console.log(add(1,2));
                                            /*
                                        Question:
In the following code, import the default export from the math_functions.js file, 
found in the same directory as this file. Give the import the name subtract.
                                            */

// Answer
import subtract from './default_math_functions.mjs';
subtract(7,4);
console.log(subtract(7,4));