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


router.route('/users/:user_id/libs/:lib_id/books')
	.get((req: Request, res: Response) => controllers.fetchUserBooks(req, res) )
	.post((req: Request, res: Response) => controllers.addBookToLib(req, res) )

router.route('/users/:user_id/libs/:lib_id/books/read')
	.get((req: Request, res: Response) => controllers.fetchUserBooksRead(req, res) )


router.route('/users/:user_id/libs/:lib_id/books/:book_id')
	.delete(async (req: Request, res: Response) => controllers.removeBookToLib(req, res) )

module.exports = router;