                                        /*
Testing Objects for Properties

Sometimes it is useful to check if the property of a given object exists or not. 
We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. 
.hasOwnProperty() returns true or false if the property is found or not.
                                        */

// Example

const myObj1 = {
    top:"hat",
    bottom:"pants"
};
myObj1.hasOwnProperty("top");
myObj1.hasOwnProperty("middle");
console.log(myObj1.hasOwnProperty("top"));
console.log(myObj1.hasOwnProperty("middle"));

// The first hasOwnProperty returns true, while the second returns false.

                                                /*
                                            Question
Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). 
If the property is found, return that property's value. 
If not, return "Not Found".
                                                */
var Obj = {
    gift :"poney",
    pet : "kitten",
    bed : "sleigh",
    city : "Seattle"
}
function checkObj(obj, checkProp) {
    if (Obj.hasOwnProperty(checkProp))
        return obj[checkProp];
    else{
        return "Not Found";
    }
}