import { IUser } from "../../../types/users";
import { serverRequest } from "../../../utils/axios";

export const getUsers = async (): Promise<IUser[]> => {
  try {
    const { data } = await serverRequest.get("/users?sort=ASC");
    return data.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
