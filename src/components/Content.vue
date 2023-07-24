<script setup>
import ProjectItem from './ProjectItem.vue'
import Icon from './icons/Icon.vue'
// import EcosystemIcon from './icons/IconEcosystem.vue'

defineProps({
  content: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <ProjectItem v-for="project in content">
    <template #icon>
      <Icon class="icons" :myicon="project.icon"/>
    </template>
    <template #heading>{{project.name}}{{ project.open_source ? ' [OPEN SOURCE]' : '' }}</template>
    {{ project.description }}
    <div v-show="project.links.length > 0">
      <a v-for="p_link in project.links" :href="p_link.url" target="_blank" rel="noopener">{{p_link.name}} </a>
    </div>
  </ProjectItem>

  <ProjectItem>
    <template #icon>
    </template>
    <template #heading>Testing</template>

    This parragraf is a testing.:
    <a href="https://camiloavil.com" target="_blank" rel="noopener">Camilo</a>,
    <!-- <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
    you need more resources, we suggest paying
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    a visit. -->
  </ProjectItem>

</template>

<style scoped>
.icons {
  width: 25px;
  height: 25px;
}
.icons:hover {
  cursor: pointer;
  fill: var(--color-links);
}
</style>