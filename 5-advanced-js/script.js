// First Class Functions

var years = [1990, 1989, 1998, 1986, 2001];

function arrayCalc(arr, fn) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        result.push(fn(arr[i]));
    }

    return result;
}

function calcAge(x) {
    return 2016 - x;
}

function isAdult(x) {
    return x >= 18;
}

function maxHR(x) {
    if (x >= 18 && x <= 81) {
        return Math.round(206.9 - (0.67 * x));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calcAge);
console.log(ages);

var fullAges = arrayCalc(years, isAdult);
console.log(fullAges);

var heartRates = arrayCalc(ages, maxHR);
console.log(heartRates);