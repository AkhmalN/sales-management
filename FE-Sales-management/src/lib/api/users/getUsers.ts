import { serverRequest } from "../../../utils/axios";

export const getUsers = async () => {
  try {
    const response = await serverRequest.get("/users?sort=ASC");
    return response.data.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
