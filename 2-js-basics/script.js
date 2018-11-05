/* Coding Challenge 4 */

// create objects with John and Mark's properties of name, mass, and height

var john = {
    name: 'John',
    mass: 185,
    height: 72,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
    }
};

var mark = {
    name: 'John',
    mass: 206,
    height: 70,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
    }
};

john.calcBMI();
mark.calcBMI();

if (john.BMI > mark.BMI) {
    console.log(john.name + ' has a BMI of ' + john.BMI);
} else if (mark.BMI > john.BMI) {
    console.log(mark.name + ' has a BMI of ' + mark.BMI);
} else {
    console.log('BMI is the same.');
}