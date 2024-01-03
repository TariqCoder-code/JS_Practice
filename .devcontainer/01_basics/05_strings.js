const name = "Tariq"
const repoCount = 4

//not good way
//console.log(name + repoCount + " value")

//Now we use like this it is good way
console.log(`Hello my name is ${name} and my repocount is ${repoCount}`)

const gameName = new String('tariq-67-com')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('q'));
console.log(gameName.slice(-9,3)); //ar

const newString = "  Tariq   "
console.log(newString.trim())

const url = "https://payments.3001/sbx%20/dashboard"
console.log(url.replace("%20", ""));
console.log(url.includes('Tariq'));
console.log(gameName.split('-'));