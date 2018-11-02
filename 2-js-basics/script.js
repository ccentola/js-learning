/* Truthy and Falsy Values and Equality Operators */

// falsy values: undefined, null, 0, '', NaN
// truthy values: not falsy values

// not defined
var height;

if (height) {
    console.log('The variable is defined.');
} else {
    console.log('The variable has not been defined.');
}

// defined
var height;
height = 23;

if (height) {
    console.log('The variable is defined.');
} else {
    console.log('The variable has not been defined.');
}

// undefined
var height;
height = 0;

if (height) {
    console.log('The variable is defined.');
} else {
    console.log('The variable has not been defined.');
}

// defined
var height;
height = 0;

if (height || height === 0) {
    console.log('The variable is defined.');
} else {
    console.log('The variable has not been defined.');
}

// defined
var height;
height = 'twenty';

if (height || height === 0) {
    console.log('The variable is defined.');
} else {
    console.log('The variable has not been defined.');
}

// not defined
var height;
height = '';

if (height || height === 0) {
    console.log('The variable is defined.');
} else {
    console.log('The variable has not been defined.');
}

// type equality - defined
var height;
height = 'twenty';

if (height || height === 0) {
    console.log('The variable is defined.');
} else {
    console.log('The variable has not been defined.');
}

// type equality - undefined
var height;
height = 23;

if (height == '23') {
    console.log('The == operator does type coercion');
}