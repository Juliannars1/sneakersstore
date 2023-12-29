import { User } from "../interface/user.interface";
import { UserModel } from "../models/users";

const getUsers = async () => {
  const responseUsers = await UserModel.find();
  return responseUsers;
};

const getUserbyId = async (id: string) => {
  const responseUser = await UserModel.find({ user_id: id });
  return responseUser;
};
const insertUser = async (userData: User) => {
  const responseInsert = await UserModel.create(userData);
  return responseInsert;
};

export { getUsers, getUserbyId, insertUser };
