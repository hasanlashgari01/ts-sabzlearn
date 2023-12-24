let test: unknown = "sabzlearn";
let whatIsThis: unknown = 20;

let siteName = test as string; // way 1
let siteTitle = <string>test; // way 2

// console.log(siteName);
// console.log(siteTitle);

// console.log((whatIsThis as number)++);

// ! DOM

// way 1
const link = document.querySelector(".link") as HTMLAnchorElement;
// way 2
const inputElem = <HTMLInputElement>document.querySelector(".input");
// way 3
const btn = document.querySelector(".btn")!;

const title = <HTMLInputElement>document.querySelector(".title");
// console.log((title as HTMLHeadingElement).innerHTML);

window.addEventListener("DOMContentLoaded", () => {
    title.textContent = "TypeScript";
});
