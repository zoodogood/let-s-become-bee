import type { Request, Response } from "express";

interface IApiPointModule {
	path: string,
	name: string,
	priorityIndex?: number,
	get?: (request: Request, response: Response) => void,
	post?: (request: Request, response: Response) => void,
	use?: (request: Request, response: Response) => void
}

export { IApiPointModule };