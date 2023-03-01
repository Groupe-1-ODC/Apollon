import { Request, Response, NextFunction } from "express";
import Routers from "./app/index";

require('dotenv').config();

const express = require("express");

const app = express();
const PORT = process.env.API_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/*", (req: Request, res: Response, next: NextFunction) => {
	res.header("Access-Control-Allow-Origin", "*");
	console.log(`[${req.method}][${req.baseUrl}] => Requested`);
	next();
});

Routers.init(app);

app.listen(PORT, () => {
	console.log(`Server listening at http://localhost:${process.env.API_PORT}`);
});
