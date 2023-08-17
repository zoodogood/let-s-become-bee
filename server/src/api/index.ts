import * as collectionRaw from '@/api/collection/mod';
import { Collection } from '@discordjs/collection';
import type { IApiPointModule } from '@/api/interfaces';

function compareByPriorityIndexForSort(a: {priorityIndex?: number}, b: {priorityIndex?: number}) {
	const isBigThan = (a.priorityIndex ?? 0) > (b.priorityIndex ?? 0);
	return (-1) ** +isBigThan;
}

const apiPointEntries = Object.values(collectionRaw)
	.map(point => [point.name, point]) as [string, IApiPointModule][];

const collection = new Collection(apiPointEntries)
	.sort(compareByPriorityIndexForSort);

export { handlePoints, handlePoint } from "@/api/handleApiPoints";
export { collection };
