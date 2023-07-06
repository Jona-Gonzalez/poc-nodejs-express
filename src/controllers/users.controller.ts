import { Request, Response } from 'express';

const getAllUsers = (req: Request, res: Response) => {
  res.send('get all users');
};

export { getAllUsers };
