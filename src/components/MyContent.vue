<script setup>
import ProjectItem from './ProjectItem.vue'
import Icon from './icons/Icon.vue'
import { ref, onMounted, toRefs, watch } from 'vue';

const viewWidth = ref(window.innerWidth);

const props = defineProps({
  content:{
    type: Array,
    default: () => [],
  },
});

const { content } = toRefs(props);
onMounted(() => {
  console.log(`Content is mounted ${viewWidth.value}`)
  console.log(content.value)
})
</script>

<template>
  <ProjectItem v-for="{id, name, description, url_icon} in content" :key="id">
    <template #icon>
      <Icon class="icons" :url_icon="url_icon"/>
    </template>
    <template #heading>
      {{name}}
    </template>
    <template #description>
      {{ description }}
    </template>
    <!-- <div v-show="project.links.length > 0">
      <a v-for="p_link in project.links" :key="p_link.id" :href="p_link.url" target="_blank" rel="noopener">{{p_link.name}} </a>
    </div> -->
  </ProjectItem>
</template>

<style scoped>
.icons {
  width: 25px;
  height: 25px;
  fill: var(--color-text);
}
.icons:hover {
  fill: var(--color-links);
}
@media (min-width: 1024px) {
  .icons {
    width: 40px;
    height: 40px;
  }
  .icons:hover {
    cursor: pointer;
  }
}
</style>