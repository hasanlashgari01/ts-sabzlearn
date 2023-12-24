var sum = function (num1, num2) {
    return num1 + num2;
};
console.log(sum(5, 3));
// void => have'nt return
var logger = function (param) {
    console.log("Result => ", param);
};
logger("Sabzlearn");
var logger2 = function (param) {
    console.log("Result 2 => ", param);
    return undefined;
};
logger2("Sabzlearn");
