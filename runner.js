var Food = require('./food');
var Hero = require('./hero');
var Villain = require('./villain');
var Princess = require('./princess');
var Rat = require('./rat');

var steak = new Food( "steak", 50 );
var honey = new Food( "honey", 30 );
var cheese = new Food( "cheese", 25 );
var hercules = new Hero( "hercules", "steak" );
var villain = new Villain();
var princess = new Princess();
var rat = new Rat();

console.log( "The story begins....");
console.log();
console.log();

console.log("the rat touches the cheese:");
rat.touch( cheese );
console.log();

console.log( "hercules eats some honey:");
hercules.eat( honey );
console.log();

console.log( "hercules eats some steak:");
hercules.eat( steak );
console.log();

console.log( "hercules eats some poisoned cheese:");
hercules.eat( cheese );
console.log();

console.log( "herculese recognises the villain:");
hercules.save( villain );
console.log();

console.log( "hercules saves the princess:");
hercules.save( princess );
console.log();
console.log( "Hercules' health = ", hercules.health );

console.log( "villain puts on disguise:");
villain.donDisguise();
console.log();

console.log( "villain hurts hercules");
hercules.save( villain );
console.log( "Hercules' health = ", hercules.health );
console.log();

console.log();
console.log("THE END");
