<script setup>
import NavBar from './components/NavBar.vue';
import MyBrand from './components/MyBrand.vue'
import MyContent from './components/MyContent.vue'
import linksjson from './assets/json/links.json';
import contentjson from './assets/json/content.json';
import { ref, onMounted , watch } from 'vue'

const useDark = window.matchMedia("(prefers-color-scheme: dark)");
const data_content = ref(contentjson)
const links_content = ref(linksjson)
const lang = ref('en')
const dark_theme = ref(true)

function changeLanguage() {
  if (lang.value === 'en') {
    lang.value = 'es'
  } else {
    lang.value = 'en'
  }
  console.log(`Route lang changed to ${lang.value}`)
}

watch(dark_theme, async (newTheme) => {
  console.log(`Mounted dark_theme is ${useDark.value}`)
  console.log(`dark_theme changed to ${newTheme}`)
})

onMounted(() => {
  console.log(`Mounted dark_theme is ${useDark.value}`)
});
// const post = await fetch(`./assets/links.json`).then((r) => r.json())
function setLightTheme() {
    currentTheme.value = 'light';

    document.documentElement.style.setProperty('--primary', 'var(--purple)');
    document.documentElement.style.setProperty('--background', 'var(--bg--light)');
    document.documentElement.style.setProperty('--text', 'var(--text--light');
    document.documentElement.style.setProperty('--link-text', 'var(--link-text--light');
    document.documentElement.style.setProperty(
        '--active-link-text',
        'var(--active-link-text--light'
    );
    document.documentElement.style.setProperty('--shadow', 'var(--shadow--light');
    document.documentElement.style.setProperty('--quote-bg', 'var(--quote-bg--light');

    process.isClient && localStorage.setItem('theme', 'light');
}

</script>

<template>
  <header>
    <NavBar :language="lang" :themeDark="dark_theme" @changeLanguage="changeLanguage" @changeTheme="dark_theme=!dark_theme"/>
  </header>
  <main class="big-wrapper">
    <section class="wrapper">
      <MyBrand :data_content="links_content" :themeDark="dark_theme" @changeTheme="dark_theme=!dark_theme"/>
    </section>
    <section v-show="data_content.projects.length > 0">
      <MyContent :content="data_content.projects" />
    </section>
  </main>
</template>

<style scoped>
header {
  width: 100%;
  height: 30px;
  border-bottom: 1px solid var(--color-border);
  /* padding: 2px; */
  /* line-height: 1.2; */
}

.navbar {
  /* background-color: azure; */
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem auto;
  width: 70%;
  text-align: center;
  list-style: none;
  /* border-bottom: 1px solid currentColor; */
}


.big-wrapper {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 0.4rem;
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
