import express from "express";
import productController from "@app/controllers/product.controller";
import upload from "@app/services/uploader";

const router = express.Router();

router.get("/products", productController.getAllProduct);
router.get("/products/:id", productController.getById);
router.post(
  "/products",
  upload.single("image_url"),
  productController.createProduct
);
router.put("/product/:id", productController.updateProduct);
router.delete("/product/:id", productController.deleteProduct);

export default router;
