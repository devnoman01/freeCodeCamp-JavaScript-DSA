// write concise object literal declaration using object property shorthand

// normal declaration
const getMousePosition1 = (x, y) => ({
    x: x,
    y: y
});

// object property shorthand declaration
const getMousePosition2 = (x, y) => ({ x, y });


const createPerson1 = (name, age, gender) => {
    return {
      name: name,
      age: age,
      gender: gender
    };
};

// upper function declared in shorthand
const createPerson2 = (name, age, gender) => {
    return {name, age, gender};
};