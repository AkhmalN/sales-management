import generateUUID from "@app/helpers/uuid.helper";
import auth from "@app/repository/auth";
import { compare, hashed } from "@app/services/hash";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

interface IWebResponse {
  status: boolean;
  message: string;
  data?: Record<string, any>;
  token:
    | {
        access_token: string;
        expires_in: number;
      }
    | undefined;
}

class authController {
  async login(req: Request, res: Response): Promise<void> {
    const { username, email, password } = req.body;
    try {
      const { user } = await auth.checkRegistration(username, email);
      if (user === null) {
        res
          .status(404)
          .json({ status: false, message: "username or email not found!" });
        return;
      }

      const checkedPassword = compare(password, user.password);
      if (!checkedPassword) {
        res.status(400).json({ status: false, message: "Invalid password" });
        return;
      }
      const token_expires = "1d";
      const token = jwt.sign({ id: user.id_user }, "secretkey", {
        expiresIn: "1d",
      });
      res
        .cookie("access_token", token, {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000,
        })
        .status(200)
        .json({
          status: true,
          message: "Successfully login",
          data: {
            user_id: user.id_user,
          },
          token: {
            access_token: token,
            expires_in: token_expires,
          },
        });
    } catch (error: any) {
      res.status(500).json({
        status: false,
        message: "Error during login process",
        data: {},
        token: {
          access_token: "",
          expires_in: 0,
        },
      });
    }
  }

  async register(req: Request, res: Response): Promise<void> {
    const { first_name, last_name, username, email, age } = req.body;
    try {
      const { registration } = await auth.checkRegistration(username, email);
      if (registration) {
        res
          .status(404)
          .json({ status: false, message: "email is already exist!" });
        return;
      }

      const id = generateUUID();
      const hashedPassword = await hashed(req.body.password);
      await auth.register(
        {
          id_user: id as string,
          first_name,
          last_name,
          username,
          email,
          age: age as number,
        },
        hashedPassword
      );
      res.status(201).json({
        status: true,
        message: "Success register account!",
      });
    } catch (error: any) {
      console.log(error);
      res.status(500).json({
        message: "Error register user",
        error: error.message,
      });
    }
  }

  async logout(req: Request, res: Response): Promise<void> {
    res
      .clearCookie("access_token", {
        secure: true,
        sameSite: "none",
      })
      .status(200)
      .json({ message: "User has been loogout", user: null });
  }
}
export default new authController();
