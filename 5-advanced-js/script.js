// Object.create

var personProto = {
    calcAge: function() {
        console.log(2018 - yearOfBirth);
    }
};

var carl = Object.create(personProto);

carl.name = 'Carl';
carl.yearOfBirth = 1989;

var john = Object.create(personProto, {
    name: {value: 'John'},
    yearOfBirth: { value: 1969}
});