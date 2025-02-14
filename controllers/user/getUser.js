import userModel from "../../models/user.js";

// Search user by username or email
const getUserController = async (req, res) => {
  try {
    const { search } = req.query; // Get search query (email or username)

    if (!search) {
      return res
        .status(400)
        .json({ message: "Please provide a username or email to search" });
    }

    // Find user by email or username (case-insensitive search)
    const user = await userModel
      .findOne({
        $or: [{ email: search }, { username: search }],
      })
      .select("-password"); // Exclude password from response

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error in getUser:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

export default getUserController;
