import {Express} from "express";

const RouterLib = require('./libs/routes');
const RouterBook = require('./books/routes');
const RouterUser = require('./users/routes');

export default class Routers {
	static init(app: Express): void {
		app.use(RouterLib);
		app.use(RouterBook);
		app.use(RouterUser);
	}
}