import { createSlice } from "@reduxjs/toolkit";
import { IUserResponse } from "../types/clients";
import {
  addUserData,
  deleteUserData,
  getUsersData,
  updateUserData,
} from "../lib/api/user";
import { IUser } from "../types/users";

const initialState = {
  users: [] as IUserResponse["data"],
  status: {
    idle: true,
    loading: false,
    success: false,
    failed: false,
  },
  error: null as string | null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersData.pending, (state) => {
        state.status = {
          idle: false,
          loading: true,
          success: false,
          failed: false,
        };
      })

      .addCase(getUsersData.fulfilled, (state, action) => {
        state.status = {
          idle: false,
          loading: false,
          success: true,
          failed: false,
        };
        state.users = action.payload.data;
      })

      .addCase(getUsersData.rejected, (state, action) => {
        state.status = {
          idle: false,
          loading: false,
          success: false,
          failed: true,
        };
        state.error = action.error.message ?? null;
      })
      .addCase(addUserData.fulfilled, (state, action) => {
        state.users.push(action.payload.data);
      })

      .addCase(updateUserData.fulfilled, (state, action) => {
        const updatedUser = action.payload;

        const index = state.users.findIndex(
          (user: IUser) => user.id_user === updatedUser.id_user
        );

        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })

      .addCase(deleteUserData.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.payload);
      });
  },
});

export default usersSlice.reducer;
