import {Request, Response} from "express";

const express = require("express");
const controllers = require('./controllers');


const router = express.Router();


router.route('/books')
	.get((req: Request, res: Response) => controllers.fetchBooks(req, res) )
	.post((req: Request, res: Response) => controllers.createBook(req, res) )

router.route('/books/:book_id')
	.get((req: Request, res: Response) => controllers.fetchBook(req, res) )
	// .patch((req: Request, res: Response) => controllers.updateBook(req, res) )
	.delete((req: Request, res: Response) => controllers.deleteBook(req, res) )


module.exports = router;