import type { Request, Response } from "express";


interface PointCallback {
	(request: Request, response: Response, next?: () => unknown): unknown;
	(error: Error, request: Request, response: Response, next?: () => unknown): unknown;
}


interface IApiPointModule {
	path: string,
	name: string,
	priorityIndex?: number,
	get?: PointCallback,
	post?: PointCallback,
	use?: PointCallback
}



export { IApiPointModule };