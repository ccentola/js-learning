/* Function Statements and Expressions */



// function declaration
// funcation whatDoYouDo(job, firstName) {}

// function expression
var whatDoYouDo = function(job,firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives an uber.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher','Carl'));
console.log(whatDoYouDo('designer','Carl'));
console.log(whatDoYouDo('retired','Carl'));