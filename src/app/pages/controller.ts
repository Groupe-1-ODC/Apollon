import Responses from "../../utils/Responses";
import {Request, Response} from "express";

const {db} = require("../../utils/PostgreSql");

const fetchPages = async ( req: Request, res: Response ): Promise<void> => {
	try {
		const query = await db.query("SELECT * FROM roles");
		Responses.Custom(res, query.rows);
	} catch (err) {
		console.error(err)
		Responses.ErrorUnknown(res);
	}
}


const createPage = async (req: Request, res: Response ): Promise<void> => {
	try {
		console.log("req.body: ", req.body);
		Responses.OK(res);
	} catch (err) {
		console.error(err)
		Responses.ErrorUnknown(res);
	}
}

module.exports = {
	fetchPages,
	createPage,
}