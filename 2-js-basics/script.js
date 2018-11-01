/* Coding Challenge 1 */

/* 
Mark and John are tryin gto compare their BMI (body mass index), which is calculated using the formula: BMI = mass / height^2.
*/

// store heights in variables
var markHeight, markMass, johnHeight, johnMass;
markHeight = 72;
johnHeight = 76;
markMass = 200;
johnMass = 190;

// calculate BMI
var markBMI, johnBMI
markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

// determine if mark has a higher BMI than john
var markBMIGreater = markBMI > johnBMI;

// write to console
console.log("Is Mark's BMI greater than John's? " + markBMIGreater );


