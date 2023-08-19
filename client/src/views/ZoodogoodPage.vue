<template>
  <VHeader/>
  <component is = "element-component" class = "component-container component-views-zoodgood">
    
      <VMain class = "main-container">
        жмяк
        <input type="text" class = "enter-your-name-input">
      </VMain>
    
    <footer class = "footer-container">
      <img class = "raccoon-welcomer" src="@/assets/raccoon.png" alt="">
      <WaveFooter style="--accent-color: var(--green-accent)"/>
    </footer>
  </component>
</template>

<script lang="ts" setup>
  import WaveFooter from '@/components/@contributors/WaveFooter.vue';
  import VHeader from '@/components/layout/Header.vue';
  import VMain from '@/components/layout/Main.vue';
</script>



<style scoped>

.component-container 
{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
}

.main-container
{
  flex-grow: 1;
}

.footer-container
{
  position: relative;
}

.raccoon-welcomer
{
  position: absolute;
  width: calc(15vw + 100px);
  left: calc(3vw + 20px);
  bottom: calc(3vw + 20px);
  z-index: -1;
}
</style>