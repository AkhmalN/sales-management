import { IUser } from "@app/models/user.model";
import db from "@app/utils/connect";

interface IUsersRepository {
  findAll(searchParams: {
    sort: string;
    page: number;
    size: number;
    offset: number;
  }): Promise<IUser[]>;
  findById(id: number): Promise<IUser | undefined>;
  create(user: IUser): Promise<{}>;
  delete(id: number): Promise<{}>;
  update(user: IUser, id: string): Promise<{}>;
  count(): Promise<[{ total: number }]>;
}

class UsersRepository implements IUsersRepository {
  findAll(searchParams: {
    sort: string;
    page: number;
    size: number;
    offset: number;
  }): Promise<IUser[]> {
    let query: string = "SELECT * FROM users";
    let queryParams: Array<any> = [];
    const sortOrder =
      searchParams.sort.toUpperCase() === "DESC" ? "DESC" : "ASC";

    query += ` ORDER BY created_at ${sortOrder}`;

    if (searchParams.size || searchParams.offset) {
      query += " LIMIT ? OFFSET ?";
      queryParams.push(searchParams.size, searchParams.offset);
    }

    console.log(query + queryParams);
    return new Promise((resolve, reject) => {
      db.query<IUser[]>(query, queryParams, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  findById(id: number): Promise<IUser> {
    let query = "SELECT * FROM users WHERE id_user = ?";
    return new Promise((resolve, reject) => {
      db.query<IUser[]>(query, [id], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result?.[0]);
        }
      });
    });
  }

  create(user: IUser): Promise<{}> {
    let query =
      "INSERT INTO users (first_name, last_name, username, email, password) VALUES (?, ?, ?, ?, ?)";
    const values = [
      user.first_name,
      user.last_name,
      user.username,
      user.email,
      user.password,
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

  update(user: IUser, id: string): Promise<{}> {
    const query =
      "UPDATE users SET first_name = ?, last_name = ?, username = ? , email = ?, age = ?, phone = ?, address = ? WHERE id_user = ?";
    const values = [
      user.first_name,
      user.last_name,
      user.username,
      user.email,
      user.age,
      user.phone,
      user.address,
      id,
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

  delete(id: number): Promise<{}> {
    let query = "DELETE FROM users WHERE id_user = ?";

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
    let query = "SELECT COUNT(*) as total FROM users";

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

export default new UsersRepository();
