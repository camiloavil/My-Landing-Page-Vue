<script setup>
import { toRefs } from 'vue';

const props = defineProps(['id']);
const { id } = toRefs(props);

const selected = () => {
  console.log(`Clicked ${id.value}`);
};
</script>
<template>
  <div class="item">
    <i @click="selected">
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3 @click="selected">
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

<style scoped >
.selected-effectCard::after,
.selected-effectCard::before {
  display: none;
}
.selected-effectCard h3{
  font-weight: 700;
  color: var(--color-links);
}
.selected-effectCard .details{
  margin-left: 0.3rem;
}

.item {
  transition: var(--vt-c-transition-slow) ease;
  margin-top: 1.5rem;
  display: flex;
  position: relative;
  border-radius: 15px;
}

.details {
  /* transition: var(--vt-c-transition-slow) ease; */
  /* flex: 1; */
  margin-left: 0.5rem;
}

i {
  transition: var(--vt-c-transition-slow) ease;
  background: var(--color-background);
  border: 1px solid var(--color-border);
  /* margin-left: 0.5rem; */
  /* position: absolute; */
  /* top: calc(50% - 25px);  */
  display: grid;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  /* color: var(--color-text); */
}

h3 {
  transition: var(--vt-c-transition-slow) ease;
  color: var(--color-heading);
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
}

@media (min-width: 1024px) {
  .selected-effectCard h3{
    font-size: 1.2rem;
    font-weight: 700;
  }
  .selected-effectCard .details{
    margin-left: 0;
  }
  .selected-effectCard i{
    top: calc(10%);
  }
  
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem var(--section-gap);
  }
  .details {
    margin-left: 1rem;
  }
  i {
    margin: 0;
    position: absolute;
    top: calc(50% - 25px);
    left: -25px;
    width: 50px;
    height: 50px;
  }

  h3{
    font-size: 1rem;
    font-weight: 500;
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

  .item:last-of-type:after,
  .item:first-of-type:before {
    display: none;
  }
}
</style>
