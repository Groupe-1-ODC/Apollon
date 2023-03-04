const {db} = require("../../utils/PostgreSql");

export default class Lib {
	// public lib_id: number;
	public name: string;
	// public updated_at: Date;
	// public created_at: Date;

	constructor(name: string) {
		this.name = name;
	}

	async insert(): Promise<any> {
		try {
			return await db.query(
				'INSERT INTO libs (name, updated_at, created_at) VALUES ($1, NOW(), NOW()) RETURNING lib_id',
				[this.name]
			);
		} catch (err) {
			console.error(err);
			return {rows: [], rowCount: 0};
		}
	}
}