//Code Challenge:CHALLENGE #2
//Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
//1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:
//"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".
//2. Modify the outputs above to use template literals to include the BMI values in the outputs.
//Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".
//Note: Don't round the BMI values. Leave them as they are.

const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;
const markBMI = markWeight / (markHeight * markHeight);
const johnBMI = johnWeight / (johnHeight * johnHeight);
console.log(markBMI, johnBMI);
if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}   

