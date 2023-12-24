"use strict";
let test = "sabzlearn";
let whatIsThis = 20;
let siteName = test; // way 1
let siteTitle = test; // way 2
// console.log(siteName);
// console.log(siteTitle);
// console.log((whatIsThis as number)++);
// ! DOM
// way 1
const link = document.querySelector(".link");
// way 2
const inputElem = document.querySelector(".input");
// way 3
const btn = document.querySelector(".btn");
const title = document.querySelector(".title");
// console.log((title as HTMLHeadingElement).innerHTML);
window.addEventListener("DOMContentLoaded", () => {
    title.textContent = "TypeScript";
});
