
import { IApiPointModule } from "@/api/interfaces";
import { Request, Response } from "express";


function get(request: Request, response: Response){
	response.sendFile("../client/dist/index.html");
}




export default {
	name: "public",
	path: `/public/index`,
	priorityIndex: 1,
	get
} as IApiPointModule;