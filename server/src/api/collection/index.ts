
import type { Request, Response } from "express";
import { IApiPointModule } from "@/api/interfaces";
import { MainApiPointsNameEnum } from "@/lib/MainApiPoints";



async function get(request: Request, response: Response){
	const {collection} = await import("@/api");
	response.json([...collection.keys()])
	return;
}




export default {
	name: MainApiPointsNameEnum.Index,
	path: "/",
	get
} as IApiPointModule;