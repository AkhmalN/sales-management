import { IUser } from "@app/models/user.model";
import db from "@app/utils/connect";

interface IUsersRepository {
  findAll(searchParams: { username: string; sort: string }): Promise<IUser[]>;
  findById(id: number): Promise<IUser | undefined>;
  create(user: IUser): Promise<{}>;
  delete(id: number): Promise<{}>;
  update(user: IUser, id: string): Promise<{}>;
}

class UsersRepository implements IUsersRepository {
  findAll(searchParams: { username?: string; sort: string }): Promise<IUser[]> {
    let query: string = "SELECT * FROM users";
    let queryParams: Array<any> = [];
    const sortOrder =
      searchParams.sort.toUpperCase() === "DESC" ? "DESC" : "ASC";

    if (searchParams.username) {
      query += " WHERE username LIKE ?";
      queryParams.push(`%${searchParams.username}%`);
    }

    query += ` ORDER BY created_at ${sortOrder}`;

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
}

export default new UsersRepository();
