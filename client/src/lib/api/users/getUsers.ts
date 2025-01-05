import { getRequest } from "../../../helpers/api";
import { IClientGetResponse } from "../../../types/clients";

export const getUsersData = async ({
  params,
}: {
  params: { page: number; size: number };
}): Promise<IClientGetResponse> => {
  try {
    const response = await getRequest<IClientGetResponse>({
      url: `/users?page=${params.page}&size=${params.size}&sort=ASC`,
      params,
    });
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
};
