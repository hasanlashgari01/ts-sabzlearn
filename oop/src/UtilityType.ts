type User1 = {
  username: string;
  email: string;
  age?: number;
};

type Type1 = string | number | boolean | null | undefined;

type RequiredUser = Required<User1>;
type ReadOnlyUser = ReadOnly<User1>;
type PartialUser = Partial<User1>;
type PickUser = Pick<User1, "username" | "email">;
type Type2 = NonNullable<Type1>;
