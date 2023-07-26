<script setup>
defineProps({
  icon_data: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <a :href="icon_data.url" target="_blank">
    <svg class="icon_link" xmlns="http://www.w3.org/2000/svg" v-bind:viewBox="icon_data.viewbox">
      <title v-text="icon_data.name"/>
      <path v-bind:d="icon_data.path_d"/>
    </svg>
  </a>
</template>

<style scoped>
a{
  text-align: center;
}
.icon_link{
  fill: var(--color-text);
  height: 1.6rem;
  padding: 3px 0.6rem;
}
.icon_link:hover{
  fill: var(--color-links);
}
@media (min-width: 1024px) {
  .icon_link{
    height: 2rem;
    padding: 6px 1.5rem 0 0;
  }
}
</style>