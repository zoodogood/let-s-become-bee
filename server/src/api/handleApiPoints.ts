import type { IApiPointModule } from "@/api/interfaces";
import type { Application } from "express";

function handlePoint(app: Application, point: IApiPointModule){
	if (point.get)
	app.get(point.path, point.get);

	if (point.post)
	app.post(point.path, point.post);
}

function handlePoints(app: Application, points: IApiPointModule[]){
	for (const point of points)
	handlePoint(app, point);
		
	
}

export {handlePoint, handlePoints};