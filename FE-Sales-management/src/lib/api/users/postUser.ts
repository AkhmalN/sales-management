import { IUser } from "../../../types/users";
import { serverRequest } from "../../../utils/axios";

export const addUser = async (user: IUser) => {
  try {
    const newUser = await serverRequest.post("/user", {
      user,
    });
    console.log(newUser);
  } catch (error: any) {
    throw new Error(error);
  }
};
