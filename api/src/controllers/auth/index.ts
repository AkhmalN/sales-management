import generateUUID from "@app/helpers/uuid.helper";
import auth from "@app/repository/auth";
import hashed from "@app/services/hash";
import { Request, Response } from "express";

class authController {
  async login(req: Request, res: Response): Promise<void> {}

  async register(req: Request, res: Response): Promise<void> {
    const { first_name, last_name, username, email, password } = req.body;
    try {
      const userExist = await auth.checkRegistration(username, email);
      if (!userExist) {
        res
          .status(404)
          .json({ message: "username or email is already exist!" });
        return;
      }

      const id = generateUUID();
      const hashedPassword = await hashed(req.body.password);
      const newUser = await auth.register(
        { id_user: id, first_name, last_name, username, email },
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

  async logout(req: Request, res: Response): Promise<void> {}
}
export default new authController();
