<script setup>
import InitAnimation from '@/components/InitAnimation.vue'
import theme from '@/assets/scripts/theme.js'
import { onMounted, defineAsyncComponent } from 'vue'

const Home = defineAsyncComponent({
  loader: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(import("@/Home.vue"));
      }, 1000);
    })
  },
  loadingComponent: InitAnimation,
  delay: 0,
  // errorComponent: ErrorComponent,
  // timeout: 2000,
})
onMounted(() => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme.setDarkTheme();
  } else {
    theme.setLightTheme();
  }
});
</script>

<template>
  <Transition>
    <Home/>
  </Transition>
</template>

<style scoped>
/* .v-enter-active, */
.v-leave-active {
  transition: opacity 0.5s ease;
}

/* .v-enter-from, */
.v-leave-to {
  opacity: 0;
}
</style>
