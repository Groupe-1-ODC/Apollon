import Responses from "../../utils/Responses";
import Book from "./model";
import {Request, Response} from "express";


const createBook = async (req: Request, res: Response ): Promise<void> => {
	try {
		const {isbn, title, author, image, back_cover, released_at} = req.body;

		const book: Book = new Book(isbn, title, author, image, back_cover, released_at);

		const query = await book.insert();
		Responses.Custom(res, query.rows);
	} catch (err) {
		console.error(err)
		Responses.ErrorUnknown(res);
	}
}

const fetchBooks = async (req: Request, res: Response ): Promise<void> => {
	try {
		const books = await Book.fetchAll();

		Responses.Custom(res, books.rows);
	} catch (err) {
		console.error(err)
		Responses.ErrorUnknown(res);
	}
}

const fetchBook = async (req: Request, res: Response ): Promise<void> => {
	try {
		const {book_id} = req.params;
		const book = await Book.fetchById(book_id);

		Responses.Custom(res, book.rows);
	} catch (err) {
		console.error(err)
		Responses.ErrorUnknown(res);
	}
}

const deleteBook = async (req: Request, res: Response ): Promise<void> => {
	try {
		const {book_id} = req.params;
		const query = await Book.deleteById(book_id);

		if(query.rowCount === 0) {
			Responses.NotFound(res);
			return;
		}
		Responses.OK(res);
	} catch (err) {
		console.error(err)
		Responses.ErrorUnknown(res);
	}
}

module.exports = {
	createBook,
	fetchBooks,
	fetchBook,
	deleteBook,
}