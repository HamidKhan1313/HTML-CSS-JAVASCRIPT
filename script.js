// string
let name = "Hamid Khan";

// number
let age = 24;

// bigint (for very large numbers)
let bigNum = 1234567890123456789012345678901234567890n;

// boolean
let isStudent = true;

// undefined (not assigned yet)
let futureValue;
console.log("undefined value:", futureValue); // will print 'undefined'

// null (intentionally empty)
let emptyValue = null;

// symbol (unique and immutable value)
let uniqueId = Symbol("id");

// object (key-value pair)
let pers = {
  name: "Hamid",
  age: 24,
  city: "Abbottabad"
};

// Log all types to the console
console.log("String:", name);
console.log("Number:", age);
console.log("BigInt:", bigNum);
console.log("Boolean:", isStudent);
console.log("Null:", emptyValue);
console.log("Symbol:", uniqueId);
console.log("Object:", pers);

//------------------------------------------------------------------------------------------------

// use of functions
function greetUser(name) {
  console.log("Hello, " + name + "!");
}

// Call the function
greetUser("Hamid");

// alert function 
function sayHello() {
  alert("Hello, Hamid!");
}

//-----------------------------------------------------------------------------------------------

// script.js

// Creating an object using object literal
const person = {
  name: "Hamid Khan",
  age: 24,
  city: "Abbottabad",
  isStudent: true,
  
  // Method (function inside object)
  greet: function () {
    console.log("Hello, my name is " + this.name);
  }
};

// Access properties
console.log(person.name);        // Output: Hamid Khan
console.log(person["age"]);      // Output: 24

// Call method
person.greet();                  // Output: Hello, my name is Hamid Khan


//use JSON.stringify
let jsonString = JSON.stringify(person);
console.log(jsonString);

//-----------------------------------------------------------------------------------------------


