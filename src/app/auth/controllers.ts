import Responses from "../../utils/Responses";
import {Request, Response} from "express";
import {sha512} from "js-sha512";

const {db} = require('../../utils/PostgreSql');


const login = async (req: Request, res: Response ): Promise<void> => {
	try {
		const {email, password} = req.body;

		const passwordHash = sha512(password);

		const user = await db.query(
			'SELECT user_id, token FROM users WHERE email = $1 AND password = $2 LIMIT 1',
			[email, passwordHash]
		);

		if(user.rowCount === 0) {
			return Responses.BadRequest(res);
		}

		Responses.Custom(res, {token: user.rows[0].token});
	} catch (err) {
		console.error(err)
		Responses.ErrorUnknown(res);
	}
}

module.exports = {
	login,
}