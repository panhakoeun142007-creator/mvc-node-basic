import mysql from "mysql2/promise.js";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "test_db",
});

export default db;
