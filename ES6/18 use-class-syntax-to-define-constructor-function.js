// use class syntax to define constructor function

var SpaceShuttle1 = function(targetPlanet){
    this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle1('Jupiter');
console.log(zeus.targetPlanet);

// class syntax simply replaces the constructor function creation
class SpaceShuttle2 {
    constructor(targetPlanet) {
      this.targetPlanet = targetPlanet;
    }
  }
const mars = new SpaceShuttle2('Mars');
console.log(mars.targetPlanet);


class Vegetable {
    constructor(name){
      this.name = name;
    }
}
  
const carrot = new Vegetable('carrot');
console.log(carrot.name); 