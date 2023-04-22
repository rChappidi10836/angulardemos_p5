"use strict";
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
function greet() {
    console.log("HEllo");
}
greet();
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 4));
//optional parameter
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(5, 5));
console.log(add(2, 7, 1));
//default parameter
function expo(value, exponent = 1) {
    return value ** exponent;
}
console.log(expo(2, 3));
console.log(expo(2, 4));
console.log(expo(2, 5));
console.log(expo(2));
let x = "find lenght";
console.log("x lenght =" + x.length);
