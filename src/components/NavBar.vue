<script setup>
import theme from '@/assets/scripts/theme.js'
import { toRefs, watch } from 'vue';

// const dark_theme = ref(window.matchMedia('(prefers-color-scheme: dark)').matches)

const props = defineProps({
  language: {
    type: String,
    required: true
  },
  themeDark: {
    type: Boolean,
    required: true
  }
});
const { language, themeDark } = toRefs(props);

watch(themeDark, async (newTheme) => {
  if (!newTheme) {
    theme.setLightTheme()
  }else{
    theme.setDarkTheme()
  }
})
</script>

<template>
  <nav>
    <div>
      <span @click="$emit('changeLanguage')">{{language}}</span>
    </div>
    <div>
      <svg v-show="themeDark" @click="$emit('changeTheme')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path d="M16 12.005a4 4 0 1 1-4 4 4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6 6 6 0 0 0-6-6zM5.394 6.813l1.414-1.415 3.506 3.506L8.9 10.318zM2 15.005h5v2H2zm3.394 10.192L8.9 21.691l1.414 1.415-3.506 3.505zM15 25.005h2v5h-2zm6.687-1.899 1.414-1.415 3.506 3.506-1.414 1.414zM25 15.005h5v2h-5zm-3.313-6.101 3.506-3.506 1.414 1.415-3.506 3.505zM15 2.005h2v5h-2z" fill="currentColor"/>
      </svg>
      <svg v-show="!themeDark" @click="$emit('changeTheme')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194 11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016 13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555 1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38 1.015 1.015 0 0 0 14.98 3z" fill="currentColor"/>
      </svg>
    </div>
  </nav>
</template>

<style scoped>
nav{
  height: 100%;
  display: flex;
  align-items: center ;
  justify-content: space-between;
  padding: 0;
}
nav div{
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 45px;
}
nav span{
  font-size: 1.2rem;
}
nav svg{
  height: 100%;
  width: 100%;
  padding: 3px 0;
}

@media (min-width: 1024px) {
  nav span{
    font-size: 1.3rem;
    cursor: pointer;
  }
  nav svg{    
    padding: 10px 0;
    cursor: pointer;
  }
  nav span:hover{
    color: var(--color-links);
  }
  nav svg:hover{
    color: var(--color-links);
  }
}

</style>

