import { Request, Response } from 'express';
import { User } from '../model/User.model';
import { IRequestById, UserRequest } from '../types/request.interface';
import { validationResult } from 'express-validator';
import { findById } from '../services/findById.service';

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error: any) {
    res
      .status(500)
      .send({ message: 'Internal server error', error: error?.message });
  }
};

const getUserByID = async (req: IRequestById, res: Response) => {
  const { ID } = req.params;
  try {
    const userFound = await findById(ID);

    res.status(200).json({
      message: 'User found',
      user: userFound,
    });
  } catch (error: any) {
    res
      .status(500)
      .send({ message: 'Internal server error', error: error?.message });
  }
};

const getUserAndEdit = async (req: IRequestById, res: Response) => {
  const errors = validationResult(req);
  const { ID } = req.params;

  try {
    const userFound = await findById(ID);

    if (!userFound) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    if (req.body.email && req.body.email !== userFound.email) {
      return res.status(400).json({ message: 'Email cannot be modified' });
    }

    const updatedUser = await User.findByIdAndUpdate(ID, req.body, {
      returnOriginal: false,
    });

    res.json({
      message: 'User edited',
      success: true,
      user: updatedUser,
    });
  } catch (error: any) {
    res
      .status(500)
      .send({ message: 'Internal server error', error: error?.message });
  }
};

const createUser = async (req: UserRequest, res: Response) => {
  try {
    const user = new User(req.body);
    await user.save();

    res.status(200).json({
      message: 'User created',
      success: true,
      user,
    });
  } catch (error: any) {
    res
      .status(500)
      .send({ message: 'Internal server error', error: error?.message });
  }
};

const deleteUser = async (req: IRequestById, res: Response) => {
  const { ID } = req.params;
  try {
    const user = await User.findByIdAndDelete(ID);

    if (user === null) {
      return res.json({
        message: 'User not found',
      });
    }

    res.status(200).json({
      message: 'User Deleted',
      success: true,
      user,
    });
  } catch (error: any) {
    res
      .status(500)
      .send({ message: 'Internal server error', error: error?.message });
  }
};

const loginUserAdmin = async (req: IRequestById, res: Response) => {
  const { ID } = req.params;

  try {
    const user = await findById(ID);
    res.status(200).json({
      message: 'User logged in',
      user,
    });
  } catch (error: any) {
    res
      .status(500)
      .send({ message: 'Internal server error', error: error?.message });
  }
};

export {
  getAllUsers,
  createUser,
  getUserByID,
  getUserAndEdit,
  loginUserAdmin,
  deleteUser,
};
