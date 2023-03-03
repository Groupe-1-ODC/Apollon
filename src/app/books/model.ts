const {db} = require("../../utils/PostgreSql");

export default class Book {
	// public book_id: number;
	public isbn: string;
	public title: string;
	public author: string;
	public image: string;
	public back_cover: string;
	public released_at: Date;
	// public updated_at: Date;
	// public created_at: Date;

	constructor(isbn: string, title: string, author: string, image: string, back_cover: string, released_at: number) {
		this.isbn = isbn;
		this.title = title;
		this.author = author;
		this.image = image;
		this.back_cover = back_cover;
		this.released_at = new Date(released_at * 1000);
	}

	async insert(): Promise<{rows: [], rowCount: number}> {
		try {
			return await db.query(
				'INSERT INTO books (isbn, title, author, image, back_cover, released_at, updated_at, created_at) ' +
				'VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW()) RETURNING book_id',
				[this.isbn, this.title, this.author, this.image, this.back_cover, this.released_at ]
			);
		} catch (err) {
			console.error(err);
			return {rows: [], rowCount: 0};
		}
	}

	static async fetchAll() {
		return await db.query('SELECT * from books');
	}

	static async fetchById(id: number|string) {
		return await db.query('SELECT * from books WHERE book_id = $1', [id]);
	}

	static async fetchByIsbn(isbn: number|string) {
		return await db.query('SELECT * from books WHERE isbn = $1', [isbn]);
	}

	static async deleteById(id: number|string) {
		try {
			return await db.query('DELETE FROM books WHERE book_id = $1', [id]);
		} catch (err) {
			console.error(err);
			throw err;
		}
	}
}