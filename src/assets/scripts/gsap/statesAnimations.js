import gsap from 'gsap';

const t_slow = 0.5;
const t_medium = 0.2;
const t_fast = 0.1;


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
  tl.to(element, { ...animateItems.bigContainer_div.selected, blur: 0, duration: duration },0);
  tl.to(element.querySelector('section'), { ...animateItems.container_section.selected , duration: duration },0);
  tl.to(element.querySelector('svg'), { ...animateItems.icon_svg.selected, duration: duration },0);
  tl.to(element.querySelector('h3'), { ...animateItems.title_h3.selected, duration: duration },0);
  tl.to(element.querySelector('p'), { ...animateItems.description_p.selected, duration: duration },0);
  tl.to(element.querySelector('i'), { ...animateItems.container_i.selected , duration: duration },0);
	return tl;
}

/**
 * Generates the function comment for the given function body in a markdown code block with the correct language syntax.
 *
 * @param {any} element - the element to animate
 * @param {number} duration - the duration of the animation
 * @param {function} done - a callback function to be called when the animation is completed
 * @return {object} - the timeline object representing the animation
 */
function tl_itemSiblingSelected(siblings, duration ,done) {
  let tl = gsap.timeline({onComplete: done});
  tl.to(siblings, { ...animateItems.bigContainer_div.hide, duration: duration }, (duration/2));
  siblings.map((element) => {
    // tl.to(element, { ...animateItems.bigContainer_div.normal, duration: duration },0);
    tl.to(element.querySelector('section'), { ...animateItems.container_section.normal , duration: duration },0);
    tl.to(element.querySelector('svg'), { ...animateItems.icon_svg.normal, duration: duration },0);
    tl.to(element.querySelector('h3'), { ...animateItems.title_h3.normal, duration: duration },0);
    tl.to(element.querySelector('p'), { ...animateItems.description_p.normal, duration: duration },0);
    tl.to(element.querySelector('i'), { ...animateItems.container_i.normal, duration: duration },0);
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
  tl.to(element, { ...animateItems.bigContainer_div.normal, blur: 0, duration: duration },0);
  tl.to(element.querySelector('section'), { ...animateItems.container_section.normal , duration: duration },0);
  tl.to(element.querySelector('svg'), { ...animateItems.icon_svg.normal, duration: duration },0);
  tl.to(element.querySelector('h3'), { ...animateItems.title_h3.normal, duration: duration },0);
  tl.to(element.querySelector('p'), { ...animateItems.description_p.normal, duration: duration },0);
  tl.to(element.querySelector('i'), { ...animateItems.container_i.normal, duration: duration },0);
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
function tl_itemSiblingDeselected(element, duration, done) {
  let tl = gsap.timeline({onComplete: done}); 
  tl.to(element, { ...animateItems.bigContainer_div.normal, blur: 0, duration: duration }, 0 );
  return tl;
}

const animateItems = {
  bigContainer_div:{
    normal:{
      duration: t_medium,
      blur: 0,
      scale: 1,
      border: 'none',
      backgroundColor: 'var(--color-background)',
      zIndex: 1,
      ease: "elastic.out(1, 0.5)",
    },
    selected:{
      duration: t_slow,
      scale: 1.12,
      border: '3px solid var(--color-border)',
      backgroundColor: 'var(--color-background-soft)',
      zIndex: 2,
      ease: "slow(0.3, 0.4, false)"
    },
    hide:{
      duration: t_slow,
      scale: 0.9,
      filter: 'blur(1.5px)',
      ease: "slow(0.3, 0.4, false)"
      // blur: 1.5,
    }
  },
  container_i:{
    normal:{
      duration: t_medium,
      ease: "slow(0.3, 0.4, false)",
      top: 'calc(50% - 25px)',
    },
    selected:{
      duration: t_slow,
      ease: "slow(0.3, 0.4, false)",
      top: 'calc(10%)'
    }
  },
  icon_svg:{
    normal:{
      duration: t_medium,
      fill: 'var(--color-text)',
      ease: "slow(0.3, 0.4, false)",
    },
    selected:{
      duration: t_slow,
      fill: 'var(--color-links)',
      ease: "slow(0.3, 0.4, false)",
    }
  },
  container_section:{
    normal:{
      duration: t_medium,
      ease: "slow(0.3, 0.4, false)",
      marginLeft: '1rem',            
      // marginLeft: '1.5rem', esto es en mobile            
    },
    selected:{
      duration: t_medium,
      ease: "slow(0.3, 0.4, false)",
      marginLeft: 0,
    }
  },
  title_h3:{
    normal:{
      duration: t_medium,
      fontWeight: 600,
      fontSize: '1rem',
      color: 'var(--color-heading)',
      ease: "none"
    },
    selected:{
      duration: t_slow,
      fontWeight: 800,
      fontSize: '1.2rem',
      color: 'var(--color-links)',
      ease: "none"
      // marginBottom: '3rem',
    }
  },
  description_p:{
    normal:{
      duration: t_medium,
      ease: "none",
      paddingLeft: '0px',
    },
    selected:{
      duration: t_slow,
      ease: "none",
      paddingLeft: '0px',
      //display: block;
      //padding-left: 0px;
    }
  }
}

export default {
  t_slow,
  t_medium,
  t_fast,
  tl_itemSelected,
  tl_itemSiblingSelected,
  tl_itemDeselected,
  tl_itemSiblingDeselected,
}