type Admin = {
    name: string;
    email: string;
};

type Seller = {
    name: string;
    age: number;
};

const newUser: Admin & Seller = {
    name: "Ali",
    email: "ali@gamil.com",
    age: 23,
};
