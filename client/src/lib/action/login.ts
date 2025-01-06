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
};

export async function login(formData: FormDataLogin): Promise<TClientLogin> {
  try {
    const response = await postRequest<TClientLogin>({
      url: "/auth/login",
      data: formData,
    });
    console.log(response);
    return response;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }

  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // return {
  //   status: true,
  //   data: {
  //     email: formData.email,
  //     username: "Enigma123",
  //     role: "user",
  //   },
  //   message: "Success login user",
  // };
}
