interface User {
  name: string;
  email: string;
  age: number;
}

const isLogin = (user: User): boolean => {
  if (user.name === "hasan") {
    return true;
  } else {
    return false;
  }
};

const userNumber = 30;

export { isLogin, userNumber };
