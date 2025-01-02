import { IUser } from "@app/models/user.model";
import db from "@app/utils/connect";

interface IUserAuth {
  login(username: string, password: string, email: string): Promise<{}>;
  register(
    user: {
      id_user: string;
      first_name: string;
      last_name: string;
      username: string;
      email: string;
    },
    password: string
  ): Promise<{}>;
  checkRegistration(
    username: string,
    email: string
  ): Promise<{ status: boolean }>;
}

class userAuth implements IUserAuth {
  login(username: string, password: string, email: string): Promise<{}> {
    let query = "";

    return new Promise((resolve, reject) => {
      db.query(query, [username, email, password], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  register(
    user: {
      id_user: string;
      first_name: string;
      last_name: string;
      username: string;
      email: string;
    },
    password: string
  ): Promise<{}> {
    let query =
      "INSERT INTO users (id_user, first_name, last_name, username, email, password) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [
      user.id_user,
      user.first_name,
      user.last_name,
      user.username,
      user.email,
      password,
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

  checkRegistration(
    username: string,
    email: string
  ): Promise<{ status: boolean }> {
    let query = "SELECT * FROM users WHERE username = ? OR email = ?";
    return new Promise((resolve, reject) => {
      db.query<[]>(query, [username, email], (err, result) => {
        if (err) {
          return reject(err);
        }
        if (result.length === 0) {
          resolve({ status: false });
        } else {
          resolve({ status: true });
        }
      });
    });
  }
}

export default new userAuth();
