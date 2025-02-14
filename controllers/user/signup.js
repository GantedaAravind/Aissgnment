import jwt from "jsonwebtoken";
import validator from "validator";
import userModel from "../../models/user.js";

// Register User
async function signupController(req, res) {
  try {
    const {
      username,
      email,
      password,
      fullName,
      gender,
      dateOfBirth,
      country,
    } = req.body;

    // Validate required fields
    if (
      !username ||
      !email ||
      !password ||
      !fullName ||
      !gender ||
      !dateOfBirth ||
      !country
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Email validation
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Password validation (at least 6 chars, one uppercase, one number, one special character)
    if (
      !validator.isStrongPassword(password, {
        minLength: 6,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      return res.status(400).json({
        message:
          "Password must be at least 6 characters long and include at least 1 uppercase letter, 1 number, and 1 special character",
      });
    }

    // Check if the user already exists
    const existingUser = await userModel.findOne({
      $or: [{ username }, { email }],
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Username or Email already exists" });
    }

    // Create new user
    const newUser = new userModel({
      username,
      email,
      password, // This will be hashed in the User model `pre` save hook
      fullName,
      gender,
      dateOfBirth,
      country,
    });

    // Save user to database
    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("Error in registerUser:", error);
    res.status(500).json({ message: "Server Error" });
  }
}

export default signupController;
