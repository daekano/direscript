"use strict";
//Forecast is 294 Kelvin
var kelvin = 45;
//Kelvin to Celsius
var Celsius = (kelvin - 273);
//Celsius to Fahrenheit
var Fahrenheit = (Celsius * (9 / 5) + 32);
//Sets decimal to round down to nearest integer
Fahrenheit = (Math.floor(Fahrenheit));
console.log("The temperature is " + Fahrenheit + " degrees Fahrenheit.");
