
import type { Request, Response } from "express";
import { IApiPointModule } from "@/api/interfaces";



async function get(request: Request, response: Response){
	const {collection} = await import("@/api");
	response.json([...collection.keys()])
	return;
}




export default {
	name: "index",
	path: "/",
	get
} as IApiPointModule;