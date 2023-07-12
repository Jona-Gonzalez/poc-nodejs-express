import { User } from '../model/User.model';

export const findById = async (id: string) => {
  const user = await User.findById(id);
  return user;
};
