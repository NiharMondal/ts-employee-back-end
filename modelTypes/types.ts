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
export type LoginRequest = {
  email: string;
  password: string;
};
//login response from server
export type LoginResponse = {
  user: LoginRequest;
  token: string;
};
//login user types extends with one extra property username
export type RegisterRequest = {
  username: string;
} & LoginRequest;

//
export type RegisterResponse = {
  user: RegisterRequest;
  token: string;
};
