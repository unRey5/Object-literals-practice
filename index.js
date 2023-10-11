const person = {
    name: 'Daniel Odey',
    age: 29,
    job: 'Web Developer',
    isAdmin: true,
    address: {
        street: '1123 Crenshaw Ave', 
        state: 'California',
        Country: 'United States of America'
    }

};


let c;

c = person.age;

console.log(c);

c = person['name'];

console.log(c);

// delete person.age;

console.log(c);

person.hasChildren = 'true';

console.log(person);

c = person.address.Country;

console.log(c);

person.greet = function () {
    console.log(`Hello I am ${this.name}, a ${this.age} years old ${this.job}.`);
}

person.greet();


let r;

const todo = new Object();

todo.name = 'Dante';
todo.id = 'second';

r = todo;


console.log(r);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };

console.log(obj3);

let h;
const todo2 = [
    {id:1, name:'Bread and tea'},
    {id:2, name:'Spaghetti'},
    {id:3, name:'Burger'},
];

h = todo2;

console.log(h);

h = todo2[1].name;

console.log(h);


h = Object.keys(todo2).length;

console.log(h);


h = Object.values(todo2);

console.log(h);

//destructuring = pulling variables out of the object.

const todo3 = {
    id: 1,
    title: 'Top of the day'
}

const { title } = todo3;

console.log(title);

//object challenge

//Create an array of objects called `library`. Add 3 objects with a property of `title`, `author`, `status`. Title and author should be strings (whatever value you want) and status should be another object with the properties of `own`, `reading` and `read`. Which should all be boolean values. For all status, set `own` to `true` and `reading` and `read` to false.

let b;

const library = [
    {
        title: 'My object assignment',
        author: 'Daniel Defoe',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: 'My object assignment',
        author: 'Tyron Lannister',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: 'My object assignment',
        author: 'Martin Odegaard',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
];

console.log(library);

//You finished reading all of the books. Set the `read` value for all of them to `true`. Do not edit the initial object. Set the values using dot notation.
library[0].status.read = 'True';
library[1].status.read = 'True';
library[2].status.read = 'True';


//Destructure the title from the first book and rename the variable to `firstBook`


library[0].title = 'Firstbook';


console.log(library);

//Turn the library object into a JSON string. There is a specific function that we looked at in the last section that we can use to do this.
const jts = JSON.stringify(library);

console.log(jts);
