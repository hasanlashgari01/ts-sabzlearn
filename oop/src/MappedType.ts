type Optional<T> = {
  [key in keyof T]?: T[key];
};

type ReadOnly<T> = {
  readonly [key in keyof T]?: T[key];
};
