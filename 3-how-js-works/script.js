/* Scoping */

// scoping chain example
var a = 'Hello';
first();

function first() {
    var b = 'Hi';
    second();
    function second() {
        var c = 'Hey';
        console.log(a + b + c);
    }
}

// scoping chain example
var a = 'Hello';
first();

function first() {
    
    var b = 'Hi';
    second();

    function second() {
        var c = 'Hey';
        third();
    }
}

function third() {
    var d = 'Carl'
    // console.log(c);
    console.log(a + d);
}
