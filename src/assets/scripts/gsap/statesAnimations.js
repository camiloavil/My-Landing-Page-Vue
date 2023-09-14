import stateItems_Desktop from '../../../assets/scripts/gsap/itemAnimations/desktopStates';
import gsap from 'gsap';

const t_slow = 0.5;
const t_medium = 0.2;
const t_fast = 0.1;

function doMatchMedia( doDesktop ,doMobile ) {
  let mm = gsap.matchMedia();
  mm.add({
    isDesktop: "(min-width: 1024px)",
    isMobile:  "(max-width: 1023px)",
  },
  (context) => {
    console.log(`run again? `)
    let { isDesktop } = context.conditions;
    (isDesktop)? doDesktop(): doMobile();
  }
  )
  return mm
}

/**
 * Generates a timeline for the selected item animation.
 *
 * @param {Element} element - The DOM element to animate.
 * @param {number} duration - The duration of the animation.
 * @param {Function} done - A callback function to execute when the animation is complete.
 * @return {Timeline} The generated timeline object.
 */
function tl_itemSelected(element, duration ,done) {
  let tl = gsap.timeline({id: 'itemSelected',onComplete: done});
    tl.to(element, { ...stateItems_Desktop.bigContainer_div.selected, duration: duration },0);
    tl.to(element.querySelector('section'), { ...stateItems_Desktop.container_section.selected , duration: duration },0);
    tl.to(element.querySelector('svg'), { ...stateItems_Desktop.icon_svg.selected, duration: duration },0);
    tl.to(element.querySelector('h3'), { ...stateItems_Desktop.title_h3.selected, duration: duration },0);
    tl.to(element.querySelector('p'), { ...stateItems_Desktop.description_p.selected, duration: duration },0);
    tl.to(element.querySelector('i'), { ...stateItems_Desktop.container_i.selected , duration: duration },0);
    return tl;
}

function tl_itemSelected_Mobile(element, duration ,done) {
  console.log('mobile')
  let tl = gsap.timeline({id: 'itemSelected',onComplete: done});
  tl.to(element, { ...stateItems_Desktop.bigContainer_div.selected, duration: duration },0);
  tl.to(element.querySelector('section'), { ...stateItems_Desktop.container_section.selected , duration: duration },0);
  tl.to(element.querySelector('svg'), { ...stateItems_Desktop.icon_svg.selected, duration: duration },0);
  tl.to(element.querySelector('h3'), { ...stateItems_Desktop.title_h3.selected, duration: duration },0);
  tl.to(element.querySelector('p'), { ...stateItems_Desktop.description_p.selected, duration: duration },0);
  tl.to(element.querySelector('i'), { ...stateItems_Desktop.container_i.selected , duration: duration },0);
  return tl;  
}
function tl_itemSelected_Desktop(element, duration ,done) {
}


/**
 * Generates a timeline animation for selecting sibling elements to hide them.
 *
 * @param {Array} siblings - An array of sibling elements.
 * @param {number} duration - The duration of the animation.
 * @param {Function} done - A callback function to be called when the animation is complete.
 * @return {Timeline} - The generated timeline animation.
 */
function tl_itemSiblingHide(siblings, duration ,done) {
  let tl = gsap.timeline({onComplete: done});
  tl.to(siblings, { ...stateItems_Desktop.bigContainer_div.hide, duration: duration }, (duration/2));
  siblings.map((element) => {
    tl.to(element.querySelector('section'), { ...stateItems_Desktop.container_section.normal , duration: duration },0);
    tl.to(element.querySelector('svg'), { ...stateItems_Desktop.icon_svg.normal, duration: duration },0);
    tl.to(element.querySelector('h3'), { ...stateItems_Desktop.title_h3.normal, duration: duration },0);
    tl.to(element.querySelector('p'), { ...stateItems_Desktop.description_p.normal, duration: duration },0);
    tl.to(element.querySelector('i'), { ...stateItems_Desktop.container_i.normal, duration: duration },0);
  })
  return tl;
}

/**
 * Generates a timeline for when an item is deselected.
 *
 * @param {Element} element - The element to be deselected.
 * @param {number} duration - The duration of the animation.
 * @param {function} done - Callback function to be executed when the animation is complete.
 * @return {Timeline} The timeline object that controls the animation.
 */
function tl_itemDeselected(element, duration, done) {
  let tl = gsap.timeline({onComplete: done});
  tl.to(element, { ...stateItems_Desktop.bigContainer_div.normal, blur: 0, duration: duration },0);
  tl.to(element.querySelector('section'), { ...stateItems_Desktop.container_section.normal , duration: duration },0);
  tl.to(element.querySelector('svg'), { ...stateItems_Desktop.icon_svg.normal, duration: duration },0);
  tl.to(element.querySelector('h3'), { ...stateItems_Desktop.title_h3.normal, duration: duration },0);
  tl.to(element.querySelector('p'), { ...stateItems_Desktop.description_p.normal, duration: duration },0);
  tl.to(element.querySelector('i'), { ...stateItems_Desktop.container_i.normal, duration: duration },0);
  return tl;
}

/**
 * Generates a GSAP timeline to animate the deselection of a sibling element.
 *
 * @param {HTMLElement} element - The element to animate.
 * @param {number} duration - The duration of the animation.
 * @param {function} done - A callback function to be executed when the animation is complete.
 * @return {Timeline} The GSAP timeline object.
 */
function tl_itemSiblingDeselected(siblings, duration, done) {
  let tl = gsap.timeline({onComplete: done}); 
  tl.to(siblings, { ...stateItems_Desktop.bigContainer_div.normal, blur: 0, duration: duration }, 0 );
  siblings.map((element) => {
    tl.to(element.querySelector('section'), { ...stateItems_Desktop.container_section.normal , duration: duration },0);
    tl.to(element.querySelector('svg'), { ...stateItems_Desktop.icon_svg.normal, duration: duration },0);
    tl.to(element.querySelector('h3'), { ...stateItems_Desktop.title_h3.normal, duration: duration },0);
    tl.to(element.querySelector('p'), { ...stateItems_Desktop.description_p.normal, duration: duration },0);
    tl.to(element.querySelector('i'), { ...stateItems_Desktop.container_i.normal, duration: duration },0);
  })
  return tl;
}

export default {
  t_slow,
  t_medium,
  t_fast,
  tl_itemSelected,
  tl_itemSiblingHide,
  tl_itemDeselected,
  tl_itemSiblingDeselected,
}