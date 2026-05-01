import BaseModel from "./BaseModel.js";

class User extends BaseModel {
  static async create({ name, email }) {
    const result = await this.execute(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [name, email]
    );

    return { id: result.insertId, name, email };
  }

  static async getAll() {
    return await this.query("SELECT * FROM users");
  }

  static async getById(id) {
    const rows = await this.query(
      "SELECT * FROM users WHERE id = ?",
      [id]
    );
    return rows[0];
  }

  static async update(id, { name, email }) {
    const result = await this.execute(
      "UPDATE users SET name = ?, email = ? WHERE id = ?",
      [name, email, id]
    );

    return result.affectedRows;
  }

  static async delete(id) {
    const result = await this.execute(
      "DELETE FROM users WHERE id = ?",
      [id]
    );

    return result.affectedRows;
  }
}

export default User;