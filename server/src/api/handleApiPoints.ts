import type { IApiPointModule } from "@/api/interfaces";
import type { Application } from "express";

function handlePoint(app: Application, point: IApiPointModule){
	point.get  && app.get(point.path, point.get);
	
	point.post && app.post(point.path, point.post);

	point.use  && app.use(point.path, point.use);
}

function handlePoints(app: Application, points: IApiPointModule[]){
	for (const point of points)
	handlePoint(app, point);	
}

export {handlePoint, handlePoints};