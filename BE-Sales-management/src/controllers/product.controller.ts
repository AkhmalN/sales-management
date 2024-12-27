import { Request, Response } from "express";
import productRepository from "@app/repository/product.repository";
import generateUUID from "@app/helpers/uuid.helper";

class productController {
  async getAllProduct(req: Request, res: Response): Promise<void> {
    const { sort } = req.query;
    try {
      const products = await productRepository.findAll({
        sort: sort as string,
      });

      res
        .status(200)
        .json({ message: "Success get  products", data: products });
    } catch (error: any) {
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      const product = await productRepository.findById(id);
      res.status(200).json({
        message: "Success get user",
        data: product,
      });
    } catch (error: any) {
      res.status(500).json({
        message: "Internal server error!",
        error: error.message,
      });
    }
  }

  async createProduct(req: Request, res: Response): Promise<void> {
    const {
      product_name,
      category,
      price,
      quantity,
      product_status,
      stock,
      id_sales,
    } = req.body;
    const imageUrl = req.file ? req.file.path : null;
    try {
      if (
        !product_name ||
        !category ||
        !price ||
        !quantity ||
        !product_status ||
        !stock ||
        !id_sales
      ) {
        res.status(400).json({
          message:
            "The form must not be blank and must be completely filled in",
        });
      }
      const id_product = generateUUID();
      await productRepository.create(req.body, id_product, imageUrl);

      res.status(201).json({
        message: "Product created successfully",
      });
    } catch (error: any) {
      res.status(500).json({
        message: "Error creating product",
        error: error.message,
      });
    }
  }

  async updateProduct(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      await productRepository.update(id, req.body);
      res.status(200).json({ message: "Product has been updated" });
    } catch (error: any) {
      res.status(500).json({
        message: "Internal server error!",
        error: error.message,
      });
    }
  }

  async deleteProduct(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await productRepository.delete(id);
      res.status(200).json({
        message: "Product has been deleted",
      });
    } catch (error: any) {
      res.status(500).json({
        message: "Internal server error!",
        error: error.message,
      });
    }
  }
}

export default new productController();
