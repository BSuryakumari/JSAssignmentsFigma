//Assignment14:Create an array containing 4 population values of 4 countries of your choice. 
// You may use the values you have been using previously. Store this array into a variable called populations.
//Log to the console whether the array has 4 elements or not (true or false).
//Create an array called percentages containing the percentages of the world population for these 4 population values. 
// Use the function percentageOfWorld1 that you created earlier to compute the 4 percentage values.

let populations = [1400, 331, 1280, 1441];
console.log(populations.length === 4);
let percentages = [];
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
for (let i = 0; i < populations.length; i++) {
    let perc = percentageOfWorld1(populations[i]);
    percentages.push(perc);
}
console.log(percentages);
console.log(typeof percentages);
console.log(percentages.length === 4);


let populations1 = [1400, 331, 1280, 1441];
console.log(populations1.length === 4);
let percentages1 = [percentageOfWorld1(populations1[0]), percentageOfWorld1(populations1[1]), percentageOfWorld1(populations1[2]), percentageOfWorld1(populations1[3])];
console.log(percentages1);
console.log(typeof percentages1);
console.log(percentages1.length === 4);


