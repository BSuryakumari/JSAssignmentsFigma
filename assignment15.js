//Assignment15:Create an array containing all the neighbouring countries of a country of your choice. 
// Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called neighbours.
//At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country, 
// so add it to the end of the neighbours array.
//Unfortunately, after some time the new country is dissolved, so remove it from the end of the array.
//If the neighbours array does not include the country 'Germany', log to the console: 
// 'Probably not a central european country :D'.
//Change the name of one of your neighbouring countries. To do that, find the index of the country in the 
// neighbours array, and then use that index to change the array at that index position. 
// For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.
//show example solution
 //{...}
//const neighbours =

const neighbours = ['India', 'Hyderabad', 'Vijayawada'];
console.log(neighbours);
neighbours.push('Follower');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes('Germany')) {
    console.log('Probably not a central european country :D');
}
const index = neighbours.indexOf('Vijayawada');
if (index !== -1) {
    neighbours[index] = 'Republic of Vijayawada';
}
console.log(neighbours);




const Numbers = [1, 2, 3, 4];
console.log(Numbers);
Numbers.push(5);
console.log(Numbers);
Numbers.pop();
console.log(Numbers);
if (!Numbers.includes(6)) {
    console.log('6 is not found in the array');
}
const index1 = Numbers.indexOf(3);
if (index1 !== -1) {
    Numbers[index1] = 33;
}
console.log(Numbers);



