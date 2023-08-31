<script setup>
import iconBasic from '@/assets/icons/basicproject.svg';
import { toRefs, ref, onMounted } from 'vue';

const iconString = ref('');
const props = defineProps({
  url_icon: {
    type: String,
    default: '',
  }
});
const { url_icon } = toRefs(props);
const loadSVGvI = async (url) => {
  iconString.value = await fetch(url)
  .then(response => response.text())
  .then(svgContent => svgContent)
  .catch(async (error) => {
    console.log(`ERROR ${error}`);
    let svgBasic = await fetch(iconBasic)
    .then(response => response.text())
    .then(svgContent => svgContent)
    console.log(`SVG-Basic loading from ${svgBasic}`);
    // return 'Error'
  });
  // iconString.value = svgData
  // console.log(`SVG loaded: ${svgData}`);
}

const loadSVG = async (url) => {
  try{
    let response = await fetch(url);
    if (response.ok){
      iconString.value = await response.text();
    }else {
      throw new Error(`HTTP error: ${response.status}`);
    }
  }catch(error){
    // console.log(`ERROR ${error}`);
    let response = await fetch(iconBasic);
    if(response.ok){
      iconString.value = await response.text();
    }else{
      throw new Error(`HTTP error: ${response.status}`);
    }
  }
  // .then(response => response.text())
  // .then(svgContent => svgContent)
  // .catch(async (error) => {
  //   console.log(`ERROR ${error}`);
  //   let svgBasic = await fetch(iconBasic)
  //   .then(response => response.text())
  //   .then(svgContent => svgContent)
  //   console.log(`SVG-Basic loading from ${svgBasic}`);
  //   return 'Error'
  // });
  // iconString.value = svgData
  // console.log(`SVG loaded: ${svgData}`);
}
onMounted(() => {
  let url = iconBasic;
  if (url_icon.value !== '') {
    url = url_icon.value;
  }
  // console.log(`SVG loading from ${url}`);
  loadSVG(url);
  // fetch(url)
  // .then(response => response.text())
  // .then(svgContent => {
  //   iconString.value = svgContent
  // })
  // .catch(error => {
  //   console.error(error);
  // });
})
</script>

<template>
  <div v-html="iconString"></div>
</template>
<style scoped>
</style>

