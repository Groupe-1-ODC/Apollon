import {Express} from "express";

const RouterLib = require("./libs/routes");
const RouterBook = require("./books/routes");
const RouterRole = require("./books/roles");
const RouterUser = require('./users/routes');

export default class Routers {
	static init(app: Express): void {
		app.use(RouterLib);
		app.use(RouterBook);
		app.use(RouterUser);
		app.use(RouterRole);
	}
}