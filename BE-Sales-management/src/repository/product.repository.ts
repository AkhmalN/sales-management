import { IProduct } from "@app/models/product.model";
import db from "@app/utils/connect";

interface IUsersRepository {
  findAll(searchParams: {
    sort: string;
    page: number;
    size: number;
    offset: number;
  }): Promise<IProduct[]>;
  findById(id: string): Promise<{}>;
  create(
    product: IProduct,
    id_product: string,
    image: string | null
  ): Promise<{}>;
  update(id: string, updateProduct: IProduct): Promise<{}>;
  delete(id: string): Promise<{}>;
  count(): Promise<[{ total: number }]>;
}

class productRepository implements IUsersRepository {
  findAll(searchParams: {
    sort: string;
    page: number;
    size: number;
    offset: number;
  }): Promise<IProduct[]> {
    let query = "SELECT * FROM products";
    const sortOrder =
      searchParams.sort.toUpperCase() === "DESC" ? "DESC" : "ASC";
    let queryParams: Array<any> = [];

    query += ` ORDER BY created_at ${sortOrder}`;

    if (searchParams.size || searchParams.offset) {
      query += " LIMIT ? OFFSET ?";
      queryParams.push(searchParams.size, searchParams.offset);
    }
    return new Promise((resolve, reject) => {
      db.query<IProduct[]>(query, queryParams, (err, result) => {
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

  create(
    newProduct: IProduct,
    id_product: string,
    image: string | null
  ): Promise<{}> {
    let query =
      "INSERT INTO products (id_product, product_name, category, price, quantity, product_status, stock, id_sales, image_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

    const values = [
      id_product,
      newProduct.product_name,
      newProduct.category,
      newProduct.price,
      newProduct.quantity,
      newProduct.product_status,
      newProduct.stock,
      newProduct.id_sales,
      image,
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

  update(id: string, updateProduct: IProduct): Promise<{}> {
    let query =
      "UPDATE products SET product_name = ?, category = ?, price = ?, quantity = ? , product_status = ? , stock = ? , id_sales = ? , image_url = ? WHERE id_product = ?";

    return new Promise((resolve, reject) => {
      db.query(
        query,
        [
          updateProduct.product_name,
          updateProduct.category,
          updateProduct.price,
          updateProduct.quantity,
          updateProduct.product_status,
          updateProduct.stock,
          updateProduct.id_sales,
          updateProduct.image_url,
          id,
        ],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  }

  delete(id: string): Promise<{}> {
    let query = "DELETE FROM products WHERE id_product = ?";

    return new Promise((resolve, reject) => {
      db.query(query, [id], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  count(): Promise<[{ total: number }]> {
    let query = "SELECT COUNT(*) as total FROM products";

    return new Promise((resolve, reject) => {
      db.query<any>(query, (err, result) => {
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
