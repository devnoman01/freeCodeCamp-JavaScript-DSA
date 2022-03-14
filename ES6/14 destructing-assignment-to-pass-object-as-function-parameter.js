// destructing assignment to pass an object as function parameter

const profileData = {
    name: "Tom Holand", age: 37, location: "USA"
};

// we can destructure the object in a function argument itself
const profileUpdate = (profileData) => {
    
    const { name, age, location } = profileData;
    console.log(name, age, location);               // output: Tom Holand 37 USA

}
profileUpdate(profileData);


// this can also be done in-place
const profileUpdate2 = ({ name, age, location }) => {
    
    console.log(name, age, location);               // output: Tom Holand 37 USA

}
profileUpdate2(profileData);


const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
// destructuring assignment within the argument to the function half to send only max and min inside the function.
const half = ({max, min}) => (max + min) / 2.0;
