import Responses from "../../utils/Responses";
import Lib from "./model";
import {Request, Response} from "express";


const createLib = async (req: Request, res: Response ): Promise<void> => {
	try {
		const {name} = req.body;
		const lib: Lib = new Lib(name);

		const query = await lib.insert();
		Responses.Custom(res, query.rows);
	} catch (err) {
		console.error(err)
		Responses.ErrorUnknown(res);
	}
}

module.exports = {
	createLib,
}