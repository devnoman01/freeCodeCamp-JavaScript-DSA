// destructuring assignment to assign variables from objects

const user = { name: 'John Doe', age: 34 };
const { name: userName, age: userAge } = user;

console.log(userName);
console.log(userAge);

// Destructuring allows to assign a new variable name when extracting values.
// It is done by putting the new name after a colon when assigning the value.

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;

console.log(highToday);
console.log(highTomorrow);