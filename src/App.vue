<script setup>
import InitAnimation from '@/components/InitAnimation.vue'
import theme from '@/assets/scripts/theme.js'
import { defineAsyncComponent } from 'vue'

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  theme.setDarkTheme();
} else {
  theme.setLightTheme();
}
const Home = defineAsyncComponent(() => import("@/MyHome.vue"));
// const Home = defineAsyncComponent({
//   loader: () => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(import("@/MyHome.vue"));
//       }, 100);
//     })
//   },
//   // loadingComponent: InitAnimation,
//   // delay: 0,
//   // errorComponent: ErrorComponent,
//   // timeout: 2000,
// });


</script>

<template>
  <!-- <Transition name="endWaiting"> -->
  <Suspense>
    <template #default>
      <Home/>
    </template>
    <template #fallback>
      <InitAnimation/>
    </template>
  </Suspense>
<!-- </Transition> -->
</template>

<style scoped>
.endWaiting-leave-active {
  transition: opacity 0.3s ease;
}
.endWaiting-leave-to {
  opacity: 0;
}
</style>
