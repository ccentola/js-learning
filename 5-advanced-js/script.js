// Primitives vs Objects

// primitives
var a = 23;
var b = a;
a = 46;

console.log(a);
console.log(b);

// objects
var obj1 = {
    name: 'Carl',
    age: 30
};

var obj2 = obj1;

console.log(obj1.age);
console.log(obj2.age);

// functions
var age = 29;
var obj = {
    name: 'Carl',
    city: 'Austin'
}
function change(a, b) {
    a = 30;
    b.city = 'Boston';
}

change(age, obj);

console.log(age);
console.log(obj.city);