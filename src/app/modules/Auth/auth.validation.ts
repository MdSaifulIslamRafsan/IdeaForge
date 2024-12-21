import { z } from "zod";

const loginUserValidation = z.object({
    body: z.object({
      email: z.string({
        required_error: 'ID is required',
      }),
      password: z.string({
        required_error: 'Password is required',
      }),
    }),
  });

  export  const AuthValidation = {
    loginUserValidation,
  }

