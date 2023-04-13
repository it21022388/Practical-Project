//---------External----------

//print
console.log("Hope you are fine");

//---------Variables----------

//In js, when we are creating variables we donot have to give the data type 
//create variables
var firstName = "Andrew";
var lastName = "Perera";
var age = 26;
var isOk = true;
//undefined data type
var job,height;

//print only variable
console.log(firstName);

//print thevariable with a string
console.log("My name is "+lastName);

//type coercion - variable ekaka type ekath tawath type ekak widihata convert wena eka 
console.log("My age is "+age);
console.log("It is "+isOk);
console.log("I am a "+height);

//Get variable type
console.log(typeof(lastName));
console.log(typeof(age));
console.log(typeof(isOk));
console.log(typeof(job));

//Define
job = "Doctor";

//Variable Mutation - variable ekata kalin assign karapu value eka wenas karanawa
lastName = "Fernando";
console.log("I am "+lastName +" I am a "+job);

//Display alert
alert("My name is"+lastName+" .I am  "+age+" years old. and am I ok?"+isOk+" .");

//Get user input
height = prompt("What is your height?");
alert("My height is "+height+" feet.");

//------Arithmetic Operators----------

//single operators
var myAge, yourAge, year, result;
myAge = 26;
yourAge = 20;
year = 2021;

//subtraction
result = year - myAge;
console.log("I was born in "+result);

//Addition
result = year + 10;
console.log("After 10 years, It will be "+result);


//Multiplication
result = myAge * yourAge;
console.log("Product of our ages"+result);


//Division
console.log("Division of our ages "+(myAge/yourAge));
