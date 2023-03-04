const { db } = require("../../utils/PostgreSql");

export default class Role {
	public name: string;

	constructor(name: string) {
		this.name = name;
	}

	async insert(): Promise<{ rows: []; rowCount: number }> {
		try {
			return await db.query(
				"INSERT INTO roles (name, updated_at, created_at) VALUES ($1, NOW(), NOW()) RETURNING id",
				[this.name]
			);
		} catch (err) {
			console.error(err);
			return { rows: [], rowCount: 0 };
		}
	}
	static async fetchAll() {
		return await db.query("SELECT * from roles");
	}

	static async fetchById(id: number | string) {
		return await db.query("SELECT * from roles WHERE role_id = $1", [id]);
	}

	static async deleteById(id: number | string) {
		try {
			return await db.query("DELETE FROM roles WHERE role_id = $1", [id]);
		} catch (err) {
			console.error(err);
			throw err;
		}
	}
}
