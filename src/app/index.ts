import { Express } from "express";

const RoleRouter = require("./roles/routes");

export default class Routers {
	static init(app: Express): void {
		app.use(RoleRouter);
	}
}
