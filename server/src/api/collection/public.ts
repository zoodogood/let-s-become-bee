
import { IApiPointModule } from "@/api/interfaces";
import { Express } from "@/Express";


const use = Express.static("../client/dist") as () => unknown;




export default {
	name: "public",
	path: `/public`,
	use
} as IApiPointModule;