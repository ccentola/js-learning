/* Lopps and Iteration */

// simple for loop
// set i; set range; increment
for (var i = 0; i < 10; i++) {
    console.log(i);
}

// loop through the elements of an array
var carl = ['Carl','Centola',1989,'data analyst',false];

for (var i = 0; i < carl.length; i ++) {
    console.log(carl[i]);
}

// while loop
var i = 0;
while(i < carl.length) {
    console.log(carl[i]);
    i++;
}

// continue
for (var i = 0; i < carl.length; i ++) {
    // log only string types
    if (typeof carl[i] !== 'string') continue;
    console.log(carl[i]);
}

// break
for (var i = 0; i < carl.length; i ++) {
    // end after first non-string is encountered
    if (typeof carl[i] !== 'string') break;
    console.log(carl[i]);
}

// looping backwards
for (var i = carl.length - 1; i >= 0; i--) {
    console.log(carl[i]);
}