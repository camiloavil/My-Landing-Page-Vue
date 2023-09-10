<script setup>
import { animateInClass_I, animateInClass_II, itemSelected } from '@/assets/scripts/animateGsap';
import ProjectItem from '@/components/ProjectItem.vue'
import IconDynamicUrl from '@/components/icons/IconDynamicUrl.vue'
import LogoLink from './icons/LogoLink.vue';
import { ref, onMounted, toRefs } from 'vue';
import { gsap } from 'gsap';

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

const selectItem = (ev, index, id) => {
  console.log(`HOVER:${index} ${ev.target}`);
  // content.value.find(item => item.id === id).showType = 'show';
  content.value.filter(item => item.id !== id).forEach(item => item.showType = 'hide');
  
  console.log(ev.target.querySelector('h3'));
  
  gsap.to(ev.target, { ...itemSelected });
  // const svg = ev.target.querySelector('svg');
  gsap.to(ev.target.querySelector('svg'), { fill: 'var(--color-links)' });
  gsap.to(ev.target.querySelector('h3'), { color: 'var(--color-links)' });
};

const deSelectItemLeave = (ev, index, id) => {
  console.log(`leave ${index} - ${id} ${ev.target}`);
  content.value.forEach(item => item.showType = 'normal');

  gsap.to(ev.target, {
    scale: 1,
    duration: 0.1,
    border: 'none',
    backgroundColor: 'var(--color-background)',
    zIndex: 1,
    ease: "elastic.out(1, 0.5)",
    // onComplete: done,
    // delay: index.value * 0.2
  });
  gsap.to(ev.target.querySelector('svg'), {scale: 1, fill: 'var(--color-text)'});
  gsap.to(ev.target.querySelector('h3'), { color: 'var(--color-heading)' });


}
const itemsContainer = ref(null);
const handleResize = () => { viewWidth.value = window.innerWidth };
onMounted(() => {
  window.addEventListener('resize', handleResize);
  animateInClass_I('.title')
  animateInClass_II('.item-effectCard');
  // animateInChildren(itemsContainer.value);

  // gsap.from(itemsContainer.value.children, { 
  //   autoAlpha: 0.5,
  //   // opacity: 0, 
  //   x: '+50',
  //   duration: 1,
  //   stagger: 0.2,
  //   ease: "back.out(2)" 
  // });

  setTimeout(() => {
    changeIcons.value = true;
  },1500);
});
</script>

<template>
  <h2 class="title">{{ app_content.title }}</h2>
  <section ref="itemsContainer">
      <ProjectItem 
        v-for="({ id, name, description, url_icon, links, showType }, index) in content" 
        @mouseenter="selectItem($event, index, id)" @mouseleave="deSelectItemLeave($event, index, id)"
        :class="{'blur-effectCard': showType === 'hide', 'selected-effectCard': showType === 'show'}" 
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
  </section>
</template>

<style scoped>

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