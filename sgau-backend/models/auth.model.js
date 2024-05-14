import { pool } from "../database/connection.js";
import bcrypt from "bcrypt";

const authenticateUser = async (username, password) => {

    console.log(username + "\n" + password);

    try {
        const getUserQuery = 'SELECT * FROM "users" WHERE "username" = $1';

        const result = await pool.query(getUserQuery, [username]);
        const user = result.rows[0];

        if (!user) return null;

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return null;

        // Si la autenticación es exitosa, puedes devolver solo los datos necesarios del usuario
        return {
            username: user.username,
            role: user.role,
        };
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const authModel = {
    authenticateUser,
};
