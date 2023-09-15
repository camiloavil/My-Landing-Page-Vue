import stateItems_Desktop from '@/assets/scripts/gsap/itemAnimations/desktopStates';
import stateItems_Mobile from '@/assets/scripts/gsap/itemAnimations/mobileStates';
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
/**
 * Generates a timeline for the selected item animation on Desktop responsive.
 *
 * @param {Element} element - The DOM element to animate.
 * @param {number} duration - The duration of the animation.
 * @param {Function} done - A callback function to execute when the animation is complete.
 */
function tl_itemSelectedDesktop(element, duration ,done) {
  const siblings = getSiblings(element);
  const tl = gsap.timeline({
    id: 'Select',
    onComplete: done,
    data: element.querySelector('h3').textContent
  });

  selectItemTransitionsDesktop(tl, element, duration);
  siblingHideTransitionsDesktop(tl, siblings, duration); 
}

/**
 * add to timeline item Selected transitions.
 *
 * @param {Timeline} tl - The timeline object.
 * @param {Element} element - The element to apply transitions to.
 * @param {number} duration - The duration of the transitions.
 */
function selectItemTransitionsDesktop(tl, element, duration) {
  tl.to(element, { ...stateItems_Desktop.bigContainer_div.selected, duration: duration },0);
  tl.to(element.querySelector('section'), { ...stateItems_Desktop.container_section.selected , duration: duration },0);
  tl.to(element.querySelector('svg'), { ...stateItems_Desktop.icon_svg.selected, duration: duration },0);
  tl.to(element.querySelector('h3'), { ...stateItems_Desktop.title_h3.selected, duration: duration },0);
  tl.to(element.querySelector('p'), { ...stateItems_Desktop.description_p.selected, duration: duration },0);
  tl.to(element.querySelector('i'), { ...stateItems_Desktop.container_i.selected , duration: duration },0);
}

/**
 * Hides the siblings of an element using transitions.
 *
 * @param {Timeline} tl - The timeline to add the transitions to.
 * @param {Array} siblings - The siblings to hide.
 * @param {number} duration - The duration of the transitions.
 */
function siblingHideTransitionsDesktop( tl, siblings, duration ) {
  tl.to(siblings, { ...stateItems_Desktop.bigContainer_div.hide, duration: duration }, (duration/2));
  siblings.map((element) => {
    tl.to(element.querySelector('section'), { ...stateItems_Desktop.container_section.normal , duration: duration },0);
    tl.to(element.querySelector('svg'), { ...stateItems_Desktop.icon_svg.normal, duration: duration },0);
    tl.to(element.querySelector('h3'), { ...stateItems_Desktop.title_h3.normal, duration: duration },0);
    tl.to(element.querySelector('p'), { ...stateItems_Desktop.description_p.normal, duration: duration },0);
    tl.to(element.querySelector('i'), { ...stateItems_Desktop.container_i.normal, duration: duration },0);
  })
}


/**
 * Generates a timeline for the selected item animation on Desktop responsive.
 *
 * @param {Element} element - The DOM element to animate.
 * @param {number} duration - The duration of the animation.
 * @param {Function} done - A callback function to execute when the animation is complete.
 */
function tl_itemSelectedMobile(element, duration ,done) {
  const siblings = getSiblings(element);
  const tl = gsap.timeline({
    id: 'Select',
    onComplete: done,
    data: element.querySelector('h3').textContent
  });
  console.log(element.querySelector('.sectionLinks'))

  selectItemTransitionsMobile(tl, element, duration);
  siblingHideTransitionsMobile(tl, siblings, duration); 
}

/**
 * add to timeline item Selected transitions.
 *
 * @param {Timeline} tl - The timeline object.
 * @param {Element} element - The element to apply transitions to.
 * @param {number} duration - The duration of the transitions.
 */
function selectItemTransitionsMobile(tl, element, duration) {
  tl.to(element, { ...stateItems_Mobile.bigContainer_div.selected, duration: duration },0);
  tl.to(element.querySelector('svg'), { ...stateItems_Mobile.icon_svg.selected, duration: duration },0);
  tl.to(element.querySelector('h3'), { ...stateItems_Mobile.title_h3.selected, duration: duration },0);
  tl.to(element.querySelector('i'), { ...stateItems_Mobile.container_i.selected, duration: duration },0);
  tl.to(element.querySelector('section'), { ...stateItems_Mobile.container_section.selected , duration: duration },0);
  //DOM elements to appear and hide
  tl.to(element.querySelector('p'), { ...stateItems_Mobile.description_p.selected, duration: duration/2 }, duration/2 );
  tl.to(element.querySelector('.sectionLinks'), { ...stateItems_Mobile.sectionLinks.selected, duration: duration/2 }, duration/2 );
}

/**
 * Hides the siblings of an element using transitions.
 *
 * @param {Timeline} tl - The timeline to add the transitions to.
 * @param {Array} siblings - The siblings to hide.
 * @param {number} duration - The duration of the transitions.
 */
function siblingHideTransitionsMobile( tl, siblings, duration ) {
  tl.to(siblings, { ...stateItems_Mobile.bigContainer_div.hide, duration: duration/2 }, (duration/2));
  siblings.map((element) => {
    tl.to(element.querySelector('section'), { ...stateItems_Mobile.container_section.normal , duration: duration },0);
    tl.to(element.querySelector('svg'), { ...stateItems_Mobile.icon_svg.normal, duration: duration },0);
    tl.to(element.querySelector('h3'), { ...stateItems_Mobile.title_h3.normal, duration: duration },0);
    tl.to(element.querySelector('i'), { ...stateItems_Mobile.container_i.normal, duration: duration },0);
    tl.to(element.querySelector('p'), { ...stateItems_Mobile.description_p.normal, duration: duration/2 },0);
    tl.to(element.querySelector('.sectionLinks'), { ...stateItems_Mobile.sectionLinks.normal, duration: duration/2 }, 0 );
  })
}

/**
 * Generates a timeline for the DEselected item animation on Desktop responsive.
 *
 * @param {Element} element - The DOM element to animate.
 * @param {number} duration - The duration of the animation.
 * @param {Function} done - A callback function to execute when the animation is complete.
 */
function tl_itemDESelectedDesktop(element, duration ,done) {
  const siblings = getSiblings(element);
  const tl = gsap.timeline({
    id: 'deSelect',
    onComplete: done,
    data: element.querySelector('h3').textContent
  });

  deSelectItemTransitionsDesktop(tl, element, duration);
  siblingsDeselectTransitionsDesktop(tl, siblings, duration); 
}


function deSelectItemTransitionsDesktop(tl, element, duration) {
  tl.to(element.querySelector('p'), { ...stateItems_Desktop.description_p.normal, duration: duration/2 },0);
  tl.to(element.querySelector('section'), { ...stateItems_Desktop.container_section.normal , duration: duration },0);
  tl.to(element.querySelector('svg'), { ...stateItems_Desktop.icon_svg.normal, duration: duration },0);
  tl.to(element.querySelector('h3'), { ...stateItems_Desktop.title_h3.normal, duration: duration }, duration/2 );
  tl.to(element.querySelector('i'), { ...stateItems_Desktop.container_i.normal, duration: duration }, duration/2);
  tl.to(element, { ...stateItems_Desktop.bigContainer_div.normal, duration: duration }, duration/2);
}


function siblingsDeselectTransitionsDesktop(tl, siblings, duration) {
  tl.to(siblings, { ...stateItems_Desktop.bigContainer_div.normal, blur: 0, duration: duration }, 0 );
  siblings.map((element) => {
    tl.to(element.querySelector('section'), { ...stateItems_Desktop.container_section.normal , duration: duration },0);
    tl.to(element.querySelector('svg'), { ...stateItems_Desktop.icon_svg.normal, duration: duration },0);
    tl.to(element.querySelector('h3'), { ...stateItems_Desktop.title_h3.normal, duration: duration },0);
    tl.to(element.querySelector('p'), { ...stateItems_Desktop.description_p.normal, duration: duration },0);
    tl.to(element.querySelector('i'), { ...stateItems_Desktop.container_i.normal, duration: duration },0);
  })
}

/**
 * Generates a timeline for the DEselected item animation on Desktop responsive.
 *
 * @param {Element} element - The DOM element to animate.
 * @param {number} duration - The duration of the animation.
 * @param {Function} done - A callback function to execute when the animation is complete.
 */
function tl_itemDESelectedMobile(element, duration ,done) {
  const siblings = getSiblings(element);
  const tl = gsap.timeline({
    id: 'deSelect',
    onComplete: done,
    data: element.querySelector('h3').textContent
  });

  deSelectItemTransitionsMobile(tl, element, duration);
  siblingsDeselectTransitionsMobile(tl, siblings, duration); 
}


function deSelectItemTransitionsMobile(tl, element, duration) {
  tl.to(element, { ...stateItems_Mobile.bigContainer_div.normal, duration: duration },0);
  tl.to(element.querySelector('section'), { ...stateItems_Mobile.container_section.normal , duration: duration },0);
  tl.to(element.querySelector('svg'), { ...stateItems_Mobile.icon_svg.normal, duration: duration },0);
  tl.to(element.querySelector('h3'), { ...stateItems_Mobile.title_h3.normal, duration: duration },0);
  tl.to(element.querySelector('p'), { ...stateItems_Mobile.description_p.normal, duration: duration },0);
  tl.to(element.querySelector('i'), { ...stateItems_Mobile.container_i.normal, duration: duration },0);
  tl.to(element.querySelector('.sectionLinks'), { ...stateItems_Mobile.sectionLinks.normal, duration: duration }, 0 );
}


function siblingsDeselectTransitionsMobile(tl, siblings, duration) {
  tl.to(siblings, { ...stateItems_Mobile.bigContainer_div.normal, duration: duration }, 0 );
  siblings.map((element) => {
    tl.to(element.querySelector('section'), { ...stateItems_Mobile.container_section.normal , duration: duration },0);
    tl.to(element.querySelector('svg'), { ...stateItems_Mobile.icon_svg.normal, duration: duration },0);
    tl.to(element.querySelector('h3'), { ...stateItems_Mobile.title_h3.normal, duration: duration },0);
    tl.to(element.querySelector('p'), { ...stateItems_Mobile.description_p.normal, duration: duration },0);
    tl.to(element.querySelector('i'), { ...stateItems_Mobile.container_i.normal, duration: duration },0);
  })
}

export default {
  t_slow,
  t_medium,
  t_fast,
  tl_itemSelectedDesktop,
  tl_itemDESelectedDesktop,
  tl_itemSelectedMobile,
  tl_itemDESelectedMobile
}