<script setup>
defineProps({
  myicon: {
    type: Object,
  }
});
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" :viewBox="myicon.viewBox" fill="currentColor">
    <path :d="myicon.path_d" />
  </svg>
</template>

