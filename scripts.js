//Use this file to implement Part One of your project

var animal = {};

animal.username = 'Tee';
animal['tagline'] = 'Sup!';

var noises = [];
animal.noises = noises;

console.log(animal);

var counter = 0;
var loop = function(object) {
    
    for(var key in object) {
      if(key === 'username') {
        console.log(`Hi my name is ${animal[key]}`);
      } else {
        console.log(`I like to say ${animal[key]}!`);
      }
      counter++;    
    }
    
};
