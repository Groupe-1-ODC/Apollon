import Responses from "../../utils/Responses";
import User from "./model";
import {Request, Response} from "express";
import Lib from "../libs/model";


const createUser = async (req: Request, res: Response ): Promise<void> => {
	try {
		const {token, email, password, firstname, lastname} = req.body;

		const lib = new Lib("My books");
		const lib_query = await lib.insert();
		const lib_id: number = lib_query.rows[0].lib_id;

		const user: User = new User(token, email, password, firstname, lastname, lib_id);
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

		Responses.Custom(res, user.rows);
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



module.exports = {
	createUser,
	fetchUsers,
	fetchUser,
	fetchUserByEmail,
	deleteUser,
}