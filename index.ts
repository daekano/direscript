// Forecast is 294 Kelvin
const kelvin = 45;

// Kelvin to Celsius
let Celsius = (kelvin - 273);

// Celsius to Fahrenheit
let Fahrenheit = (Celsius * (9 / 5) + 32);

// Sets decimal to round down to nearest integer
Fahrenheit = (Math.floor(Fahrenheit));

// tslint:disable-next-line
console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit.`);
