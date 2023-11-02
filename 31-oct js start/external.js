
console.log("external js");

//  console.log() is a function to 
// display the text in  the browser console.

console.log("hello world");

// 1. Concatenation of two string
console.log("Ankush"+" Shekhawat");

let firstName="ankush";
let no = 20;
console.log(firstName + no + " Acciojob");

//  2. template Literals

let population=8.5;
let city="Delhi";

// console.log(city + "has a population of "+population+" crores");
console.log(`${city} has a population of ${population} crores. -${firstName}`);
console.log(`${city} has a population of ${10*5} crores. -${firstName}`)


//  3. Mathematical calculation
let radius=5;
let perimeter=2*Math.PI*radius;
console.log(perimeter);
// math matical calculation
console.log(2*Math.PI*radius);


// 4. Boolean expressions
let num1=20;
let num2=10;

console.log(num1>num2);


// Data Types
// 1. String
let lastName="Shekahwat";
console.log(typeof lastName);

// 2. Number
let age=25;
console.log(age);
console.log(typeof age);

// 3. Boolean
let isStudent = true;
console.log(isStudent);
console.log(typeof isStudent);

// 4. Null
let address=null;
console.log(address);
// this address variable stores a null value,
// indicating the absence of a value. (Imp)
// It is commly used to represent an intentionally empty
// non existent value;


// 5. Undefined
let phoneNumber;
console.log(phoneNumber);
// this variable is declared but not assigned a values,
// resulting in an undefined data type.
// It is represnt the absence of an assigned value.



// 6. Object
let person={
    name:"Ankush Shelhawat",
    age: 22,
    ismillionare: false,
   
}


// 7. Array
let fruits=["Mango", "kiwi", "orange"];
console.log(fruits);

// 8. Date
let date = new Date();
console.log(date);


// 9. BigInt
let largeNumber = 567894379630878256791787408n;
console.log(largeNumber);



// Arithmatic Operations

// 1. Addition
let sum = 5+10;

// 2. Subtraction
let diff=10-2;

// 3. Multiplication
let product=5*10;

// 4. Division
let quotient=15/2;

// 5. Remainder(modulo)
let reminder = 10%3;
console.log(reminder);

// 6. Increment
let number=5;
// number++;

// Post increment
console.log(number++);

// Pre increment
console.log(++number);


// 7. Decrement

// Post decrement
console.log(number--);

// Pre decrement
console.log(--number);


// 8. Exponentation
let num3=2**4;
// 2^4
console.log(num3);
// console.log(Math.pow(2,4));


// 9. Unary Plus
// converts a string int a number
let a="10";
// let a="c";  
let b =+a;
console.log(b, "value of b");
console.log(typeof(b));

console.log(2+2);
console.log(2+"2");
console.log(2+(+"2"));


// 10. Unary Negation
let num4=-10;

let num5=-num4;

console.log(num5);


// Conditionals

// 1. If Statement

if(5>2){
    // if the comditional written stand true
   console.log("5 is greater than 2");
}

//  If Else Statement

if(5>20){
    // if the comditional written stand true
   console.log("5 is greater than 2");
}else{
    // if the condition false
    console.log("Acciojob");
}


let myage = 20;

if(myage >=18){
    console.log("you are eligible for vote");
}
else{
    console.log("you are not eligible for vote");
}


// 3. If-else if-else statement
let man_age=44;

if(man_age>65)
{
    console.log("You are a senior citizen");
}
else if(man_age > 18){
  console.log("You are a young adult");
}
else{
    console.log("you are a kid");
}


// 4. Ternary Operator
5>20 ? console.log("5 is greater than 2") : console.log("Acciojob");

let israining = true;
israining ? console.log("Take an umbrella") : console.log("Enoy the weather");


// 5. Switch Case
 let day =3;
 let dayname
 switch(day){
    
    case 1: dayname="Monaday";
    break;
    case 2: dayname="tuesday";
    break;
    case 3: dayname="Wednesday";
    break;
    case 4: dayname="Thursday";
    break;
    case 5: dayname="Friday";
    break;
    case 6: dayname="Saturday";
    break;
    case 7: dayname="Sunday";
    break;
    default:
        dayname="unknown input";
 }

 console.log(dayname);


// Nested if

let x=5;
if(x>0)
{
    if(x%2==0)
    {
        console.log(`${x} is a positive even number`);
    }
    else
    {
        console.log(`${x} is a positive odd number`); 
    }
}


//  Logical AND (&&) operator:

let age1 = 26;

let hasLichense = false;

if(age > 18 && hasLichense)
{
    console.log("You can drive");
}


// Logical OR (||) operator:
if(age > 18 || hasLichense)
{
    console.log("You can drive");
}

// Nullish coalescing Operator (??)
let username=null;
// let username="ankush";
let displayname=username?? "user";
console.log(displayname);

