import { IUser } from "../../../types/users";
import { serverRequest } from "../../../utils/axios";

export const getUsers = async (): Promise<IUser[]> => {
  try {
    const { data } = await serverRequest.get("/users?page=1&size=10&sort=ASC");
    return data.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
