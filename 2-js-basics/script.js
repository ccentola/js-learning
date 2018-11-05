/* Objects and Methods */

var carl = {
    birthYear: 1989,
    family: ["Jane", "Mark", "Bob"],
    firstName: "Carl",
    isMarried: true,
    job: "programmer",
    lastName: "Centola",
    calcAge: function() {
        // using "this" keyword to access object attributes
        this.age = 2018 - this.birthYear;
    }
};

carl.calcAge();
console.log(carl);

