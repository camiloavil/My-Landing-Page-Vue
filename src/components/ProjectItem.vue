<script setup>
import { toRefs } from 'vue';
import { gsap } from 'gsap';

const props = defineProps(['id', 'index']);
const { id, index } = toRefs(props);

const selected = () => {
  console.log(`Clicked ${id.value} - ${index.value}`);
};
const beforeAppear = (el) => {
  el.style.opacity = 0;
  // el.style.transform = 'scale(0.2)';
  el.style.transform = 'translateX(150px)';
  // el.style.transform = 'scale(0.2) translateX(150px)';
}
const appear = (el,done) => {
  gsap.to(el, {
    opacity: 1,
    x: 0,
    // scale: 1,
    duration: 0.4,
    ease: "elastic.out(1, 0.5)",
    onComplete: done,
    delay: index.value * 0.2
  })
}
</script>
<template>
  <Transition 
    appear
  >
    <div class="item-effectCard">
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
  </Transition>
</template>

<style scoped >


.blur-effectCard {
  /* z-index: -1; */
  filter: blur(1px);
  transform: scale(0.9);
}
.selected-effectCard {
  background-color: var(--color-background-soft);
  border: 3px solid var(--color-border);
  margin-left: 15px;
  filter: blur(0);
  transform: scale(1.12);
}

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

.item-effectCard {
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
  .blur-effectCard {
    filter: blur(1px);
    transform: scale(0.9);
  }
  .selected-effectCard {
    margin: 0;
    /* padding-left: 5px; */
    filter: blur(0);
    transform: scale(1.1);
    border: 3px solid var(--color-border);
  }
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
  .item-effectCard {
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

  .item-effectCard:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item-effectCard:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item-effectCard:last-of-type:after,
  .item-effectCard:first-of-type:before {
    display: none;
  }
}
</style>
