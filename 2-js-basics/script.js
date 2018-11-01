/* Basic Operators */

// calculate birth year
var yearCarl = 2018 - 29;
console.log(yearCarl);

var yearCarl = 2018 - 29;
var yearJohn = 2018 - 32;
console.log(yearCarl);
console.log(yearJohn);

// should reuse vars to avoid repetition
var year, yearCarl, yearJohn
year = 2018;
yearCarl = year - 29;
yearJohn = year - 32;

console.log(yearCarl);
console.log(yearJohn);

// additional math operators
var now = 2018;

console.log(now * 10);
console.log(now + 10);
console.log(now / 10);

// logical operators
var ageCarl, ageJohn, johnOlder;
ageCarl = 29;
ageJohn = 32;
johnOlder = ageJohn > ageCarl;

console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'John is older than Carl');

var x;
console.log(typeof x);


