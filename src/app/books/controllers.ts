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


module.exports = {
	createBook,
}