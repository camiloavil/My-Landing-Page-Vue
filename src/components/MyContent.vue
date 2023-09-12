<script setup>
import { animateInClass_I, animateInChildren_II } from '@/assets/scripts/gsap/initAppears';
import ProjectItem from '@/components/ProjectItem.vue'
import IconDynamicUrl from '@/components/icons/IconDynamicUrl.vue'
import LogoLink from './icons/LogoLink.vue';
import { ref, onMounted, toRefs } from 'vue';

const viewWidth = ref(window.innerWidth);
const endAppear = ref(false);

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

const handleResize = () => { viewWidth.value = window.innerWidth };
const endAnimation = () => {
  setTimeout(() => {
    endAppear.value = true;
  },250);
}
onMounted(() => {
  window.addEventListener('resize', handleResize);
  animateInClass_I('.title')
  animateInChildren_II(document.querySelector(".itemsContainer"), endAnimation )
});
</script>

<template>
  <h2 class="title">{{ app_content.title }}</h2>
  <section class="itemsContainer">
      <ProjectItem 
        v-for="({ id, name, description, url_icon, links }, index) in content" 
        :key="index" :id="id" :linkShow="(links.length)? true : false" :ready="endAppear" 
      >
        <template #icon>
          <IconDynamicUrl class="icons" :url_icon="url_icon" :ready="endAppear"/>
        </template>
        <template #heading>
          {{name}}
        </template>
        <template #description>
          {{ description }}
        </template>
        <template #links>
            <span class="links-seccion">{{ app_content.textlinks }}</span>
            <LogoLink  v-for="{id, name, url} in links" :key="id" :name="name" :url="url" />
        </template>
      </ProjectItem>
  </section>
</template>

<style scoped>

h2{
  font-size: 1.3rem;
  font-weight: 700;
  padding: 0.2rem 0;
}

.icons {
  /* transition: var(--vt-c-transition-fast) ease; */
  width: 25px;
  height: 25px;
  fill: var(--color-text);
}

@media (min-width: 1024px) {

  h2{
    font-size: 2rem;
    font-weight: 700;
    margin: 2rem 0;
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