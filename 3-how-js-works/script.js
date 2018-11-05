/* The "this" Keyword */

/*
The "this" keyword is not assigned a value until a function where it is defined is actually called.
*/

// console.log(this);

caclAge(1989);

function caclAge(year) {
    // this var is still global object
    console.log(2018 - year);
    console.log(this); 
}

var carl = {
    name:'Carl',
    birthYear:1989,
    calcAge: function() {
        // this var is the carl object
        console.log(this); 
        console.log(2018 - this.birthYear);

        function innerFunc() {

            // back to window object
            console.log(this);
        }
        innerFunc();
    }
};

carl.calcAge();

var mike = {
    name:'Mike',
    birthYear:1984

};

// method borrowing
mike.calcAge = carl.calcAge;
mike.calcAge();