<script setup>
import ProjectItem from '@/components/ProjectItem.vue'
import Icon from '@/components/icons/IconDynamicUrl.vue'
import LogoLink from './icons/LogoLink.vue';
import { ref, onMounted, toRefs } from 'vue';

const viewWidth = ref(window.innerWidth);

const props = defineProps({
  content:{
    type: Array,
    default: () => [],
  },
});
const { content } = toRefs(props);
const formatDescription = (description) => {
  let limitCharacters = (viewWidth.value < 1024)? 50 : 100;
  let endDescription = description.length > limitCharacters? '...' : '.'
  return (description.slice(0, limitCharacters) + endDescription);
};
const handleResize = () => {
  viewWidth.value = window.innerWidth;
};
onMounted(() => {
  console.log(`Content is mounted viewWidth.value ${viewWidth.value}`)
  window.addEventListener('resize', handleResize);
  // console.log(content.value)
});
</script>

<template>
  <h2>My Portfolio</h2>
  <ProjectItem v-for="{id, name, description, url_icon, links} in content" :key="id" :description="description">
    <template #icon>
      <Icon class="icons" :url_icon="url_icon"/>
    </template>
    <template #heading>
      {{name}}
    </template>
    <template #description>
      {{ formatDescription(description) }}
    </template>
    <template #links>
      <div v-show="links.length > 0">
        <span class="links">links: </span>
        <LogoLink v-for="{id, name, url} in links" :key="id" :name="name" :url="url" />
      </div>
    </template>
  </ProjectItem>
</template>

<style scoped>
h2{
  font-size: 1.2rem;
  font-weight: 600;
}

div {
  display: flex;
  align-items: center;
}
span .links {
  padding-right: 15px;
}
.icons {
  width: 25px;
  height: 25px;
  fill: var(--color-text);
}
.icons:hover {
  fill: var(--color-links);
}
@media (min-width: 1024px) {
  h2{
    font-size: 2rem;
    font-weight: 700;
  }
  .icons {
    width: 40px;
    height: 40px;
  }
  .icons:hover {
    cursor: pointer;
  }
}
</style>