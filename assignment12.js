//Assignment12:Function Declarations vs. Expressions﻿
//1)The world population is 7900 million people. 
// Create a function declaration called percentageOfWorld1 which receives a population value, 
// and returns the percentage of the world population that the given population represents. 
// For example, China has 1441 million people, so it's about 18.2% of the world population.
//2)To calculate the percentage, divide the given population value by 7900 and then multiply by 100.
//3)Call percentageOfWorld1 for 3 populations of countries of your choice, 
// store the results into variables, and log them to the console.
//4)Create a function expression which does the exact same thing, called percentageOfWolrd2, 
// and also call it with 3 country populations (can be the same populations).
//Assignment13:Arrow FunctionsRecreate the last assignment, 
// but this time create an arrow function called percentageOfWorld3.

//Function Declarations

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
let indiaPopulation = percentageOfWorld1(1400);
console.log(indiaPopulation);
let usaPopulation = percentageOfWorld1(331);
console.log(usaPopulation);
let russiaPopulation = percentageOfWorld1(1280);
console.log(russiaPopulation);
let chinaPopulation = percentageOfWorld1(1441);
console.log(chinaPopulation)

//Function Expressions

let percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}
let indiaPop = percentageOfWorld2(1400);
console.log(indiaPop);
let usaPop = percentageOfWorld2(331);
console.log(usaPop);
let russiaPop = percentageOfWorld2(1280);
console.log(russiaPop);

//Arrow Functions

let percentageOfWorld3 = population => (population / 7900) * 100;
let indiaP = percentageOfWorld3(1400);
console.log(indiaP);
let usaP = percentageOfWorld3(331);
console.log(usaP);
let russiaP = percentageOfWorld3(1280);
console.log(russiaP);

//without return type

function percentageOfWorld1(population) {
    console.log((population / 7900) * 100);
}
percentageOfWorld1(1400);
percentageOfWorld1(331);
percentageOfWorld1(1280);

let percentageOfWorld4 = function (population) {
    console.log((population / 7900) * 100);
}
percentageOfWorld4(1400);
percentageOfWorld4(331);
percentageOfWorld4(1280);

let percentageOfWorld5 = population => {
    console.log((population / 7900) * 100);
}   
percentageOfWorld5(1400);
percentageOfWorld5(331);
percentageOfWorld5(1280);
