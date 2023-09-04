<template>
    <header>
      <NavBar :language="lang" :themeDark="dark_theme" @changeLanguage="changeLanguage" @changeTheme="dark_theme=!dark_theme"/>
    </header>
    <main class="big-wrapper">
      <Transition name="showUp">
        <section class="wrapper" v-if="showGithubprojects">
          <MyBrand :data_content="data_content" :links_content="links_content" :themeDark="dark_theme" @changeTheme="dark_theme=!dark_theme"/>
        </section>
      </Transition>
      <!-- <Transition name="disappear">
        <MyLoader v-if="!showGithubprojects"/>
      </Transition> -->
      <Transition name="showUp">
        <section class="content" v-if="showGithubprojects">
          <MyContent :content="dataGithub"/>
        </section>
      </Transition>
    </main>
    <footer>
      <span>{{ 'Camilo Avila © 2023. All Rights Reserved.' }}</span>
    </footer>
</template>


<script setup>
import NavBar from '@/components/NavBar.vue';
import MyBrand from '@/components/MyBrand.vue'
import MyContent from '@/components/MyContent.vue'
import content from '@/assets/scripts/getContent.js';
import linksjson from '@/assets/json/links.json';
import content_en_json from '@/assets/json/content_en.json';
import content_es_json from '@/assets/json/content_es.json';
// import MyLoader from '@/components/MyLoader.vue';
import { ref, onMounted, computed } from 'vue'

const userGithub = ref('camiloavil')
const dataGithub = ref([])
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
const showGithubprojects = computed( () => {
  return (dataGithub.value && dataGithub.value.length > 0)
});
const data_content = computed(() => {
  if (lang.value === 'en') {
    return content_en_json;
  }else{
    return content_es_json;
  }
});

onMounted(async () => {
  let data = await content.getContent(userGithub.value);
  dataGithub.value.push(...data);
});
</script>

<style scoped>
.showUp-enter-active{
  transition: opacity 0.7s ease;
}
.showUp-enter-from {
  opacity: 0;
}

header {
  z-index: 5;
  transition: color 0.5s, background-color 0.5s;
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
  padding: 2.2rem 0.2rem;
}
.wrapper {
  /* width: 100%; */
  display: flex;
}
.content {
  /* margin-top: 1.5rem; */
  /* max-width: 1280px; */
  margin: 0 auto;
  padding: 0 0.2rem;
}

footer {
  /* transition: color 0.5s, background-color 0.5s; */
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
}

@media (min-width: 1024px) {
  main {
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 2.2rem 1rem;
  }
  header {
    width: 70%;
    height: 50px;
  }
  
  .wrapper {
    place-items: center;
    padding-right: 5rem;
    place-self: center;
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
