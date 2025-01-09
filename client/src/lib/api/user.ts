import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from "../../helpers/api";
import { IUserResponse } from "../../types/clients";
import { IUser } from "../../types/users";

export const getUsersData = createAsyncThunk(
  "users/fetch",
  async ({
    page = 1,
    size = 10,
    sort = "ASC",
  }: {
    page: number;
    size: number;
    sort: string;
  }): Promise<IUserResponse> => {
    try {
      const response = await getRequest<IUserResponse>({
        url: `/users?page=${page}&size=${size}&sort=${sort}`,
      });
      console.log(response);
      return response;
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch users data");
    }
  }
);

export const addUserData = createAsyncThunk(
  "user/add",
  async (user: IUser): Promise<IUserResponse> => {
    try {
      const newUser = await postRequest<IUserResponse>({
        url: "/user",
        data: user,
      });
      return newUser;
    } catch (error: any) {
      throw new Error(error);
    }
  }
);

export const updateUserData = createAsyncThunk(
  "user/update",
  async ({ user, id }: { user: IUser; id: string }): Promise<IUser> => {
    try {
      const updatedUser = await putRequest<IUser>({
        url: "/user",
        params: { id },
        data: user,
      });
      return updatedUser;
    } catch (error: any) {
      throw new Error(error);
    }
  }
);

export const deleteUserData = createAsyncThunk(
  "user/delete",
  async ({ id }: { id: string }): Promise<string> => {
    try {
      await deleteRequest({ url: "/user", params: { id } });
      return id;
    } catch (error: any) {
      throw new Error(error);
    }
  }
);
