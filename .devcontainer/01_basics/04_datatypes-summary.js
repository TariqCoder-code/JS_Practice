// Primitive

//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue =100.3

const isLoggedIn = false
const outsideTemp = null

const id = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 3456543576654356754 //show type number
const bigInt = 3456543576654356754n //show type bigint

console.log(typeof bigNumber);
console.log(id===anotherId);
let userEmail;

// Reference (Non-Primitive)

// Array
const heroes = ["superman","shaktiman", "batman"]

//Objects
let myObj = {
    name : "Tariq",
    age : "27"
}
 
//Functions
const myFunction = function(){
    console.log("Hello  world!!");
}

// Stack(Primitive) and Heap(Non-Primitive)

let myName = "Tariq"
let myanotherName = myName
myanotherName = "Monty"

console.log(myName);
console.log(myanotherName);

let userOne = {
    email : "xyz@gmail.com",
    upi : "xyz@ybl"
}

let userTwo = userOne

userTwo.email="abc@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

/*
in stack copy of variable passed which not affect original variable
whereas in Heap reference is passed which can cause change in original variable value
*/