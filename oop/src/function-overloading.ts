type CombineParam = string | number;

// ! Function Overloading
function addParams(param1: number, param2: number): number;
function addParams(param1: string, param2: string): string;

const addParams = (param1: Combine, param2: Combine) => {
  if (typeof param1 === "string" && typeof param2 === "string") {
    return param1.toString() + param2.toString();
  } else if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  }
};

const result = addParams("Hasan", "Amin");
const calc = addParams(20, 12);

console.log(result.split(""));
console.log(calc);
