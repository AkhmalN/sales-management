import { IUser } from "@app/models/user.model";
import db from "@app/utils/connect";

interface IUserAuth {
  login(username: string, email: string): Promise<{}>;
  register(
    user: {
      id_user: string;
      first_name: string;
      last_name: string;
      username: string;
      email: string;
      age: number;
    },
    password: string
  ): Promise<{}>;
  checkRegistration(
    email: string,
    username: string
  ): Promise<{ registration: boolean; user: IUser | null }>;
}

class userAuth implements IUserAuth {
  login(username: string, email: string): Promise<{}> {
    let query = "SELECT * FROM users WHERE username = ? OR email = ?";

    return new Promise((resolve, reject) => {
      db.query(query, [username, email], (err, result) => {
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
      age: number;
    },
    password: string
  ): Promise<{}> {
    let query =
      "INSERT INTO users (id_user, first_name, last_name, username, email,age,  password) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const values = [
      user.id_user,
      user.first_name,
      user.last_name,
      user.username,
      user.email,
      user.age,
      password,
    ];
    console.log(values);
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
  ): Promise<{ registration: boolean; user: IUser | null }> {
    let query = "SELECT * FROM users WHERE username = ? AND email = ?";
    return new Promise((resolve, reject) => {
      db.query<IUser[]>(query, [username, email], (err, result) => {
        if (err) {
          return reject(err);
        }
        // console.log(result);
        if (result.length > 0) {
          resolve({ registration: true, user: result[0] });
        } else {
          resolve({ registration: false, user: null });
        }
      });
    });
  }
}

export default new userAuth();
