import express from "express";
import userController from "@app/controllers/user.controller";
import auth from "@app/controllers/auth";

const router = express.Router();

router.post("/auth/login", auth.login);
router.post("/auth/register", auth.register);
router.post("/auth/logout", auth.logout);

export default router;
