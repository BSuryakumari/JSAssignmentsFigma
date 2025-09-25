//Assignment:13 Functions Calling Other Functions﻿
//1)Create a function called describePopulation. Use the function type you like the most. 
// This function takes in two arguments: country and population, and returns a strings like this: 
// 'China has 1441 million people, which is about 18.2% of the world'.

//2)To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.

//3)Call describePopulation with data for 3 countries of your choice.

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
function describePopulation(country, population) {
    let percentage = percentageOfWorld1(population);
    return country + " has " + population + " million people, which is about " + Math.round(percentage)  + "% of the world";
}
let india = describePopulation("India", 1400);
console.log(india);
let usa = describePopulation("USA", 331);
console.log(usa);
let russia = describePopulation("Russia", 1280);
console.log(russia);


function describePopulation(country, population) {
    let percentage = percentageOfWorld1(population);
    console.log(country + " has " + population + " million people, which is about " + Math.round(percentage)  + "% of the world");
}
describePopulation("India", 1400);
describePopulation("USA", 331);
describePopulation("Russia", 1280);


function describePopulation(country, population) {
    let percentage = (population / 7900) * 100;
    return country + " has " + population + " million people, which is about " + Math.round(percentage)  + "% of the world";
}   
let india1 = describePopulation("India", 1400);
console.log(india1);
let usa1 = describePopulation("USA", 331);
console.log(usa1);
let russia1 = describePopulation("Russia", 1280);
console.log(russia1);


function describePopulation(country, population) {
    let percentage = (population / 7900) * 100;
    console.log(country + " has " + population + " million people, which is about " + Math.round(percentage)  + "% of the world");
}   
describePopulation("India", 1400);
describePopulation("USA", 331);
describePopulation("Russia", 1280);