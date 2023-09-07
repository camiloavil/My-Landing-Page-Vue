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
.selected-effectCard h3{
  font-weight: 700;
  color: var(--color-links);
}
.selected-effectCard i{
  /* margin-left: 0.5rem; */
  position: absolute;
  top: calc(50%);
  left: calc(0% - 16px); 
}
.selected-effectCard .details{
  margin-left: 0.3rem;
}
.selected-effectCard .details p{
  display: block;
  padding-left: 16px;
}
.selected-effectCard .details div {
  /* transition: var(--vt-c-transition-fast) ease; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.item {
  transition: var(--vt-c-transition-normal) ease;
  margin: 1rem 0.2rem;
  padding: 0.3rem 0.2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  border-radius: 15px;
}
.details p,
.details div {
  display: none;
}
.details {
  /* esto aumenta retardo en el dark and light mode */
  /* transition: var(--vt-c-transition-slow) ease; */
  /* flex: 1; */
  margin-left: 1.5rem;
}

i {
  transition: var(--vt-c-transition-fast) ease;
  background: var(--color-background);
  border: 1px solid var(--color-border);
  display: grid;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
}

h3 {
  display: inline;
  transition: var(--vt-c-transition-fast) ease;
  color: var(--color-heading);
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
}

@media (min-width: 1024px) {
  .selected-effectCard::after,
  .selected-effectCard::before {
    display: none;
  }
  .selected-effectCard h3{
    font-size: 1.2rem;
    font-weight: 700;
  }
  .selected-effectCard h3:hover{
    font-size: 1.3rem;
    font-weight: 800;
  }
  .selected-effectCard i:hover{
    transform: scale(1.2);
  }

  .selected-effectCard .details{
    margin-left: 0;
  }
  .selected-effectCard .details div {
    display: block;
  }
  .selected-effectCard .details p{
    display: block;
    padding-left: 0px;
  }
  .selected-effectCard i{
    top: calc(10%);
  }
  .item {
    margin: 0;
    padding: 0.4rem 0 0.4rem var(--section-gap);
    justify-content: flex-start;
  }
  .details {
    margin-left: 1rem;
  }  

  .details p,
  .details div {
    display: block;
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
    font-weight: 600;
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
