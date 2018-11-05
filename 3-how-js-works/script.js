/* Hoisting */

// can use function before declaration
calcAge(1990);

function calcAge(year) {
    console.log(2016 - year);
}

// hoisting does not apply to function expressions 
// retirement(1990); // does not work

var retirement = function(year){
    console.log( 65 - (2016 - year));
}

retirement(1990);

// variables
var age = 25;
console.log(age);


