import { Express } from "express";

const RouterUser = require('./users/routes');
const RouterLib = require("./libs/routes");
const RouterBook = require("./books/routes");
const RouterRole = require("./roles/routes");
const RouterAuth = require('./auth/routes');

export default class Routers {
	static init(app: Express): void {
		app.use(RouterLib);
		app.use(RouterBook);
		app.use(RouterRole);
		app.use(RouterUser);
		app.use(RouterAuth);
	}
}
