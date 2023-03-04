import {Request, Response} from "express";

const express = require("express");
const controllers = require('./controllers');


const router = express.Router();


router.route('/auth/login')
	.post((req: Request, res: Response) => controllers.login(req, res) )


module.exports = router;