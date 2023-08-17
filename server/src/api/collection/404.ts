
import type { Request, Response } from "express";
import { IApiPointModule } from "@/api/interfaces";

async function use(request: Request, response: Response){
	const isPublic = await (async () => {
		const PUBLIC_NAME = "public";
		const {collection} = await import('@/api');
		const path = collection.get(PUBLIC_NAME)?.path;
		if (!path){
			return null;
		}
		console.dir({path, public: request}, {showHidden: true, depth: 1});
		
		

		// to-do: слабое место, плохая, ненаёжная проверка; используется локальная константа PUBLIC_NAME вместо внешней привязки
		return `/${ request.originalUrl }`.startsWith(path);
	})();

	const message = isPublic ? "is public 404" : "is 404";
	response.send(message);
}


export default {
	name: "404",
	path: "*",
	priorityIndex: -1,
	use
} as IApiPointModule;