"use strict";
const sum = (num1, num2, callback) => {
    const result = num1 + num2;
    callback(result);
};
sum(12, 13, result => {
    console.log(result);
});
