
import type { Request, Response } from "express";
import { IApiPointModule } from "@/api/interfaces";

function get(request: Request, response: Response){
	response.send("job");
	return;
}




export default {
	name: "hi",
	path: "/hi",
	get
} as IApiPointModule;