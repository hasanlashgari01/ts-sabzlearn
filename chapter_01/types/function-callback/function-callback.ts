const sum = (num1: number, num2: number, callback: (param) => void): void => {
  const result = num1 + num2;
  callback(result);
};

sum(12, 13, result => {
  console.log(result);
});
