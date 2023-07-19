const { valid } = require("./index");

const fullName = "MennaElyamany";
const email = "mennaelyamany95@yahoo.com";
const password = "010101010";
const age1= 21;
const age2=10;
const gender = "feMale";
const gmail = "mennaelyamany95@T.com";


const res1= valid(fullName,email,password,age1,gender);
console.log('the first test is '+res1);

const res2= valid(fullName, gmail , password, age1, gender);
console.log('the second test is '+res2);

const res3=valid(fullName,email,password,age2,gender);
console.log('the second test is '+res3);