import { Request, Response } from "express";
import userRespository from "@app/repository/user.respository";
import generateUUID from "@app/helpers/uuid.helper";
import auth from "@app/repository/auth";
import { hashed } from "@app/services/hash";
import { IUser } from "@app/models/user.model";

class UsersController {
  async getAllUsers(req: Request, res: Response): Promise<void> {
    const page: number = parseInt(req.query.page as string) || 1;
    const size: number = parseInt(req.query.size as string) || 10;
    const offset = (page - 1) * size;

    const { sort } = req.query;
    try {
      const users = await userRespository.findAll({
        sort: sort as string,
        page: page,
        size: size,
        offset: offset,
      });

      const userCounts = await userRespository.count();
      const totalUser = userCounts[0] ? userCounts[0].total : 0;
      const totalPage = Math.ceil(totalUser / size);

      res.status(200).json({
        message: "Success get all users",
        data: users,
        pagination: {
          total: totalUser,
          page: page,
          size: size,
          total_pages: totalPage,
        },
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    const { id_user } = req.params;

    try {
      const user = await userRespository.findById(parseInt(id_user));
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Internal server error!" });
    }
  }

  async createUser(req: Request, res: Response): Promise<void> {
    const {
      first_name,
      last_name,
      username,
      email,
      password,
      phone,
      age,
      address,
    } = req.body;
    try {
      if (
        !first_name ||
        !last_name ||
        !username ||
        !email ||
        !password ||
        !phone ||
        !age ||
        !address
      ) {
        res.status(400).json({
          message:
            "The form must not be blank and must be completely filled in",
        });
        return;
      }
      const id = generateUUID();
      const { registration } = await auth.checkRegistration(username, email);
      if (registration) {
        res.status(409).json({
          message: "The username or email has already been registered",
        });
        return;
      }
      const hashPassword = await hashed(password);
      const data = {
        first_name,
        last_name,
        username,
        email,
        password: hashPassword,
        phone,
        age,
        address,
      };
      await userRespository.create(data, id as string);

      res.status(201).json({
        data: data,
        message: "User created successfully",
      });
    } catch (error: any) {
      res.status(500).json({
        message: "Error creating user",
        error: error.message,
      });
    }
  }

  async deleteUser(req: Request, res: Response) {
    const { id_user } = req.params;

    try {
      await userRespository.delete(id_user);
      res.status(200).json({
        message: "User has been deleted",
      });
    } catch (error: any) {
      res.status(500).json({
        message: "Internal server error",
        error: error.message,
      });
    }
  }

  async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const newUpdate = await userRespository.update(req.body, id);
      res.status(200).json({ message: "User has been updated!" });
    } catch (error: any) {
      res
        .status(500)
        .json({ message: "Internal server error!", error: error.message });
    }
  }
}

export default new UsersController();
