<script setup>
// import { toRefs, onMounted } from 'vue';

// const props = defineProps(['key', 'description']);
// const { key, description } = toRefs(props);

// onMounted(() => {
  // console.log(`Project ${key.value} is mounted`);
  // console.log(`Project ${description.value} is mounted`);
// })
</script>
<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <p>
        <slot name="description"></slot>
      </p>
      <div>
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>
<style scoped>
.item {
  margin-top: 1.5rem;
  display: flex;
  position: relative;
  border-radius: 25px;
  /* border-top-right-radius: 25px;
  border-bottom-right-radius: 25px; */
}
/* .item:hover{
  border: 2px solid var(--color-border);
} */

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  background: var(--color-background);
  margin-left: 0.5rem;
  display: grid;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  color: var(--color-text);
}

h3 {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}
h3:hover{
  color: var(--color-links); 
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem var(--section-gap);
  }

  i {
    margin: 0;
    /* top: calc(50% - 25px); */
    position: absolute;
    left: -26px;
    width: 50px;
    height: 50px;
  }

  h3{
    font-size: 1.2rem;
    font-weight: 700;
    cursor: pointer;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
