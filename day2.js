// First Reuirement (Calculate the addition,subtraction ,multiplication ,and division of two numbers using template literals)

// The two numbers
let number1 = 10;
let number2 = 5;

// The operations
let add = number1 + number2;
let sub = number1 - number2;
let mul = number1 * number2;
let div = number1 / number2;

let lastOutput = `The two numbers are: ${number1}, ${number2}.
The addition: ${number1} + ${number2} = ${add}
The subtraction: ${number1} - ${number2} = ${sub}
The multiplication: ${number1} × ${number2} = ${mul}
The division: ${number1} ÷ ${number2} = ${div}`;

console.log('First Requirement:');
console.log(lastOutput);
console.log('\n');

// Second Requirement (Calculate the area and circumference of a circle using the radius)

// The values
const pi = 3.14159;
let r = 5;

// Formulas
let A = pi * (r^2); //Area
let C = 2 * pi * r; //Circumference

console.log('Second Requirement:');
console.log(`The Circle Area = ${A} and The Cicle Circumference = ${C}`);
console.log('\n');

// Third Requirement (Calculate BMI)

// Hight in meter and weight in kilogram;
let hcm = 154; //Hight in centimeter
let hight = hcm / 100; //Hight in meter
let weight = 52;

// Calculating BMI 
let BMI = (weight) / (hight^2);

console.log('Third Requirement:');
console.log(`The BMI = ${BMI}`);
console.log('\n');

// Fourth Requirement (Writing examples to show the difference between equality(==) and strict equality(===))

// varables to expert
let integer1 = 5;
let integer2 = 5;
let integer3 = 1;
let string1 = '5';
let string2 = 'word';
let string3= 'word'
let string4 ='Word';
let boolean1 = true;

// equality(==) examples
//The equality (==) operator checks whether its two operands are equal, returning a Boolean result, it attempts to convert and compare operands that are of different types.
console.log(integer1 == string1); // it converts the string into number first. it will return true becausethey are the same value.
console.log(integer1 == integer2); // it returns true because they are the same value.
console.log(string2 == string3); // it returs true because they have the same characters in the same sequence.
console.log(string3 == string4); // it returns false because they haven't the same characters. The first character of the first operand(w) isn'e the same of the first character of the second operand(W)
console.log(true == integer3) // it returns true because the boolean value is converted into number first.

// strict equality(===) examples
//The strict equality (===) operator checks whether its two operands are equal, returning a Boolean result too,considers operands of different types to be different.
console.log(integer1 === string1); // it returns false because they arn't the same type even thay have the same value.
console.log(integer1 == integer2); // it returns true because they are the same value and the same type.
console.log(string3 == string4); // it returns false because they haven't the same characters even they are the same type. 
console.log(true == integer3); // it returns false because they arn't the same type