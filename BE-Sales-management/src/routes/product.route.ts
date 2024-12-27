import express from "express";
import productController from "@app/controllers/product.controller";

const router = express.Router();

router.get("/products", productController.getAllProduct);
router.get("/products/:id", productController.getById);
router.post("/products", productController.createProduct);
router.delete("/product/:id", productController.deleteProduct);

export default router;
