import {Request, Response} from "express";

const express = require("express");
const controllers = require('./controllers');


const router = express.Router();


router.route('/users')
	.get((req: Request, res: Response) => controllers.fetchUsers(req, res) )
	.post((req: Request, res: Response) => controllers.createUser(req, res) )

router.route('/users/:user_id')
	.get((req: Request, res: Response) => controllers.fetchUser(req, res) )
	// .patch((req: Request, res: Response) => controllers.updateUser(req, res) )
	.delete((req: Request, res: Response) => controllers.deleteUser(req, res) )


module.exports = router;