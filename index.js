import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";
import userRouter from "./routes/user.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

//Route
app.use("/user", userRouter);

// Welcome Route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the User Management API" });
});

const PORT = process.env.PORT || 5000;

// Connect to MongoDB first, then start the server
connectDB()
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error("❌ MongoDB Connection Failed:", error.message);
  });
