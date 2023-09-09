<script setup>
// import iconBasic from '@/assets/icons/basicproject.svg';
import { toRefs, ref, onMounted, computed } from 'vue';

const iconString = ref('');
const props = defineProps({
  ready: {
    type: Boolean,
    default: false,
  },
  url_icon: {
    type: String,
    default: '@/assets/icons/basicproject.svg',
  }
});
const { url_icon, ready } = toRefs(props);

const loadSVG = async (url) => {
  // console.log(`Loading ${url}`);
  try{
    let response = await fetch(url);
    if (response.ok){
      iconString.value = await response.text();
    }else {
      throw new Error(`HTTP error: ${response.status}`);
    }
  }catch(error){
    iconString.value = '';
  }
}
const showDefaultIcon = computed(() => {
  return (iconString.value === '')||(!ready.value);
});
onMounted(() => {
  loadSVG(url_icon.value);
})
</script>

<template>
  <Transition name="rotateIcon" mode="out-in">
    <svg v-if="showDefaultIcon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M77.08 292.97c-11.42 13.63-16.85 30.88-15.29 48.59 1.56 17.71 9.92 33.75 23.55 45.17l112.2 94.03c2.88 2.41 6.52 3.74 10.28 3.74h226.66c8.84 0 16-7.16 16-16V309.93c0-37.33-30.37-67.7-67.7-67.7h-69.41v-73.22c0-36.7-29.86-66.56-66.56-66.56s-66.56 29.86-66.56 66.56v123.58l-9.41-7.88c-28.13-23.57-70.19-19.87-93.76 8.26zm24.52 20.55c12.24-14.6 34.08-16.53 48.68-4.29l35.69 29.91a16.018 16.018 0 0 0 17.04 2.24 16 16 0 0 0 9.23-14.5V169.01c0-19.06 15.5-34.56 34.56-34.56 19.06 0 34.56 15.5 34.56 34.56v89.22c0 8.84 7.16 16 16 16h85.41c19.68 0 35.7 16.01 35.7 35.7V452.5H213.63l-107.74-90.29c-7.08-5.93-11.42-14.26-12.23-23.46-.81-9.19 2.01-18.15 7.94-25.23z"/>
      <path d="M362.13 219.12c8.46 2.56 17.39-2.23 19.94-10.69 3.96-13.12 5.97-26.79 5.97-40.61 0-77.37-62.95-140.32-140.32-140.32-77.37 0-140.32 62.95-140.32 140.32 0 16.51 2.84 32.68 8.46 48.07 2.37 6.49 8.5 10.52 15.03 10.52 1.82 0 3.67-.31 5.48-.97 8.3-3.03 12.58-12.21 9.55-20.51-4.33-11.86-6.52-24.35-6.52-37.11 0-59.73 48.59-108.32 108.32-108.32s108.32 48.59 108.32 108.32c0 10.69-1.55 21.24-4.6 31.36-2.56 8.46 2.23 17.38 10.69 19.94z"/>
    </svg>
    <div v-else v-html="iconString"></div>
  </Transition>
</template>

<style scoped>
.selected-effectCard .icons{
  fill: var(--color-links);
}
svg{
  position: absolute;
}
.rotateIcon-enter-from{
  transform: rotateY(90deg);
}
.rotateIcon-enter-active{
  transition: all var(--vt-c-transition-slow) ease;
}
.rotateIcon-leave-to{
  transform: rotateY(-90deg);
}
.rotateIcon-leave-active {
  transition: all var(--vt-c-transition-slow) ease;
}
</style>

