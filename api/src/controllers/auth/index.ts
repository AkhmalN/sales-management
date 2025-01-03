import generateUUID from "@app/helpers/uuid.helper";
import auth from "@app/repository/auth";
import { compare, hashed } from "@app/services/hash";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

class authController {
  async login(req: Request, res: Response): Promise<void> {
    const { username, email, password } = req.body;
    try {
      const { user } = await auth.checkRegistration(username, email);
      if (user === null) {
        res.status(404).json({ message: "user unregistered!" });
        return;
      }

      const checkedPassword = compare(password, user.password);
      const token = jwt.sign({ id: user.id_user }, "secretkey");

      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json({
          message: "Successfully login",
          user: {
            username,
            email,
          },
        });
    } catch (error: any) {
      res.status(500).json({
        message: "Error register user",
        error: error.message,
      });
    }
  }

  async register(req: Request, res: Response): Promise<void> {
    const { first_name, last_name, username, email } = req.body;
    try {
      const { registration } = await auth.checkRegistration(username, email);
      if (registration) {
        res.status(404).json({ message: "email is already exist!" });
        return;
      }

      const id = generateUUID();
      const hashedPassword = await hashed(req.body.password);
      const newUser = await auth.register(
        { id_user: id as string, first_name, last_name, username, email },
        hashedPassword
      );
      res.status(201).json({
        message: "User created successfully",
        user: { first_name, last_name, username, email },
      });
    } catch (error: any) {
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
