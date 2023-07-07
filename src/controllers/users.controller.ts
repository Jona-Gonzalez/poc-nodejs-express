import { Request, Response } from 'express';
import { User } from '../model/User.model';

const getAllUsers = async (req: Request, res: Response) => {
  res.send('get all users');
};

const createUser = async (req: Request, res: Response) => {
  const { name, lastName, email } = req.body;
  console.log(req.body);
  try {
    const user = new User({
      name,
      lastName,
      email,
    });

    await user.save();

    res.send(`new user${user}`);
  } catch (error: any) {
    res.send({ error: error?.message });
  }
};

export { getAllUsers, createUser };
