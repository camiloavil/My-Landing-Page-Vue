<script setup>
import Icon from '@/components/icons/IconStatic.vue';
defineProps({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});
</script>

<template>
  <a :href="url" target="_blank">
    <Icon class="icon_link" :name="name" />
  </a>
</template>

<style scoped>
a{
  display: flex;
  align-items: center;
}
.icon_link{
  transition: var(--vt-c-transition-slow) ease;
  fill: var(--color-text);
  height: 1.6rem;
  padding: 0.2rem 0.5rem;
}

.icon_link:hover{
  transition: var(--vt-c-transition-fast) ease;
  fill: var(--color-links);
}
/* .links:hover {
} */

.selected-effectCard .icon_link {
  fill: var(--color-links);
}

@media (min-width: 1024px) {

  .icon_link:hover{
    transform: scale(1.5);
  }

  .icon_link{
    height: 2rem;
    padding: 0.3rem 0.7rem;
  }
}
</style>