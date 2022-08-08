let num1 = 34;
let num2 = 45;
let num3 = "10";

let word1 = "Hello";
let word2 = "hello";

console.log(num1 > num2);
console.log(num1 < num2);

console.log(num1 <= num2);
console.log(num1 >= num2);

console.log(!true);
console.log(!false);

console.log(num1 == num3); //
console.log(num1 === num3); //equality check

console.log(word1 === word2);
console.log(word1 == word2);
console.log(word2 !== word1);

//CONTROL FLOW

let item = "Milk";

//IF condition statement 
if(item ==="salt") //condition
{
    console.log("buy salt"); //function body message 
} 

else if(item ==="sugar") //condition statement
{
    console.log("Buy sugar");
}
else if(item === "A1")
{
console.log("buy A1");
}
else {
    console.log("buy rocky salt");
}


// GRADING SYSTEM
/* 90 - 100 excellent
80 - 89 very Good
70 - 79 Good
60 - 69 Average
50 - 59 Credit
40 - 49 fail */

let score = 98.8;

if(score >= 0 && score <=100){
    

/* else {
    console.log("Score out of range"); 
}*/

if(score >=90 && score<=100){
    console.log("Excellent");
}

else if(score >=80 && score <=89)
{
    console.log("Very Good");
}

else if(score >= 70 && score <=79){

    console.log("Good");
}

else if(score >= 60 && score <= 69){
    console.log("Average");
}
else if(score >= 50 && score <= 59){

    console.log("Credit");
}
else if(score >= 40 && score >= 49){

    console.log("Pass");
}

else if(score <= 39 && score >= 0){
    console.log("Fail");
}
}
else{
    console.log("Score is out of range");
}

// FUNCTIONS

//declaring a function

/* let x = 3;
let y = 7; */

function sum(x,y) 
{ 

    console.log(x*y);
    //return x+y
}
sum(9,12)
 //console.log(sum());