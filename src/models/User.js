import db from "../config/db.js";

class User {
    static async create(userData){
       try{
        const{name, email,} = userData;
        const sql = "INSERT INTO users (name, email) VALUES (?, ?)";
        const [result] = await db.execute(sql, [name, email]);
        return result;
       }catch(error){
        throw error;
       
       } 
    }
    static async getAll() {
  try {
    const sql = "SELECT * FROM users";
    const [rows] = await db.execute(sql);
    return rows;
  } catch (error) {
    throw error;
  }
}

static async getById(id) {
  try {
    const sql = "SELECT * FROM users WHERE id = ?";
    const [rows] = await db.execute(sql, [id]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}


static async getAll() {
  try {
    const sql = "SELECT * FROM users";
    const [rows] = await db.execute(sql);
    return rows;
  } catch (error) {
    throw error;
  }
}

static async update(id, userData) {
  try {
    const { name, email } = userData;
    const sql = "UPDATE users SET name = ?, email = ? WHERE id = ?";
    const [result] = await db.execute(sql, [name, email, id]);
    return result;
  } catch (error) {
    throw error;
  }
}

static async delete(id) {
  try {
    const sql = "DELETE FROM users WHERE id = ?";
    const [result] = await db.execute(sql, [id]);
    return result;
  } catch (error) {
    throw error;
  }
}


}export default User;