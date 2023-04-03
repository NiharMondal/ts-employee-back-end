//user type
export type TUser = {
  fullName: string;
  email: string;
  gender: string;
  age: number;
  salary: number;
  status: string;
  role: string;
  country: string;
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
