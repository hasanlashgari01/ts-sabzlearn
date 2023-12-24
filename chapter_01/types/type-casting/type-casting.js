var test = "sabzlearn";
var whatIsThis = 20;
var siteName = test; // way 1
var siteTitle = test; // way 2
// console.log(siteName);
// console.log(siteTitle);
// console.log((whatIsThis as number)++);
// ! DOM
// way 1
var link = document.querySelector(".link");
// way 2
var inputElem = document.querySelector(".input");
// way 3
var btn = document.querySelector(".btn");
var title = document.querySelector(".title");
// console.log((title as HTMLHeadingElement).innerHTML);
window.addEventListener("DOMContentLoaded", function () {
    title.textContent = "TypeScript";
});
