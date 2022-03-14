// destructuring assignment to assign variables from nested objects

const user = {
    johnDoe: { 
      age: 34,
      email: 'johnDoe@freeCodeCamp.com'
    }
};

// variable with same name
const { johnDoe: { age, email }} = user;
console.log(age);
console.log(email);

// variable with different name
const { johnDoe: { age: userAge, email: userEmail }} = user;
console.log(userAge);
console.log(userEmail);


const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};
const {today:{low: lowToday, high: highToday}} = LOCAL_FORECAST;
console.log(lowToday);
console.log(highToday);