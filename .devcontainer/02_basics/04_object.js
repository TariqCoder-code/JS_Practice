// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id=1012
tinderUser.name = "MXXXXN"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email:"abc@gmail.com",
    fullname : {
        userfullname: {
            firstname:"Mohd",
            lastname:"Tariq"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

//Objects Joining

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
//ist way
// const obj3 = Object.assign({},obj1,obj2)

//Preffered way using spread as we did in aaray
const obj3 = {...obj1,...obj2}
console.log(obj3);

const users = [
    {
        id: 101,
        email: "abc@gmail.com"
    },
    {
        id: 102,
        email: "cde@gmail.com"
    },
    {
        id: 103,
        email: "xyz@gmail.com"
    }
]

console.log(users[0].email);
// console.log(tinderUser);
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

//we can also check that it object has this property by passing in function return boolean
console.log(tinderUser.hasOwnProperty('isLoggedIn'));