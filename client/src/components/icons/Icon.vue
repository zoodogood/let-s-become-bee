<script setup lang = "ts">
	import { DefineComponent } from 'vue';
	import {icons, IconNameType} from './mod';

	interface internalProps {
		icon: IconNameType;
		color?: string;
		end?: boolean;
		start?: boolean;
		size?: number | string;
	}

	const props = defineProps<internalProps>();
	const component = icons.get(props.icon) as DefineComponent;

	const size = props.size && (typeof props.size === "number" ? `${ props.size }em` : props.size);
</script>


<template>
	<component is = "element-icon" class = "wrapper" :style = "{'--size': size, '--at-end': props.end, '--at-start': props.start}">
		<component :is = "component" :style = "`fill: ${ props.color ?? 'inherit' }`"></component>
	</component>
	
</template>


<style scoped>
	.wrapper
	{
		width: var(--size, 1em);
		aspect-ratio: 1 / 1;
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}

	.at-start
	{
		margin-left: 0.5em;
	}

	.at-end
	{
		margin-right: 0.5em;
	}
</style>