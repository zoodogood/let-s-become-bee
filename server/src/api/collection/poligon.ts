
import type { Request, Response } from "express";
import { IApiPointModule } from "@/api/interfaces";

function get(request: Request, response: Response){
	response.send("job");
	return;
}

function use(request: Request, response: Response){
	response.send("hi is 404 testing");
}


export default {
	name: "poligon",
	path: "/poligon",
	priorityIndex: -1,
	get,
	use
} as IApiPointModule;