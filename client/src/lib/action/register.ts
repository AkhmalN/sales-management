"use server";

import { postRequest } from "../../helpers/api";
import { FormDataRegister } from "../types/zod/registes";

export type TClientRegister = {
  data: TClientRegister | PromiseLike<TClientRegister>;
  status: boolean;
  message: string;
  user: {
    username: string;
    email: string;
  };
};

export async function registerUser(
  formData: FormDataRegister
): Promise<TClientRegister> {
  try {
    const response = await postRequest<TClientRegister>({
      url: "/auth/register",
      data: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        username: formData.username,
        email: formData.email,
        age: formData.age,
        password: formData.password,
      },
    });
    return response;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}
