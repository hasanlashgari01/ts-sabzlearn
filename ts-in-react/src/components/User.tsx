import { useState } from "react";

type UserType = {
    username: string;
    email: string;
};

const User = () => {
    const [user, setUser] = useState<UserType>({} as UserType);

    return (
        <div>
            <span>{user.username}</span>
            <span>{user.email}</span>
        </div>
    );
};

export default User;
