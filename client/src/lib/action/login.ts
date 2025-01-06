"use server";

import { postRequest } from "../../helpers/api";
import { FormDataLogin } from "../types/zod/login";

export type TClientLogin = {
  data: TClientLogin | PromiseLike<TClientLogin>;
  status: boolean;
  message: string;
  user: {
    username: string;
    email: string;
  };
  token: {
    access_token: string;
  };
};

export async function login(formData: FormDataLogin): Promise<TClientLogin> {
  try {
    const response = await postRequest<TClientLogin>({
      url: "/auth/login",
      data: formData,
    });
    return response;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}
