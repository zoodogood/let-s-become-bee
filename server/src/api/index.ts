import * as collectionRaw from '@/api/collection/mod';
import { Collection } from '@discordjs/collection';

function compareByPriorityIndexForSort(a: {priorityIndex?: number}, b: {priorityIndex?: number}) {
	const isBigThan = (a.priorityIndex ?? 0) > (b.priorityIndex ?? 0);
	return (-1) ** +isBigThan;
}

const collection = new Collection(Object.entries(collectionRaw))
	.sort(compareByPriorityIndexForSort);

export { handlePoints, handlePoint } from "@/api/handleApiPoints";
export { collection };
