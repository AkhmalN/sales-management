import axios from "../utils/axios";

type TGetRequest = {
  url: string;
  params?: {
    page: number;
    size: number;
    sort: string;
  };
};

type TPostRequest = {
  url: string;
  data: Record<string, any>;
  params?: Record<string, any>;
};

type TDeleteRequest = {
  url: string;
  params?: Record<string, any>;
};

type TPutRequest = {
  url: string;
  data: Record<string, any>;
  params?: Record<string, any>;
};

export const getRequest = async <T>({ url }: TGetRequest): Promise<T> => {
  try {
    const response = await axios.get(url);
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

export const deleteRequest = async <T>({
  url,
  params = {},
}: TDeleteRequest): Promise<T> => {
  try {
    const response = await axios.delete<T>(url, { params });
    return response.data;
  } catch (error: any) {
    return error;
  }
};

export const putRequest = async <T>({
  url,
  params = {},
  data = {},
}: TPutRequest): Promise<T> => {
  try {
    const response = await axios.put<T>(url, data, { params });
    return response.data;
  } catch (error: any) {
    return error;
  }
};
