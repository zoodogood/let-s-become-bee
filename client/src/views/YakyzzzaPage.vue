<template>
	<component is = "element-component" class = "component-container component-views-zoodgood">
	  <main class = "main-container">
		 
		 жмяк
		 <input type="text">
	  </main>
	  
	  <footer class = "footer-container">
		 <img class = "yakyzzza-welcomer" src="@/assets/Yakyzzza.png" alt="">
		 <WaveFooter style="--accent-color: var(--red-accent)"/>
	  </footer>
	</component>
 </template>
 
 <script lang="ts" setup>
	import WaveFooter from '@/components/@contributors/WaveFooter.vue';
 
 </script>
 
 
 
 <style scoped>
 
 .component-container 
 {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	
 }
 
 .main-container
 {
	flex-grow: 1;
 }
 
 .footer-container
 {
	position: relative;
 }
 
 .yakyzzza-welcomer
 {
	position: absolute;
	width: calc(15vw + 40px);
	left: calc(3vw + 20px);
	bottom: calc(3vw + 10px);
	z-index: -1;
	border-radius: 50%;
	border: 5px var( --green-accent ) solid;
	box-shadow: 0 0 10px #444;
	animation-name: yakyzzza-welcomer ;
	animation-duration: 8s;
	animation-iteration-count: infinite;
	animation-direction: alternate;
 }

 @keyframes yakyzzza-welcomer {
  0% {
	transform: translate(0, 0px);
  }
  
  100% {
	transform: translate(0, -75px);
  }
}
 </style>