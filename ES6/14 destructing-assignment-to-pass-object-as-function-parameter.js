// destructing assignment to pass an object as function parameter

const profileInfo = {
    name: "Tom Holand", age: 37, location: "USA"
};

// we can destructure the object in a function argument itself
const profileUpdate = (profileData) => {
    
    const { name, age, location } = profileData;
    console.log(name, age, location);               // output: Tom Holand 37 USA

}
profileUpdate(profileInfo);


// this can also be done in-place
const profileUpdate2 = ({ name, age, location }) => {
    
    console.log(name, age, location);               // output: Tom Holand 37 USA

}
profileUpdate2(profileInfo);