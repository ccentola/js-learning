/* Coding Challenge 2 */

/*
John and Mike both play basketball on different teams. In the last 3 games, John's team scored 89, 120, ans 103 points. Mike's team scored 116, 94, and 123 points.
*/

// calculate the average score for each team
var johnsTeamAvg = (89 + 120 + 103) / 3;
var mikesTeamAvg = (116 + 94 + 123) / 3;

console.log(johnsTeamAvg);
console.log(mikesTeamAvg);


// print the team with the greater average score
if (johnsTeamAvg > mikesTeamAvg) {
    console.log("John's team had the higher average (" + johnsTeamAvg +").");
} else {
    console.log("Mike's team had the higher average (" + mikesTeamAvg +").");
}

// change the score to show different winners
var johnsTeamAvg = (120 + 120 + 103) / 3;
var mikesTeamAvg = (116 + 94 + 123) / 3;

console.log(johnsTeamAvg);
console.log(mikesTeamAvg);

if (johnsTeamAvg > mikesTeamAvg) {
    console.log("John's team had the higher average (" + johnsTeamAvg +").");
} else if (mikesTeamAvg > johnsTeamAvg) {
    console.log("Mike's team had the higher average (" + mikesTeamAvg +").");
} else {
    console.log('Both teams had the same average score: (' + mikesTeamAvg +').');
}

// add Mary's team who scored 97,134, and 105
var marysTeamAvg = (97 + 134 + 105) / 3

console.log(johnsTeamAvg);
console.log(mikesTeamAvg);
console.log(marysTeamAvg);


if (johnsTeamAvg > mikesTeamAvg && johnsTeamAvg > marysTeamAvg) {
    console.log("John's team had the higher average (" + johnsTeamAvg +").");

} else if (mikesTeamAvg > johnsTeamAvg && mikesTeamAvg > marysTeamAvg) {
    console.log("Mike's team had the higher average (" + mikesTeamAvg +").");

} else if (marysTeamAvg > mikesTeamAvg && marysTeamAvg > johnsTeamAvg){
    console.log("Mary's team had the higher average (" + marysTeamAvg +").");
    
} else {
    console.log('All teams had the same average score: (' + mikesTeamAvg +').');
}
