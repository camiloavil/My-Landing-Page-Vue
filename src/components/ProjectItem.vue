<script setup>
import { registerBlurEffect } from '@/assets/scripts/gsap/registerEffects';
import ItemStateAnimation  from '@/assets/scripts/gsap/statesAnimations';
import { ref ,toRefs } from 'vue';
import { gsap } from 'gsap';

const displayLineIcons = ref('block');
const props = defineProps(['id', 'ready','linkShow']);
const { id, ready, linkShow } = toRefs(props);

registerBlurEffect();
// console.log(document.querySelector(".itemsContainer").children);
const selected = () => {
  console.log(`Clicked ${id.value}`);
};


const selectItem = (ev) => {
  // Prevent animetion before end of appearance
  if (!ready.value) return;

  // change de css property of line of icons
  displayLineIcons.value = 'none';

  // Get DOM Elements to change and Animate
  const itemSelected = ev.target;
  const siblings = getSiblings(itemSelected);
  
  const idTimelines = ['Select', 'deSelect'];
  idTimelines.map((idTimeline) => {
    let id_tl = gsap.getById(idTimeline);
    if( id_tl ){
      id_tl.kill();
      console.log(`****Kill timeline ${idTimeline}`);
    }
  })

  const tl_master_select = gsap.timeline({id: 'Select', data: itemSelected.querySelector('h3').textContent});
  //Add Item future States on master timeline GSAP animation
  tl_master_select.add( ItemStateAnimation.tl_itemSelected(itemSelected, 0.25 ,() => {console.log(`****End Selected Item ${itemSelected.querySelector('h3').textContent}`)}), 0 );
  tl_master_select.add( ItemStateAnimation.tl_itemSiblingHide(siblings, 0.25 ,() => {console.log(`****End Selected Siblings of Item ${itemSelected.querySelector('h3').textContent}`)}), 0 );

};
const deSelectItemLeave = (ev) => {
  // Prevent animetion before end of appearance
  if (!ready.value) return;

  // change de css property of line of icons
  displayLineIcons.value = 'block';

  // Get DOM Elements to change and Animate
  const itemSelected = ev.target;
  const siblings = getSiblings(itemSelected);

  const tl_master_deselect = gsap.timeline({id: 'deSelect', data: itemSelected.querySelector('h3').textContent});
  tl_master_deselect.add( ItemStateAnimation.tl_itemDeselected(itemSelected, 0.3, () => {console.log(`****End DeSelected Item ${itemSelected.querySelector('h3').textContent}`)}), 0 );
  tl_master_deselect.add( ItemStateAnimation.tl_itemSiblingDeselected(siblings, 0.3, () => {console.log(`****End DeSelected Siblings of Item ${itemSelected.querySelector('h3').textContent}`)}), 0 );
  
}
/**
 * Returns an array of all the siblings of the given element but no the given element.
 *
 * @param {HTMLElement} element - The element whose siblings are to be retrieved.
 * @return {Array<HTMLElement>} An array of all the siblings of the given element.
 */
 const getSiblings = (element) => {
  const siblings = [];
  let sibling = element.parentElement.firstElementChild;
  while (sibling) {
    if (sibling !== element) {
      siblings.push(sibling);
    }
    sibling = sibling.nextElementSibling;
  }
  return siblings;
}
</script>
<template>
    <div class="item-effectCard"
      @mouseenter="selectItem($event)"
      @mouseleave="deSelectItemLeave($event)"
    >
      <i @click="selected">
        <slot name="icon"></slot>
      </i>
      <section class="details">
        <h3 @click="selected">
          <slot name="heading"></slot>
        </h3>
        <p>
          <slot name="description"></slot>
        </p>
        <section class="sectionLinks" v-if="linkShow">
          <slot name="links"></slot>
        </section>
      </section>
    </div>
</template>

<style scoped >

.sectionLinks {
  display: flex;
  align-items: center;
  padding-top: 5px;
}

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
  /* transition: var(--vt-c-transition-normal) ease; */
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
  /* transition: var(--vt-c-transition-fast) ease; */
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
  /* transition: var(--vt-c-transition-fast) ease; */
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
    display: v-bind(displayLineIcons);
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item-effectCard:after {
    display: v-bind(displayLineIcons);
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
