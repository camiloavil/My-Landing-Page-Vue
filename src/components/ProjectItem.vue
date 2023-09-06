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
  /* font-size: 1.3rem; */
  font-weight: 700;
  color: var(--color-links);
}
.selected-effectCard .details{
  margin-left: 0.3rem;
}

.item {
  margin-top: 1.5rem;
  display: flex;
  position: relative;
  border-radius: 15px;
  transition: var(--vt-c-transition-normal) ease;
}

.details {
  flex: 1;
  margin-left: 0.5rem;
  transition: var(--vt-c-transition-normal) ease;
}
i {
  background: var(--color-background);
  margin-left: 0.5rem;
  /* top: calc(50% - 25px);  */
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
  transition: var(--vt-c-transition-normal) ease;
}
/* h3:hover{
  font-weight: 700;
} */

@media (min-width: 1024px) {
  .selected-effectCard h3{
    font-weight: 900;
  }
  .selected-effectCard .details{
    margin-left: 0;
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
    top: calc(50% - 25px);
    position: absolute;
    left: -25px;
    width: 50px;
    height: 50px;
  }

  h3{
    font-size: 1.2rem;
    font-weight: 700;
    cursor: pointer;
  }
  /* h3:hover{
    font-weight: 900;
  } */
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
