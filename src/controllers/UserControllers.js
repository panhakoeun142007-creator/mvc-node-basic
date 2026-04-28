import User from "../models/User.js";

class UserController {
  static async createUser(req, res) {
    try {
      const { name, email } = req.body; // destructuring object

      // call model
      const result = await User.create({ name, email });

      res.status(201).json({
        message: "User created successfully",
        data: result
      });

    } catch (error) {
      res.status(500).json({
        message: "Error creating user",
        error: error.message
      });
    }
  }
  static async getAllUsers(req, res) {
  try {
    const users = await User.getAll();

    res.status(200).json({
      message: "Users fetched successfully",
      data: users
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching users",
      error: error.message
    });
  }
}

static async getUserById(req, res) {
  try {
    const { id } = req.params;
    const user = await User.getById(id);

    res.status(200).json({
      message: "User fetched successfully",
      data: user
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching user",
      error: error.message
    });
  }
}


static async updateUser(req, res) {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const result = await User.update(id, { name, email });

    res.status(200).json({
      message: "User updated successfully",
      data: result
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating user",
      error: error.message
    });
  }
}

static async deleteUser(req, res) {
  try {
    const { id } = req.params;

    const result = await User.delete(id);

    res.status(200).json({
      message: "User deleted successfully",
      data: result
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting user",
      error: error.message
    });
  }
}


}

export default UserController;