import { NextFunction, Request, Response } from 'express';
import { findById } from '../services/findById.service';
import { IRequestById } from '../types/request.interface';

const isAdmin = async (
  req: IRequestById,
  res: Response,
  next: NextFunction
) => {
  try {
    const { ID } = req.params;
    const user = await findById(ID);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (!user.admin) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    next();
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export { isAdmin };
