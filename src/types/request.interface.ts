import { Request } from 'express';
import { IUser } from './user.interface';

export interface UserRequest extends Request {
  body: IUser;
}

export interface IRequestById extends Request {
  params: {
    ID: string;
  };
}
