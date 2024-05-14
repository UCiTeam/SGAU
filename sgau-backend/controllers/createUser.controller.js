import { createUserModel } from "../models/createUser.model.js";

const createUser = async (req, res) => {
    try {
        const { username, password, role } = req.body;

        const response = await createUserModel.createUser(username, password, role);

        if (response.rows.length > 0) {
            res.status(201).json({
                success: true,
                message: "User created successfully",
                data: {
                    username: response.rows[0].username,
                    role: response.rows[0].role,
                },
            });
        } else {
            res.status(400).json({
                success: false,
                message: "Username already exists",
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

export const createUserController = {
    createUser,
};
