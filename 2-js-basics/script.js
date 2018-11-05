/* Objects and Properties */

// object
var carl = {
    firstName: 'Carl',
    lastName: 'Centola',
    birthYear: 1989,
    family: ['Jane','Mark','Bob'],
    job: 'teacher',
    isMarried: false
};

console.log(carl);
console.log(carl['lastName']);

// retrive attributes
var x = 'birthYear';
console.log(carl[x]);

// mutate an object
carl.job = 'programmer';
carl['isMarried'] = true;

console.log(carl);

// new object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;

console.log(jane);