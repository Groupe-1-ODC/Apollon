import { Request, Response } from "express";
const express = require("express");

const app = express();

app.get("/", (req: Request, res: Response) => {
	res.send("Hellow world");
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server listening at http://localhost:${PORT}`);
})