<script setup lang = "ts">
	import VHeader from '@/components/layout/Header.vue';
	import VMain from '@/components/layout/Main.vue';
	import VFooter from '@/components/layout/Footer.vue';
</script>


<template>
	<VHeader/>
	<VMain>
		<slot/>
	</VMain>
	<VFooter/>
</template>
