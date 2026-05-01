import User from "../models/User.js";
import BaseController from "./BaseController.js";

class UserController extends BaseController {
  async createUser(req, res) {
    try {
      const { name, email } = req.body;

      if (!name || !email) {
        return this.error(res, "Name and email are required", null, 400);
      }

      const result = await User.create({ name, email });

      return this.success(res, "User created successfully", result, 201);
    } catch (error) {
      return this.error(res, "Error creating user", error.message);
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await User.getAll();
      return this.success(res, "Users fetched successfully", users);
    } catch (error) {
      return this.error(res, "Error fetching users", error.message);
    }
  }

  async getUserById(req, res) {
    try {
      const { id } = req.params;

      const user = await User.getById(id);

      if (!user) {
        return this.error(res, "User not found", null, 404);
      }

      return this.success(res, "User fetched successfully", user);
    } catch (error) {
      return this.error(res, "Error fetching user", error.message);
    }
  }

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { name, email } = req.body;

      const result = await User.update(id, { name, email });

      if (result === 0) {
        return this.error(res, "User not found", null, 404);
      }

      return this.success(res, "User updated successfully");
    } catch (error) {
      return this.error(res, "Error updating user", error.message);
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params;

      const result = await User.delete(id);

      if (result === 0) {
        return this.error(res, "User not found", null, 404);
      }

      return this.success(res, "User deleted successfully");
    } catch (error) {
      return this.error(res, "Error deleting user", error.message);
    }
  }
}

export default UserController;
