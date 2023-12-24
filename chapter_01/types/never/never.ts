let res: null = null;
let res2: undefined = undefined;
let num: 1 | 2 = 1;

type Ali = { id: 1; name: "ali"; age: 20 };
type Amin = { id: 1; name: "amin"; age: 24 };
type Admins = Ali | Amin;

const adminLoginHandler = (admin: Admins) => {
  switch (admin.name) {
    case "ali":
      return "ali login shod";
    case "amin":
      return "amin login shod";
  }
};
