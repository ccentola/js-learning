/* Functions */

function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageCarl = calculateAge(1989);
var ageMike = calculateAge(1945);

console.log(ageCarl);
console.log(ageMike);

function yearsUntilRetirement(year,firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' will retire in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    } 
}


yearsUntilRetirement(1989, 'Carl');