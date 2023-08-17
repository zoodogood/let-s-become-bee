import type { RequestHandler } from "express";
type PointCallback = (...handlers: RequestHandler[]) => unknown;


interface IApiPointModule {
	path: string,
	name: string,
	priorityIndex?: number,
	get?: PointCallback,
	post?: PointCallback,
	use?: PointCallback
}

export { IApiPointModule };