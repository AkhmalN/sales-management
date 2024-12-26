import { IProduct } from "@app/models/product.model";
import db from "@app/utils/connect";

interface IUsersRepository {
  findAll(searchParams: { sort: string }): Promise<IProduct[]>;
  create(product: IProduct, id_product: string): Promise<{}>;
  findById(id: string): Promise<{}>;
}

class productRepository implements IUsersRepository {
  findAll(searchParams: { sort: string }): Promise<IProduct[]> {
    let query = "SELECT * FROM products";
    const sortOrder =
      searchParams.sort.toUpperCase() === "DESC" ? "DESC" : "ASC";

    query += ` ORDER BY created_at ${sortOrder}`;
    return new Promise((resolve, reject) => {
      db.query<IProduct[]>(query, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  create(newProduct: IProduct, id_product: string): Promise<{}> {
    let query =
      "INSERT INTO products (id_product, product_name, category, price, quantity, product_status, stock, id_sales) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    const values = [
      id_product,
      newProduct.product_name,
      newProduct.category,
      newProduct.price,
      newProduct.quantity,
      newProduct.product_status,
      newProduct.stock,
      newProduct.id_sales,
    ];

    return new Promise((resolve, reject) => {
      db.query(query, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  findById(id: string): Promise<{}> {
    let query = "SELECT * FROM products WHERE id_product = ?";

    return new Promise((resolve, reject) => {
      db.query<IProduct[]>(query, [id], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}

export default new productRepository();
