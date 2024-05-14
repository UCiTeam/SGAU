import { pool } from "../database/connection.js";
import bcrypt from 'bcrypt';
import { isStrongPassword } from "../helpers/isStrongPassword.js";

const createUser = async (username, password, role) => {
    try {
        const countUsernameQuery = 'SELECT COUNT ("username") FROM "users" WHERE "username" = $1';
        const createUserQuery = 'INSERT INTO "users" VALUES($1, $2, $3) RETURNING *';

        const countResult = await pool.query(countUsernameQuery, [username]);
        const usernameCount = parseInt(countResult.rows[0].count);

        //console.log(isStrongPassword(password));

        if (usernameCount === 0 && username && isStrongPassword(password)) {
            const hashedPassword = await bcrypt.hash(password, 10);
            const createUserResult = await pool.query(createUserQuery, [username, hashedPassword, role]);
            return createUserResult;
        } else {
            // Si el nombre de usuario ya existe, devolver un objeto vacío
            return { rows: [] };
        }
    } catch (error) {
        console.error(error);
        throw error; // Lanzar la excepción para que sea capturada por el controlador
    }
}

export const createUserModel = {
    createUser,
}
