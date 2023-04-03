import { Request } from "express";


export type ReqQuery = {
  gender?: string;
  role?: string;
  country?: string;
  status?: string;
  sort?: string;
  limit?: string;
  page?:string
};


