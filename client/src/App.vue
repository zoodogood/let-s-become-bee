<template>
  <router-view/>
</template>

<style>
:root
{
  --cursor-default: url('@/assets/dot.svg') 16 16, auto;
	--cursor-pointer: url('@/assets/dots-circle.svg') 8 8, auto;
}

body
{
  cursor: var( --cursor-default );
}
</style>