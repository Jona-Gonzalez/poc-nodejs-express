import { Request, Response } from 'express';

const getAllProducts = (req: Request, res: Response) => {
  res.send('get all products');
};

export { getAllProducts };
