<script setup>
import ProjectItem from '@/components/ProjectItem.vue'
import Icon from '@/components/icons/IconDynamicUrl.vue'
import LogoLink from './icons/LogoLink.vue';
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
  console.log(`Content is mounted viewWidth.value ${viewWidth.value}`)
  // console.log(content.value)
})
</script>

<template>
  <ProjectItem v-for="{id, name, description, url_icon, links} in content" :key="id" :description="description">
    <template #icon>
      <Icon class="icons" :url_icon="url_icon"/>
    </template>
    <template #heading>
      {{name}}
    </template>
    <template #description>
      {{ description }}
    </template>
    <template #links>
      <div v-show="links.length > 0">
        <LogoLink v-for="{id, name, url} in links" :name="name" :url="url" />
      </div>
    </template>
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