<script setup>
import ProjectItem from '@/components/ProjectItem.vue'
import Icon from '@/components/icons/IconDynamicUrl.vue'
import LogoLink from './icons/LogoLink.vue';
import { ref, onMounted, toRefs } from 'vue';

const viewWidth = ref(window.innerWidth);

const props = defineProps({
  title :{
    type: String,
    required: true
  },
  content :{
    type: Array,
    default: () => [],
  },
});
const { title, content } = toRefs(props);
const formatDescription = (id, description) => {
  let limitCharacters = (viewWidth.value < 1024)? 50 : 90;
  let endDescription = description.length > limitCharacters? '...' : '.'
  return (description.slice(0, limitCharacters) + endDescription);
};
const selectItem = (id, selector) => {
  if (selector === false) {
    content.value.forEach(item => item.showType = 'normal');
  }else{
    content.value.find(item => item.id === id).showType = 'show';
    content.value.filter(item => item.id !== id).forEach(item => item.showType = 'hide');
  }
};
const handleResize = () => { viewWidth.value = window.innerWidth };
onMounted(() => {
  window.addEventListener('resize', handleResize);
});
</script>

<template>
  <Transition name="initialShowUp" appear>
    <h2>{{ title }}</h2>
  </Transition>
  <section>
    <TransitionGroup name="initialShowUp" appear>
      <ProjectItem 
        v-for="{ id, name, description, url_icon, links, showType } in content" 
        @mouseover="selectItem(id, true)" @mouseleave="selectItem(id, false)"
        :class="{'blur-effectCard': showType === 'hide', 'selected-effectCard': showType === 'show'}" 
        :key="id" :id="id"
      >
        <template #icon>
          <Icon class="icons" :url_icon="url_icon"/>
        </template>
        <template #heading>
          {{name}}
        </template>
        <template #description>
          {{ formatDescription(id, description) }}
        </template>
        <template #links>
          <section class="sectionLinks" v-if="links.length">
            <span class="links-seccion">links: </span>
            <LogoLink class="links" v-for="{id, name, url} in links" :key="id" :name="name" :url="url" />
          </section>
        </template>
      </ProjectItem>
    </TransitionGroup>
  </section>
</template>

<style scoped>
/* 
.initialShowUp-move{
  transition: all 0.3s ease;
} */

.blur-effectCard {
  filter: blur(1px);
  transform: scale(0.9);
}

.selected-effectCard {
  background-color: var(--color-background-soft);
  border: 3px solid var(--color-border);
  filter: blur(0);
  transform: scale(1);
}
.selected-effectCard .icons{
  fill: var(--color-links);
}

h2{
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.2rem 0;
}
.sectionLinks {
  display: flex;
  align-items: center;
}

.icons {
  transition: var(--vt-c-transition-slow) ease;
  width: 25px;
  height: 25px;
  fill: var(--color-text);
}

@media (min-width: 1024px) {
  .blur-effectCard {
    filter: blur(1px);
    transform: scale(0.9);
  }
  .selected-effectCard {
    filter: blur(0);
    transform: scale(1.1);
    border: 3px solid var(--color-border);
  }
  h2{
    font-size: 2rem;
    font-weight: 700;
    margin: 2rem 0;
    /* padding: 2rem 0; */
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