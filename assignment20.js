//Assignment20:1)Let's bring back the populations array from a previous assignment.

//2)Use a for loop to compute an array called percentages2 containing the percentages of the world population 
// for the 4 population values. Use the function percentageWOrld1 that you created earlier.

//3)Confirm that percentages2 contains exactly the same values as the percentages array that we created manually 
// in the previous assignment, and reflect on how much better this solution is.

let populations = [1441, 1400, 331, 138];
let percentages2 = [];
function percentageWorld1(population) {
    return (population / 7900) * 100;
}
for (let i = 0; i < populations.length; i++) {
    const perc = percentageWorld1(populations[i]);
    percentages2.push(perc);
}
console.log(percentages2);
const percentages = [];
for (let i = 0; i < populations.length; i++) {
    percentages.push(percentageWorld1(populations[i]));
}   
console.log(percentages);
console.log(percentages2 === percentages);
