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

const loadSVG = async (url) => {
  try{
    let response = await fetch(url);
    if (response.ok){
      iconString.value = await response.text();
    }else {
      throw new Error(`HTTP error: ${response.status}`);
    }
  }catch(error){
    let response = await fetch(iconBasic);
    if(response.ok){
      iconString.value = await response.text();
    }else{
      throw new Error(`HTTP error: ${response.status}`);
    }
  }
}
onMounted(() => {
  let url = iconBasic;
  if (url_icon.value !== '') {
    url = url_icon.value;
  }
  loadSVG(url);
})
</script>
<template>
  <div v-html="iconString"></div>
</template>
<style scoped>
</style>

