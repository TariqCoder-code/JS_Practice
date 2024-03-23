//singleton
//Object.create

//Object  literals
const mySym = Symbol("Key1")

const JsUser = {
    name : "Tariq",
    "full name" : "Tariq Imran",
    [mySym]: "myKey1", //this is the syntax for symbol
    age: 18,
    location: "Delhi",
    email: "tariq@xyz.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
}

//console.log(JsUser.email);
//console.log(JsUser.name)
console.log(JsUser["full name"]);
console.log(typeof(JsUser["full name"]));
console.log(JsUser[mySym]);
console.log(typeof(JsUser[mySym]));
//console.log(JsUser[email]); we cannot access object element like this.

JsUser.email = "tariq@abc.in";
// Object.freeze(JsUser);
JsUser.email="tariq@cde.in";
console.log(JsUser);

//function
JsUser.greeting = function() {
    console.log(`Hello user ${JsUser.name} !`);
    console.log(`Hello user ${this.name} !`);
}

JsUser.greeting();