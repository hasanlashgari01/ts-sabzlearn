"use strict";
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Teacher"] = 2] = "Teacher";
})(Role || (Role = {}));
const user = {
    id: 1,
    name: "Hasan",
    age: 22,
    role: Role.Admin,
};
if (user.role === Role.Admin) {
    console.log("Access");
}
else {
    console.log("Don't Access");
}
