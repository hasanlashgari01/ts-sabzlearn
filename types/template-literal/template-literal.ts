function setCssProperty(param: `${number}px` | `${number}em` | `${number}rem`) {
    return param;
}

console.log(setCssProperty("12rem"));
console.log(setCssProperty("15px"));
