
import type { Request, Response } from "express";
import { IApiPointModule } from "@/api/interfaces";
import { MainApiPointsNameEnum } from "@/lib/MainApiPoints";


async function use(request: Request, response: Response){
	
	const isStatic = await (async () => {
		const {collection} = await import('@/api');
		const path = collection.get(MainApiPointsNameEnum.Static)?.path;
		if (!path){
			return null;
		}
		

		// to-do: слабое место, плохая, ненаёжная проверка; используется локальная константа PUBLIC_NAME вместо внешней привязки
		// Кроме того нарушен принцип единой ответсвенности
		// important-to-do
		return `${ request.originalUrl }`.startsWith(path);
	})();

	if (isStatic){
		const {collection} = await import('@/api');
		const get = collection.get(MainApiPointsNameEnum.ClientIndex)?.get;
		
		if (!get){
			response.send("No get")
			return;
		}
		get(request, response);
		return;
	}
	response.send("is 404");
}




export default {
	name: "404",
	path: "*",
	priorityIndex: -1,
	use
} as IApiPointModule;