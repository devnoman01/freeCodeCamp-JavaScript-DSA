// destructuring assignment to extract values from objects

const user = { name: 'John Doe', age: 34 };

// const name = user.name;
// const age = user.age;
// console.log(name, age);             // output: John Doe 34

const { name, age } = user;
console.log(name, age);             // output: John Doe 34


const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

const {today} = HIGH_TEMPERATURES;
const {tomorrow} = HIGH_TEMPERATURES;
console.log(today, tomorrow);       // output: 77 80