import { QueryOptions } from 'mongoose';
import { User } from '../model/User.model';

export const findByIdAndUpdate = async (
  id: string,
  update: Object,
  options: QueryOptions<any>
) => {
  const user = await User.findByIdAndUpdate(id, update, options);

  return user;
};
