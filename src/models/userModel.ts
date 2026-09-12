import pool from "../config/db";   

export const UserModel = {
    findByUsername: async (username: string) => {
        const [rows]: any = await pool.query("SELECT * FROM users WHERE username = ?", [username]);
        return rows[0];
    },

    create: async (username: string, email: string, hasedPassword: string) => {
        const [result]: any = await pool.query(
            "INSERT INTO users (username, email, password) VALUES (?, ?, ?)", 
            [username, email, hasedPassword]
        );
        return result.insertId;
    }
};