//user type
export type TUser = {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  gender: string;
  age: string;
  role: string;
};

//login user types
export type LoginInfo = {
  email: string;
  password: string;
};

//login user types extends with one extra property username
export type RegisterInfo = {
  username: string;
} & LoginInfo;
