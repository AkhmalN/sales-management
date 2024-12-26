import mysql from "mysql2";
import dbConnfig from "../config/database";

const db = mysql.createConnection(dbConnfig);

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: ", err);
    return;
  }
  console.log("Connected to the MySQL database");
});

export default db;
