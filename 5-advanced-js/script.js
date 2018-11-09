// Closures

function retirement(retirementAge) {
    
    var a = ' years left until retirement.'

    return function(birthYear) {
        
        var age = 2018 - birthYear;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);

retirementUS(1989);
retirement(66)(1989);
retirementGermany(1989);