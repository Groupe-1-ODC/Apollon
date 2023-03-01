import { Request, Response } from "express";

const controller = require("./controller");

const express = require("express");

const router = express.Router();

router
	.route("/roles")
	.get((req: Request, res: Response) => controller.fetchRoles(req, res))
	.post((req: Request, res: Response) => controller.createRole(req, res));

router
	.route("/roles/:role_id")
	.get((req: Request, res: Response) => controller.fetchRole(req, res))
	.delete((req: Request, res: Response) => controller.deleteRole(req, res))
	.patch((req: Request, res: Response) => controller.patchRole(req, res));

module.exports = router;
