import express from "express";
import userController from "@app/controllers/user.controller";

const router = express.Router();

router.get("/users", userController.getAllUsers);
router.get("/user/:id_user", userController.getUserById);
router.post("/user", userController.createUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id_user", userController.deleteUser);

export default router;
