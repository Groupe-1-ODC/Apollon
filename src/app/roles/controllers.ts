import Responses from "../../utils/Responses";
import Role from "./model";
import { Request, Response } from "express";

const createRole = async (req: Request, res: Response): Promise<void> => {
	try {
		const { name } = req.body;
		const role: Role = new Role(name);

		const query = await role.insert();
		Responses.Custom(res, query.rows);
	} catch (err) {
		console.error(err);
		Responses.ErrorUnknown(res);
	}
};

const fetchRoles = async (req: Request, res: Response): Promise<void> => {
	try {
		const roles = await Role.fetchAll();

		Responses.Custom(res, roles.rows);
	} catch (err) {
		console.error(err);
		Responses.ErrorUnknown(res);
	}
};

const fetchRole = async (req: Request, res: Response): Promise<void> => {
	try {
		const { role_id } = req.params;
		const role = await Role.fetchById(role_id);

		Responses.Custom(res, role.rows);
	} catch (err) {
		console.error(err);
		Responses.ErrorUnknown(res);
	}
};

const deleteRole = async (req: Request, res: Response): Promise<void> => {
	try {
		const { role_id } = req.params;
		const query = await Role.deleteById(role_id);

		if (query.rowCount === 0) {
			Responses.NotFound(res);
			return;
		}
		Responses.OK(res);
	} catch (err) {
		console.error(err);
		Responses.ErrorUnknown(res);
	}
};

module.exports = {
	createRole,
	deleteRole,
	fetchRole,
	fetchRoles,
};
