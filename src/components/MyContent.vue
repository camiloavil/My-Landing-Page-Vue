<script setup>
import ProjectItem from '@/components/ProjectItem.vue'
import IconDynamicUrl from '@/components/icons/IconDynamicUrl.vue'
import LogoLink from './icons/LogoLink.vue';
import { ref, onMounted, toRefs } from 'vue';

const viewWidth = ref(window.innerWidth);
const changeIcons = ref(false);

const props = defineProps({
  app_content :{
    type: Object,
    required: true
  },
  content :{
    type: Array,
    default: () => [],
  }
});
const { app_content, content } = toRefs(props);
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
  setTimeout(() => {
    changeIcons.value = true;
  },1500);
});
</script>

<template>
  <Transition name="initialShowUp" appear>
    <h2>{{ app_content.title }}</h2>
  </Transition>
  <section>
    <!-- <TransitionGroup name="initialShowUp" appear> -->
      <ProjectItem 
        v-for="({ id, name, description, url_icon, links, showType }, index) in content" 
        @mouseover="selectItem(id, true)" @mouseleave="selectItem(id, false)"
        :class="{'blur-effectCard': showType === 'hide', 'selected-effectCard': showType === 'show', 'selected-gsap-effectCard': showType === 'show'}" 
        :key="index" :id="id" :index="index" 
      >
        <template #icon>
          <IconDynamicUrl class="icons" :url_icon="url_icon" :ready="changeIcons"/>
        </template>
        <template #heading>
          {{name}}
        </template>
        <template #description>
          {{ description }}
        </template>
        <template #links>
          <section class="sectionLinks" v-if="links.length">
            <span class="links-seccion">{{ app_content.textlinks }}</span>
            <LogoLink  v-for="{id, name, url} in links" :key="id" :name="name" :url="url" />
          </section>
        </template>
      </ProjectItem>
    <!-- </TransitionGroup> -->
  </section>
</template>

<style scoped>

.selected-gsap-effectCard {
  /* & .icons{
    fill: var(--color-links);
  } */
  /* Icon{
    fill: var(--color-links);
  } */
}



h2{
  font-size: 1.3rem;
  font-weight: 700;
  padding: 0.2rem 0;
}
.sectionLinks {
  display: flex;
  align-items: center;
}

.icons {
  transition: var(--vt-c-transition-fast) ease;
  width: 25px;
  height: 25px;
  fill: var(--color-text);
}

@media (min-width: 1024px) {

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