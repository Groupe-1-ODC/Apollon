import { Request, Response } from "express";

const express = require("express");
const controllers = require("./controllers");

const router = express.Router();

router
	.route("/roles")
	.get((req: Request, res: Response) => controllers.fetchRoles(req, res))
	.post((req: Request, res: Response) => controllers.createRole(req, res));

router
	.route("/roles/:role_id")
	.get((req: Request, res: Response) => controllers.fetchRole(req, res))
	// .patch((req: Request, res: Response) => controllers.updateRole(req, res) )
	.delete((req: Request, res: Response) => controllers.deleteRole(req, res));

router
	.route("/roles/isbn/:isbn")
	.get((req: Request, res: Response) =>
		controllers.fetchRoleByIsbn(req, res)
	);

module.exports = router;
