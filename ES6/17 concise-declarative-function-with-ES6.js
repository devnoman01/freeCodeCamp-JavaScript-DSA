// write concise declarative function with ES6

const person1 = {
    name: "Taylor",
    sayHello: function() {
      return `Hello! My name is ${this.name}.`;
    }
};

// defining functions in object by removing colon & function keyword
const person2 = {
    name: "Taylor",
    sayHello() {
      return `Hello! My name is ${this.name}.`;
    }
};


const bicycle1 = {
    gear: 2,
    setGear: function(newGear) {
      this.gear = newGear;
    }
};
bicycle1.setGear(3);
console.log(bicycle1.gear);

const bicycle2 = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
};
bicycle2.setGear(4);
console.log(bicycle2.gear);