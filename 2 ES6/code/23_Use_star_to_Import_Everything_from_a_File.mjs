                                    /*
Use * to Import Everything from a File
Suppose you have a file and you wish to import all of its contents into the current file. 
This can be done with the import * as syntax. 
Here's an example where the contents of a file named math_functions.js are imported into a file in the same directory:
                                    */

import * as myMathModule from './math_functions.mjs';

                                    /*
The above import statement will create an object called myMathModule. 
This is just a variable name, you can name it anything. 
The object will contain all of the exports from math_functions.js in it, 
so you can access the functions like you would any other object property. 
Here's how you can use the add and subtract functions that were imported:
                                    */

console.log(myMathModule.add(2,3));
console.log(myMathModule.subtract(5,3));

                                    /*
                                Question
The code in this file requires the contents of the file: string_functions.js, 
that is in the same directory as the current file. 
Use the import * as syntax to import everything from the file into an object called stringFunctions.
                                    */

import * as stringFunctions from './string_functions.mjs';
console.log(stringFunctions.uppercaseString("hello"));
console.log(stringFunctions.lowercaseString("WORLD!"));