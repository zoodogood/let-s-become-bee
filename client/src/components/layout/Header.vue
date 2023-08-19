<script setup lang = "ts">
	import { routes } from '@/router';
	import VIcon from '@/components/icons/Icon.vue';
</script>

<template>
	<header>
		
		<VIcon icon = "home" color = "var( --blue-accent )"/>
  </header>

  <nav class = "navigation-container" style = ";">
			<li
				class = "navigation-item"
				v-for = "{path, name} in routes"
			>
				<router-link :to="path" class = "item-link">
					<span class = "route-name">{{ name }}</span>
				</router-link>
			</li>
		</nav>
		<span style="font-size: 0.8em; opacity: 0.2;">=</span>
		{{ `<ДРУЗЬЯ>` }}
</template>

<style scoped>

	.navigation-container
	{
		display: flex;	
	}


	.navigation-container::before
	{
		content: '(';
		margin-right: 0.5em;
		opacity: 0.2;
	}

	.navigation-container::after
	{
		content: ')';
		margin-left: 0.5em;
		opacity: 0.2;
	}

	.navigation-item:not(:last-child)::after
	{
		/* separator */
		content: '=';
		margin-inline: 0.5em;
		opacity: 0.2;
	}

	.navigation-item
	{
		list-style: none;
		position: relative;
		display: inline-flex;
		flex-grow: 1;
		flex-shrink: 0;
		
	}

	.item-link
	{
		text-decoration: none;
	}
		
	.route-name
	{
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	

	.route-name:hover::before
	{
		content: '(Нажми меня)';
		position: absolute;
		font-size: 0.4em;
		bottom: -10px;
		white-space: nowrap;
	}
	
</style>