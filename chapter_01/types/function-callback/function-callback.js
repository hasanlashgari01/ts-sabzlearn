var sum = function (num1, num2, callback) {
    var result = num1 + num2;
    callback(result);
};
sum(12, 13, function (result) {
    console.log(result);
});
