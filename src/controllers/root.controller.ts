import { Request, Response } from 'express';
import { User } from '../model/User.model';

const homePage = async (req: Request, res: Response) => {
  const users = await User.find();

  res.render('index', {
    users,
  });
};

export { homePage };
