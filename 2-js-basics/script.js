/* Coding Challenege 3 */

/*
Create a tip calculator for the following bills:
$124, $48, $268.

Rules:
* tip 20% when the bill is less tahn $50
* tip 15% when the bill is between $50 and $200
* tip 10% when the bill is more than $200

Show all three tips and all three totals
*/

// calculate tip
function tip(bill) {
    if (bill < 50){
        percentage = 0.2;
    } else if (bill >= 50 && bill <= 200) {
        percentage = 0.15;
    } else {
        percentage =  0.1;
    }
    return bill * percentage
}

// calcualte tips
var bills = [124,48,268];

var tips = [
    tip(bills[0]),
    tip(bills[1]),
    tip(bills[2])
];

var finalValues = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
];

console.log(tips);
console.log(finalValues);