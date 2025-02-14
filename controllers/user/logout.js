// Logout User
const logoutController = async (req, res) => {
  try {
    res.clearCookie("auth_token", {
      httpOnly: true,
    });

    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error("Error in logoutUser:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

export default logoutController;
