
import { IApiPointModule } from "@/api/interfaces";
import { Request, Response } from "express";
import Path from 'path';


function get(request: Request, response: Response){
	const absolutePath = Path.resolve(process.cwd(), "../client/dist/index.html");
	response.sendFile(absolutePath);
}




export default {
	name: "public",
	path: `/public/index`,
	priorityIndex: 1,
	get
} as IApiPointModule;