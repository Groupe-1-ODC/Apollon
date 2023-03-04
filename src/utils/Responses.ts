import { Response } from "express";


export default class Responses {
	static OK(res: Response): void {
		res.status(200).send({message: "OK"});
		console.log(`[${res.req.method}][${res.req.url}] <= ${res.statusCode}`);
	}

	static Custom(res: Response, body: object, status: number = 200): void {
		res.status(status).send(body);
		console.log(`[${res.req.method}][${res.req.url}] <= ${res.statusCode}`);
	}

	static BadRequest(res: Response): void {
		res.status(400).send({message: "Bad Request"});
		console.log(`[${res.req.method}][${res.req.url}] <= ${res.statusCode}`);
	}

	static NotFound(res: Response): void {
		res.status(404).send({message: "Not Found"});
		console.log(`[${res.req.method}][${res.req.url}] <= ${res.statusCode}`);
	}

	static Unauthorized(res: Response): void {
		res.status(401).send({message: "Unauthorized"});
		console.log(`[${res.req.method}][${res.req.url}] <= ${res.statusCode}`);
	}

	static ErrorUnknown(res: Response): void {
		res.status(500).send({message: "Something went wrong"});
		console.log(`[${res.req.method}][${res.req.url}] <= ${res.statusCode}`);
	}
}