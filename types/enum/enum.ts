enum Role {
  Admin,
  User,
  Teacher,
}

const user: { id: number; name: string; age: number; role: Role } = {
  id: 1,
  name: "Hasan",
  age: 22,
  role: Role.Admin,
};

if (user.role === Role.Admin) {
  console.log("Access");
} else {
  console.log("Don't Access");
}
