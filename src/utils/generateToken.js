import jwt from "jsonwebtoken";
import "dotenv/config";

const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7 days" });
};

export default generateToken;
