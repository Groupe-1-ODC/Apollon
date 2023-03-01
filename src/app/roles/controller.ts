import Responses from "../../utils/Responses";
import { Request, Response } from "express";

const fetchRoles = async (req: Request, res: Response): Promise<void> => {
	try {
		Responses.OK(res);
	} catch (err) {
		console.error(err);
		Responses.ErrorUnknown(res);
	}
};

const fetchRole = async (req: Request, res: Response): Promise<void> => {
	try {
		Responses.OK(res);
	} catch (err) {
		console.error(err);
		Responses.ErrorUnknown(res);
	}
};

const createRole = async (req: Request, res: Response): Promise<void> => {
	try {
		console.log("req.body: ", req.body);
		Responses.OK(res);
	} catch (err) {
		console.error(err);
		Responses.ErrorUnknown(res);
	}
};

const deleteRole = async (req: Request, res: Response): Promise<void> => {
	try {
		console.log("req.body: ", req.body);
		Responses.OK(res);
	} catch (err) {
		console.error(err);
		Responses.ErrorUnknown(res);
	}
};

const patchRole = async (req: Request, res: Response): Promise<void> => {
	try {
		console.log("req.body: ", req.body);
		Responses.OK(res);
	} catch (err) {
		console.error(err);
		Responses.ErrorUnknown(res);
	}
};
module.exports = {
	fetchRoles,
	createRole,
	fetchRole,
	deleteRole,
	patchRole,
};
