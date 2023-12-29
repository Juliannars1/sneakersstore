import { Request, Response } from "express";
import { getUsers, getUserbyId, insertUser } from "../services/users";
import { catchAsync } from "../utils/catchedAsync";

const getAllUsers = catchAsync(async (_req: Request, res: Response) => {
  const clients = await getUsers();
  res.send(clients);
});

const getUser = catchAsync(async ({ params }: Request, res: Response) => {
  const { id } = params;
  const client = await getUserbyId(id);
  res.send(client);
});

const createUser = catchAsync(async ({ body }: Request, res: Response) => {
  const newUser = await insertUser(body);
  res.send(newUser);
});

export { getAllUsers, getUser, createUser };
