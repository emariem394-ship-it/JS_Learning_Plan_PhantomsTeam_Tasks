// The First Requirement (A program that determines whether the number is even or odd)
console.log('First Requirement:');

let number = 5;

if(number % 2 == 0){
    console.log('The number is even.');
}
else{
    console.log('The number is odd.');
}
console.log('\n');

// The Second Requirement (A program to convert the grade from numeric grade into rating)
console.log('Second Requirement:');

let grade = 83;

if(grade <= 100 && grade >= 85){
    console.log('Excelent');
}
else if(grade < 85 && grade >= 75){
    console.log('Very Good');
}
else if(grade < 75 && grade >= 65){
    console.log('Good');
}
else if(grade < 65 && grade >= 55){
    console.log('Passed');
}
else if(grade < 55 && grade >= 0){
    console.log('Failed');
}
else{
    console.log(`${grade} is out of the correct grade rate(0 to 100).`);
}

console.log('\n');

// The Third Requirement (A program to determine if the year is a leap year or not)
console.log('Third Requirement:');

let year = 2026;

if(year%400 == 0 || (year%100 != 0 && year%4 == 0)){
    console.log(`${year} is a Leap Year.`);
}
else{
    console.log(`${year} isn't a Leap Year.`);
}

console.log('\n');

// The Fourth Requirement (A program that prints the day name from its number of the week from 1 to 7)
console.log('Fourth Requirement:');

let dayNum = 5;

switch(dayNum){
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thursday');
        break;
    case 6:
        console.log('Friday');
        break;
    case 7:
        console.log('Saturday');
        break;
    default:
        console.log(`${dayNum} isn't a correct number of a week day.`);
}

console.log('\n');

// The Fifth Requirement (A program that compares between three numbers and prints the largest number)
console.log('Fifth Requirement:');

let num1 = 5;
let num2 = 25;
let num3 = 11;
 
if(num1 > num2 && num1 > num3){
    console.log(`${num1} is the largest number.`);
}
else if(num2 > num1 && num2 > num3){
    console.log(`${num2} is the largest number`);
}
else{
    console.log(`${num3} is the largest number`);
}