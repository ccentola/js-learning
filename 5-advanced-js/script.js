// function constructor

var carl = {
    name: 'Carl',
    yearOfBirth: 1989,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calcAge = function() {
    console.log(2018 - this.yearOfBirth);
}

// instantiation
var john = new Person('john', 1990, 'teacher');
var mark = new Person('mark', 1945, 'retired');

john.calcAge();
mark.calcAge();