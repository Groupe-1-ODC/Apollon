import {Express} from "express";

const PageRouter = require('./pages/routes')

export default class Routers {
	static init(app: Express): void {
		app.use(PageRouter);
	}
}