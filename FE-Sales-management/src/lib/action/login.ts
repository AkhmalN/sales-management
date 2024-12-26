"use server";

import { FormDataLogin } from "../types/zod/login";

export async function login(formData: FormDataLogin) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    status: true,
    data: {
      email: formData.email,
      username: "Enigma123",
      role: "user",
    },
    message: "Success login user",
  };
}
