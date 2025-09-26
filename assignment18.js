//Assignment18:1)Add a method called describe to the myCountry object. 
// This method will log a string to the console, similar to the string logged in the previous assignment, 
// but this time using the 'this' keyword.
//2)Call the describe method.
//3)Add a method called checkIsland to the myCountry object. 
// This method will set a new property on the object, called isIsland. 
// isIsland will be true if there are no neighbouring countries, and false if there are. 
// Use the ternary operator to set the property.

let myCountry = {
    country: "India",
    capital: "New Delhi",   
    language: "Hindi",
    population: 1400,
    neighbours: ["China", "Pakistan", "Nepal", "Bhutan", "Bangladesh", "Myanmar"],
    describe: function() {
        console.log(this.country + " has " + this.population + " million people who speak " + this.language + ", " + this.neighbours.length + " neighbouring countries and a capital called " + this.capital + ".");
    },
    checkIsland: function() {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
};
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

const myCountry1 = {
    country1: "India",
    capital1: "New Delhi",
    language1: "Hindi",
    population1: 1400,
    neighbours1: ["Pakistan", "Nepal"],
  
    describe() {
      console.log(`${this.country1} has ${this.population1} million people, its capital is ${this.capital1}, and people speak ${this.language1}.`);
    },
  
    checkIsland() {
      this.isIsland = this.neighbours.length === 0;
    }
  };

  myCountry.describe();
  myCountry.checkIsland();
  console.log(myCountry.isIsland);