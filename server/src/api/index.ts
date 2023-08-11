import * as collectionRaw from '@/api/collection/mod';
import { Collection } from '@discordjs/collection';

function compareByPriorityIndex(a: {priorityIndex?: number}, b: {priorityIndex?: number}): number {
	return Number((a.priorityIndex ?? 0) < (b.priorityIndex ?? 0));
}

const collection = new Collection(Object.entries(collectionRaw))
	.sort(compareByPriorityIndex);

export { handlePoints, handlePoint } from "@/api/handleApiPoints";
export { collection };
