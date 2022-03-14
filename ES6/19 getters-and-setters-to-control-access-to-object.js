// use getters and setters to control access to an object

class Book {
    constructor(author) {
      this._author = author;
    }

    // getter functions return (get) the value of an object's private variable.
    // without directly accessing the private variable.
    get writer() {
      return this._author;
    }

    // setter functions modify (set) the value of an object's private variable.
    // based on value passed info the setter function.
    // without directly accessing the private variable.
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);


class Thermostat{
    constructor(fahrenheit){
      this.fahrenheit = fahrenheit;
    }
    get temperature(){
      return 5/9 * (this.fahrenheit - 32);
    }
    set temperature(celsius){
      this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
  }
  
const thermos = new Thermostat(76);         // Setting in Fahrenheit scale
let temp = thermos.temperature;             // 24.44 in Celsius
thermos.temperature = 26;                   // 26 in Celsius
temp = thermos.temperature;