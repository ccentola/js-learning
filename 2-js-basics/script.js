/* The Ternary Operator and Switch Statements */

var firstName = 'Carl';
var age = 16;

// ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);


// switch statement
var job = 'instructor';

switch (job) {
    case 'teacher':
    case 'instructor': 
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver': 
        console.log(firstName + ' drives an uber.');
        break;
    case 'designer': 
        console.log(firstName + ' builds beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}


// switch with numeric evaluation
var age = 17;

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a young man.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a man.');
        break;
    default:
        console.log(firstName + ' is a unknown.');
        break;
}