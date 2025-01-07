import { deleteRequest } from "../../../helpers/api";

export const deleteUserData = async ({ id }: { id: string }): Promise<void> => {
  try {
    const response = await deleteRequest({
      url: `/user/${id}`,
    });
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
};
