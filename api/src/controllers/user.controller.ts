import { Request, Response } from "express";
import userRespository from "@app/repository/user.respository";
import generateUUID from "@app/helpers/uuid.helper";

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
    const { first_name, last_name, username, email, password } = req.body;

    try {
      if (!first_name || !last_name || !username || !email || !password) {
        res.status(400).json({
          message:
            "The form must not be blank and must be completely filled in",
        });
      }
      const id = generateUUID();

      await userRespository.create(req.body, id);

      res.status(201).json({
        message: "User created successfully",
        user: {
          first_name,
          last_name,
          username,
          email,
        },
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
      await userRespository.delete(parseInt(id_user));
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
