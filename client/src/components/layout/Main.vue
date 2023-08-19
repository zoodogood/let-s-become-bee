<template>
	<main>
		<slot/>
	</main>
</template>

<style scoped>
	main
	{
		animation: apparance 1s;
		flex-grow: 1;
		padding-block: 1vh;
		padding-inline: 5vw;
		width: 100%;
	}

	@keyframes apparance {
		from { opacity: 0; }
	}
</style>