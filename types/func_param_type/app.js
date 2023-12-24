"use strict";
function isLogin(username, password) {
    if (username === "admin" && password === "admin") {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLogin("admin", "admin"));
