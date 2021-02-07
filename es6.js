//ES6 -> EcmaScript 2015 -> Newer JavaScript version
//Object Descructuring
let person = {
    name: 'Ironhacker',
    age: 25,
    favoriteMusic: 'Metal'
};

let { name, age, favoriteMusic } = person;

//let name = person.name;
console.log(`The name is ${name}`);
console.log(`The age is ${age}`);
console.log(`The music is ${favoriteMusic}`);


//1. Desctructure the following object
let data = {
    firstName: 'miguel',
    address: 'rua de cima'
}

let { firstName, address } = data;
console.log(`firstname ${firstName}`);

let person2 = {
    name: 'Ironhacker',
    age: 25,
    favoriteMusic: 'Metal'
};

let { name: myName, age: myAge } = person2;
//ES5
//=> let myName = person2.name;
console.log(myName);

//Arrays Descruturing
const campuses = ['madrid', 'barcelona', 'miami'];

const [firstCampus, secondCampus, thirdCampus] = campuses;

console.log(`The first campus is: ${firstCampus}`);

const students = ['Joao', 'Vanderlei', 'Mario'];
const [,secondStudent] = students;
console.log(secondStudent);
const [,,bananas] = students; //=> var bananas = students[2];
console.log(bananas);

//Spread operator
const reptiles = ['snake', 'lizard', 'alligator'];
const mammals = ['puppy', 'kitten', 'bunny'];

//Copies the two arrays into another array
const animals = [...reptiles, ...mammals];
console.log(animals);

const names = ['joao', 'vanderlei,', 'marcos'];

//Create a newArray based on names with one more name
//We cannot copy like this:
    //let newNames = names;
    //newNames.push('guilherme');
//Proper copies the content of the names array
let newNames = [...names];
newNames.push('mario');
console.log(names);
console.log(newNames);

//Copy array
//- spread
//- slice
//- map

//Rest operator ...
function add(a, b, c) {
    let sum = a + b + c;
    return sum;
}

//add(1, 2, 3);
add(1, 2, 3, 4);
function addRest(...numbers) {
    //number is now an array on parameters
    console.log(numbers.length);
    let sum = 0;
    for (let number of numbers) {
        sum+= number;
    }
    return sum;
}

//addRest(1);
addRest(1, 2);
add(1, 2, 3);




