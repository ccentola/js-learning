/* Operator Precedence */

var now, yearCarl, fullAge, isFullAge
now = 2018;
yearCarl = 1989;
fullAge = 18;

isFullAge = now - yearCarl >= fullAge; // true

console.log(isFullAge);

var ageCarl, ageJohn, average
ageCarl = now - yearCarl;
ageJohn = 35;
average = ageCarl + ageJohn / 2;

console.log(average);

average = (ageCarl + ageJohn) / 2;
console.log(average);

// multiple assignment
var x,y;
x = (3 + 5) * 4 - 6; // 26
x = y = (3 + 5) * 4 - 6; // 26
console.log(x,y);

// more operators
x = x * 2;
console.log(x);

x *= 2;
console.log(x);

x += 10
console.log(x);

// increment
x = x + 1;
x += 1;
x++;