<script setup>
import NavBar from '@/components/NavBar.vue';
import MyBrand from '@/components/MyBrand.vue'
import MyContent from '@/components/MyContent.vue'
import content from '@/assets/scripts/getContent.js';
import linksjson from '@/assets/json/links.json';
import content_en_json from '@/assets/json/content_en.json';
import content_es_json from '@/assets/json/content_es.json';
import { ref, onMounted, computed } from 'vue'

const dark_theme = ref(window.matchMedia('(prefers-color-scheme: dark)').matches)
const dataGithub = ref([])
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
const data_content = computed(() => {
  if (lang.value === 'en') {
    return content_en_json;
  }else{
    return content_es_json;
  }
});

dataGithub.value = await content.getContent(data_content.value.profile.github_username);
//Simulate a delay on fetch info
await new Promise((resolve) => setTimeout(resolve, 1000));

onMounted(() => {
  // console.log(`MyHome ready`);
});
</script>

<template>
  <header>
    <NavBar :language="lang" :themeDark="dark_theme" @changeLanguage="changeLanguage" @changeTheme="dark_theme=!dark_theme"/>
  </header>
  <main>
    <section class="wrapper">
      <MyBrand :data_content="data_content.profile" :links_content="links_content" :themeDark="dark_theme" @changeTheme="dark_theme=!dark_theme"/>
    </section>
    <section class="content">
      <MyContent :app_content="data_content" :content="dataGithub"/>
    </section>
  </main>
  <footer>
    <span>{{ data_content.footer }}</span>
  </footer>
</template>

<style scoped>
header {
  z-index: 5;
  transition: color calc(var(--vt-c-transition-normal) + 0.1s), background-color calc(var(--vt-c-transition-normal) + 0.1s);
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  width: 100%;
  height: 30px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
main {
  height: 100%;
  display: block;
  margin: 0 auto;
  padding: 30px 15px 13px;
}
.wrapper {
  /* width: 100%; */
  display: flex;
}
.content {
  /* max-width: 1280px; */
  /* margin: 0 auto; */
  padding: 0 1rem;
}

footer {
  transition: color calc(var(--vt-c-transition-normal) + 0.1s), background-color calc(var(--vt-c-transition-normal) + 0.1s);
  background-color: var(--color-background);
  border-top: 1px solid var(--color-border);
  width: 100%;
  height: 13px;
  font-size: 0.7rem;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50% , 0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
}

@media (min-width: 1024px) {
  main {
    display: grid;
    grid-template-columns: 0.8fr 2.2fr;
    padding: 50px 25px 25px;
  }
  header {
    width: 70%;
    height: 50px;
  }
  .wrapper {
    display: block;
    place-items: center;
    padding-right: 1.2rem;
    place-self: center;
  }
  .content {
    padding: 0 5rem;
  }
  footer {
    height: 23px;
  }
}</style>
