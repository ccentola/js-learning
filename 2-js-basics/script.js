/* Arrays */

var names = ['Carl','John','Mark'];
var years = new Array(1990,1969,1980);

// access elements in an array
console.log(names[0]);

// list all emements in an array
console.log(names);

// number of elements in an array
console.log(names.length);

// mutate ana array
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// different data types
var carl = ['Carl','Centola',1989,'teacher',false];

// add an element to the end of an array
carl.push('blue');
console.log(carl);

// add to the beginning of an array
carl.unshift('Mr.');
console.log(carl);

// remove the last element of an array
carl.pop();
console.log(carl);

// remove the first element of an array
carl.shift();
console.log(carl);

// find the index of an element in an array
console.log(carl.indexOf(1989));

var isDesigner = carl.indexOf('designer') === -1 ?
'Carl is NOT a designer' : 'Carl IS a designer';
console.log(isDesigner);