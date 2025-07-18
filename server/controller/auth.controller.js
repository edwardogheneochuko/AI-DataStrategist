import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import verifyToken from "../middleware/authMiddleware.js";
import { generateToken } from "../utils/generateToken.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" }); // this ensures all the fields are provided
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "Email already registered" }); // this checks if the user already exists and avoids duplicate registration
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    //create a token for the user after registration
    const token = generateToken(newUser._id);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
      token,
    }); // this returns the user details and token after successful registration and saves the user to the database
    } catch (error) {
        console.error("Error registering user:", error.message);
        return res.status(500).json({
        success: false,
        message: "Server error. Please try again later.",
        });
    }
};

export const login = async (req, res) => {
   const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User does not exist." });
    }

    const passMatches = await bcrypt.compare(password, user.password);

    if (!passMatches) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Password" });
    }

    const token = generateToken(user._id);

    user.lastLogin = new Date();

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        gender: user.gender,
      },
      token,
    });
  } catch (error) {
    console.error("Login error:", error.message);
    return res.status(500).json({ message: "Server error. Try again later." });

  }
};

export const protect = async (req, res) => {
  res.status(200).json({
    message: `Welcome, ${req.user.name}`,
    user: req.user,
  });
}

export const forgot = async (req, res) => {
    const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const hashed = await bcrypt.hash(password, 10);
    user.password = hashed;
    await user.save();

    return res.status(200).json({ message: 'Password updated successfully' });
  } catch (err) {
    return res.status(500).json({ message: 'Error resetting password', error: err.message });
  }
}
