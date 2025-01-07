import axios from "../utils/axios";

type TGetRequest = {
  url: string;
  params: {
    page: number;
    size: number;
  };
};

type TPostRequest = {
  url: string;
  data: Record<string, any>;
  params?: Record<string, any>;
};

type TDeleteRequest = {
  url: string;
};

type TPutRequest = {
  url: string;
  data: Record<string, any>;
  params?: Record<string, any>;
};

export const getRequest = async <T>({
  url,
  params = { page: 1, size: 10 },
}: TGetRequest): Promise<T> => {
  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error: any) {
    return error;
  }
};

export const postRequest = async <T>({
  url,
  data = {},
  params = {},
}: TPostRequest): Promise<T> => {
  try {
    const response = await axios.post<T>(url, data, {
      params,
    });
    return response.data;
  } catch (error: any) {
    return error.response;
  }
};

export const deleteRequest = async ({ url }: TDeleteRequest): Promise<void> => {
  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error: any) {
    return error;
  }
};

export const putRequest = async ({
  url,
  params = {},
  data = {},
}: TPutRequest): Promise<void> => {
  try {
    const response = await axios.put(url, data, { params });
    return response.data;
  } catch (error: any) {
    return error;
  }
};
