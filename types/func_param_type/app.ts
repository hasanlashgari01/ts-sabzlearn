function isLogin(username: string, password: string | number): boolean {
    if (username === "admin" && password === "admin") {
        return true;
    } else {
        return false;
    }
}

console.log(isLogin("admin", "admin"));
