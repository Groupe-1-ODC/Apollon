import {Request, Response} from "express";

const controller = require('./controller')

const express = require("express");

const router = express.Router()


router.route('/pages')
	.get((req: Request, res: Response) => controller.fetchPages(req, res) )
	.post((req: Request, res: Response) => controller.createPage(req, res) )



module.exports = router