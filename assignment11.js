//Write a function called describeCountry which takes three parameters: country, population and capitalCity. 
// Based on this input, the function returns a string with this format: 
// 'Finland has 6 million people and its capital city is Helsinki'.

//Call this function 3 times, with input data for 3 different countries. 
// Store the returned values in 3 different variables, and log them to the console.
//without return function given




function describeCountry(country, population, capitalCity) {
    return country + " has " + population + " million people and its capital city is " + capitalCity;
}
let india = describeCountry("India", 1400, "New Delhi");
console.log(india);
let usa = describeCountry("USA", 331, "Washington D.C.");
console.log(usa);
let russia = describeCountry("Russia", 25, "Moscow");
console.log(russia);


//without return function given
function describeCountry(country, population, capitalCity) {
    console.log(country + " has " + population + " million people and its capital city is " + capitalCity);
}
describeCountry("India", 1400, "New Delhi");
describeCountry("USA", 331, "Washington D.C.");
describeCountry("Russia", 25, "Moscow");

//without arguments given
function describeCountry() {
    let country = "India";
    let population = 1400;
    let capitalCity = "New Delhi";
    console.log(country + " has " + population + " million people and its capital city is " + capitalCity);
}
describeCountry();

//without arguments given and return type
function describeCountry() {
    let country = "India";
    let population = 1400;
    let capitalCity = "New Delhi";
    return country + " has " + population + " million people and its capital city is " + capitalCity;
}
let result = describeCountry();
console.log(result);