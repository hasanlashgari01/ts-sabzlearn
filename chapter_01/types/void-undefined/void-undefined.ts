const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(sum(5, 3));

// void => have'nt return
const logger = (param: string): void => {
  console.log("Result => ", param);
};

logger("Sabzlearn");

const logger2 = (param: string): undefined => {
  console.log("Result 2 => ", param);
  return undefined;
};

logger2("Sabzlearn");
