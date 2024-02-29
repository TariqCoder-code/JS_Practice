const marvel_heroes = ["thor", "Iroman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(typeof marvel_heroes);
// console.log(marvel_heroes[3][1]); //accessing flash 

//array joining ways
let all_heroes = marvel_heroes.concat(dc_heroes)  //this is not recommended
console.log(all_heroes);

let all_new_heroes = [...marvel_heroes, ...dc_heroes] //this is used most you can add many array at a time
console.log(all_new_heroes);

let another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

let real_array = another_array.flat(Infinity) // spread all  array elements in one array
console.log(real_array);

console.log(Array.isArray("Tariq"));
console.log(Array.from("Tariq"));
console.log(Array.from({name:"Tariq"})); //interesting we will look this type in future

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1, score2, score3)); // make a array with these elements