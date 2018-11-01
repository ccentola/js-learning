/* Variable Mutation and Type Coercion */

var firstName = 'Carl';
var age = 29;

// js automatically coerces types
console.log(firstName+ ' '+age);

// declare many variables on a single line
var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(
    firstName +
    ' is a ' + 
    age + 
    ' year old ' + 
    job + 
    '. Is he married? ' + 
    isMarried
);

// variable mutation
age = 'twenty nine';
job = 'driver';

alert(
    firstName +
    ' is a ' + 
    age + 
    ' year old ' + 
    job + 
    '. Is he married? ' + 
    isMarried
);

// ask a user for input
var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
