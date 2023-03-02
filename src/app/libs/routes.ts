import {Request, Response} from "express";

const express = require("express");
const controllers = require('./controllers');


const router = express.Router();


router.route('/libs')
	.post((req: Request, res: Response) => controllers.createLib(req, res) )


module.exports = router;