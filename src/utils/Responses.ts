import { Response } from "express";


export default class Responses {
	static OK(res: Response): void {
		res.status(200).send({message: "OK"});
	}

	static Custom(res: Response, body: object, status: number = 200): void {
		res.status(status).send(body);
	}

	static NotFound(res: Response): void {
		res.status(404).send({message: "Not Found"});
	}

	static Unauthorized(res: Response): void {
		res.status(401).send({message: "Unauthorized"});
	}

	static ErrorUnknown(res: Response): void {
		res.status(500).send({message: "Something went wrong"});
	}
}