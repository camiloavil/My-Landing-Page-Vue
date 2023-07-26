<script setup>
import MyBrand from './components/MyBrand.vue'
import MyContent from './components/MyContent.vue'
import linksjson from './assets/json/links.json';
import contentjson from './assets/json/content.json';
import { ref, onMounted } from 'vue'

const data_content = ref(contentjson)
const links_content = ref(linksjson)

// functions
function log() {
  // let temp = data_content.value.contacts.length
  // console.log(`len of ${(temp>0 ? true : false)} links`)
  // console.log(post.value)
}

onMounted(() => {
  console.log(`Mounted`)
});
// const post = await fetch(`./assets/links.json`).then((r) => r.json())
</script>

<template>
  <!-- <nav>
    <ul>
      <li>es</li>
      <li>en</li>
    </ul>
  </nav> -->
  <header>
    <section class="wrapper">
      <img @click="log" class="profilepicture" src="./assets/pics/profile_orange.png" alt="Profile Pic">
      <MyBrand class="brand" v-bind:data_content="links_content" />
    </section>
  </header>
  
  <main v-show="data_content.projects.length > 0">
    <MyContent :content="data_content.projects"/>
    <!-- <component :is="TheWelcome" /> -->
    <div>
      <!-- <component :is="containerName" msg="Hello Kmi"></component> -->
      <!-- <p>Esto es una chimba Cami. ahora si a hacer aplicaciones geniales</p> -->
      <!-- <button @click="countII++">Count is: {{ countII }}</button> -->
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.2;
}
.profilepicture{
  border-radius: 48%;
  height: 6rem;
}

.brand{
  margin-top: 32px;
}
.wrapper{
  display: flex;
  margin-bottom: 1.5rem;
}

@media (min-width: 1024px) {
  .profilepicture{
    height: 15rem;
  }
  header {
    display: flex;
    line-height: 1.5;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  .wrapper{
    display: block;
  }
}
</style>
