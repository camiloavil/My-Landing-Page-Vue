<script setup>
import NavBar from '@/components/NavBar.vue';
import MyBrand from '@/components/MyBrand.vue'
import MyContent from '@/components/MyContent.vue'
import content from '@/assets/scripts/getContent.js';
import linksjson from '@/assets/json/links.json';
import content_en_json from '@/assets/json/content_en.json';
import content_es_json from '@/assets/json/content_es.json';
import { ref, onMounted, computed } from 'vue'

const userGithub = ref('camiloavil')
const dataGithub = ref(null)
const dark_theme = ref(window.matchMedia('(prefers-color-scheme: dark)').matches)
const lang = ref('en')
const links_content = ref(linksjson)

function changeLanguage() {
  if (lang.value === 'en') {
    lang.value = 'es'
    document.documentElement.lang ='es'
  } else {
    lang.value = 'en'
    document.documentElement.lang ='en'
  }
}
const showGithubprojects = computed(async () => {
  return (dataGithub.value && dataGithub.value.length > 0)
})
const data_content = computed(() => {
  if (lang.value === 'en') {
    return content_en_json;
  }else{
    return content_es_json;
  }
})

onMounted(async () => {
  dataGithub.value = await content.getContent(userGithub.value);
  console.log(dataGithub.value);
  // console.log(data_content.value.projects);
});
</script>

<template>
  <header>
    <NavBar :language="lang" :themeDark="dark_theme" @changeLanguage="changeLanguage" @changeTheme="dark_theme=!dark_theme"/>
  </header>
  <main class="big-wrapper">
    <section class="wrapper">
      <MyBrand :data_content="data_content" :links_content="links_content" :themeDark="dark_theme" @changeTheme="dark_theme=!dark_theme"/>
    </section>
    <section v-if="showGithubprojects">
      <MyContent name="GitHub" :content="dataGithub" :content_old="data_content.projects" />
    </section>
  </main>
  <footer>

  </footer>
</template>

<style scoped>

header {
  width: 100%;
  height: 30px;
  border-bottom: 1px solid var(--color-border);
  /* padding: 2px; */
  /* line-height: 1.2; */
}
/* 
.navbar {
  background-color: azure;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem auto;
  width: 70%;
  text-align: center;
  list-style: none;
  border-bottom: 1px solid currentColor;
} */
.big-wrapper {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 0.2rem;
}

.wrapper {
  width: 100%;
  display: flex;
  margin-bottom: 1.5rem;
  justify-content: center;
}

@media (min-width: 1024px) {
  .big-wrapper {
    display: grid;
    grid-template-columns: 0.7fr 1.3fr;
  }

  .brand {
    margin-top: 32px;
  }

  .profilepicture {
    margin: 0 0 0 0;
    max-height: 15rem;
  }

  /* header {
    display: flex;
    line-height: 1.5;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } */

  .wrapper {
    display: block;
  }
}</style>
