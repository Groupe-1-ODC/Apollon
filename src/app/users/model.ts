const {db} = require("../../utils/PostgreSql");

export default class User {
	// public user_id: number;
	public token: string;
	public email: string;
	public password: string;
	public firstname: string;
	public lastname: string;
	public lib_id: number;
	// public updated_at: Date;
	// public created_at: Date;

	constructor(token: string, email: string, password: string, firstname: string, lastname: string, lib_id: number) {
		this.token = token;
		this.email = email;
		this.password = password;
		this.firstname = firstname;
		this.lastname = lastname;
		this.lib_id = lib_id;
	}

	async insert(): Promise<{rows: [], rowCount: number}> {
		try {
			return await db.query(
				"INSERT INTO users (token, email, password, firstname, lastname, lib_id, updated_at, created_at) " +
				"VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW()) RETURNING user_id",
				[this.token, this.email, this.password, this.firstname, this.lastname, this.lib_id ]
			);
		} catch (err) {
			console.error(err);
			return {rows: [], rowCount: 0};
		}
	}

	static async fetchAll() {
		return await db.query('SELECT * from users');
	}

	static async fetchById(id: number|string) {
		return await db.query('SELECT * from users WHERE user_id = $1', [id]);
	}

	static async fetchByEmail(email: string) {
		return await db.query('SELECT * from users WHERE email = $1', [email]);
	}

	static async deleteById(id: number|string) {
		try {
			return await db.query('DELETE FROM users WHERE user_id = $1', [id]);
		} catch (err) {
			console.error(err);
			throw err;
		}
	}
}