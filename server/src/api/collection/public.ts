
import { IApiPointModule } from "@/api/interfaces";
import { Express } from "@/Express";
import { MainApiPointsNameEnum } from "@/lib/MainApiPoints";


const use = Express.static("../client/dist") as () => unknown;




export default {
	name: MainApiPointsNameEnum.Static,
	path: `/public`,
	use
} as IApiPointModule;