import Responses from "../../utils/Responses";
import User from "./model";
import {Request, Response} from "express";
import Lib from "../libs/model";

require('dotenv').config();

const jwt = require('jsonwebtoken');
const sha512 = require('js-sha512')


const createUser = async (req: Request, res: Response ): Promise<void> => {
	try {
		const {email, password, firstname, lastname} = req.body;

		const userExist = await User.fetchByEmail(email);
		if(userExist !== undefined) {
			return Responses.BadRequest(res);
		}

		const passwordHash = sha512(password);
		const token: string = jwt.sign({ email }, process.env.JWT_PRIVATE_KEY);

		const lib = new Lib("My books");
		const lib_query = await lib.insert();
		const lib_id: number = lib_query.rows[0].lib_id;

		const user: User = new User(token, email, passwordHash, firstname, lastname, lib_id);
		const user_query = await user.insert();

		Responses.Custom(res, user_query.rows, 201);
	} catch (err) {
		console.error(err)
		Responses.ErrorUnknown(res);
	}
}

const fetchUsers = async (req: Request, res: Response ): Promise<void> => {
	try {
		const query = await User.fetchAll();

		Responses.Custom(res, query.rows);
	} catch (err) {
		console.error(err)
		Responses.ErrorUnknown(res);
	}
}

const fetchUser = async (req: Request, res: Response ): Promise<void> => {
	try {
		const {user_id} = req.params;
		const user = await User.fetchById(user_id);

		Responses.Custom(res, user.rows);
	} catch (err) {
		console.error(err)
		Responses.ErrorUnknown(res);
	}
}

const fetchUserByEmail = async (req: Request, res: Response ): Promise<void> => {
	try {
		const {email} = req.params;
		const user = await User.fetchByEmail(email);

		if(user === undefined) {
			return Responses.BadRequest(res);
		}

		Responses.Custom(res, user);
	} catch (err) {
		console.error(err)
		Responses.ErrorUnknown(res);
	}
}

const deleteUser = async (req: Request, res: Response ): Promise<void> => {
	try {
		const {user_id} = req.params;
		const query = await User.deleteById(user_id);

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

const fetchUserBooks = async (req: Request, res: Response ): Promise<void> => {
	try {
		const {user_id, lib_id} = req.params;
		const user = await User.fetchById(user_id);
		const books = await User.fetchBooksByLibId(lib_id)

		Responses.Custom(res, books.rows);
	} catch (err) {
		console.error(err)
		Responses.ErrorUnknown(res);
	}
}

const addBookToLib = async (req: Request, res: Response ): Promise<void> => {
	try {
		const {user_id, lib_id} = req.params;
		const {book_id} = req.body;
		const user = await User.fetchById(user_id);
		const books = await User.addBook(book_id, lib_id)

		Responses.OK(res);
	} catch (err) {
		console.error(err)
		Responses.ErrorUnknown(res);
	}
}

const removeBookToLib = async (req: Request, res: Response ): Promise<void> => {
	try {
		const {user_id, lib_id, book_id} = req.params;
		const query = await User.removeBook(book_id, lib_id);

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
	createUser,
	fetchUsers,
	fetchUser,
	fetchUserByEmail,
	deleteUser,
	fetchUserBooks,
	addBookToLib,
	removeBookToLib,
}