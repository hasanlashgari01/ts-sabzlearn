// ! Example 1
function echo<Type>(param: Type): Type {
  return param;
}

const resultEcho = echo<string>("TypeScript");
// console.log("🚀 ~ resultEcho:\n", resultEcho.length);

// ! Example 2 (Extends)
function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  // return { ...obj1, ...obj2 };
  return Object.assign(obj1, obj2);
}

const mergedObj = merge<{ name: string }, { age: number; email: string }>(
  { name: "Ali" },
  { age: 23, email: "ali@gmail.com" }
);
// console.log("🚀 ~ mergedObj:\n", mergedObj);

// ? Extends with Interface

interface Width {
  length: number;
}

function echoTest<T extends Width>(param: T): T {
  return param;
}

// ! Practice 1
interface Type {
  length: number;
}

function describe<T extends Type>(param: T): [string, T] {
  let text = "zero (0) items";

  if (param.length) {
    text = `${param.length} items`;
  }

  return [text, param];
}

const resultGenerics = describe("Sabzlearn.ir");
console.log("🚀 ~ resultGenerics:", resultGenerics);
const resultGenerics2 = describe([12, 14, 15]);
console.log("🚀 ~ resultGenerics2:", resultGenerics2);

// ! Class
// * Example 1
class HtmlElem<T> {
  constructor(private element: T) {
    this.element = element;
  }

  getElement() {
    return this.element;
  }
}

const elem = document.createElement("input");
const usernameInput = new HtmlElem<HTMLInputElement>(elem);

// ! Interface
interface Result<T> {
  data: T | null;
  error: string | null;
}

interface Course<T> {
  title: string;
  price: number;
}

const fetchData = <T>(url: string): Result<T> => {
  return { data: null, error: null };
};
