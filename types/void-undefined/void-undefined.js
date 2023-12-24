"use strict";
const sum = (num1, num2) => {
    return num1 + num2;
};
console.log(sum(5, 3));
// void => have'nt return
const logger = (param) => {
    console.log("Result => ", param);
};
logger("Sabzlearn");
const logger2 = (param) => {
    console.log("Result 2 => ", param);
    return undefined;
};
logger2("Sabzlearn");
