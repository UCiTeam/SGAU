import { authModel } from "../models/auth.model.js";

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const response = await authModel.authenticateUser(username, password);

        if (response) {
            res.json(response);
        } else {
            res.status(401).json({ message: "Invalid username or password" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const authController = {
    login,
};