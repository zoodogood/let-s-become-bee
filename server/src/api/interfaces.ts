import type { Request, Response } from "express";


type PointCallback = (request: Request, response: Response, next?: () => unknown) => unknown;
type PointCallbackWithErrorParam = (error: Error, request: Request, response: Response, next?: () => unknown) => unknown;

interface IApiPointModule {
	path: string,
	name: string,
	priorityIndex?: number,
	get?: PointCallback | PointCallbackWithErrorParam,
	post?: PointCallback | PointCallbackWithErrorParam,
	use?: PointCallback | PointCallbackWithErrorParam
}

export { IApiPointModule };