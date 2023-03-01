import { Request, Response, NextFunction } from "express";
import Routers from "./app/index";

const express = require("express");

const db = require("./app/queries");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use("/*", (req: Request, res: Response, next: NextFunction) => {
	res.header("Access-Control-Allow-Origin", "*");
	console.log(`[${req.method}][${req.baseUrl}] => Requested`);
	next();
});

Routers.init(app);

const PORT = 3000;

app.get("/users", db.getUsers);

app.listen(PORT, () => {
	console.log(`Server listening at http://localhost:${PORT}`);
});
