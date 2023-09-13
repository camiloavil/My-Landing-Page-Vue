import { gsap } from 'gsap';

const t_slow = 0.5;

export function animateInChildren_II(element, done) {
    gsap.from(element.children, {
        autoAlpha: 0, 
        x: '+50',
        scale: 0.2,
        duration: t_slow, 
        stagger: 0.15,
        ease: "back.out(2)",
        onComplete: done
    });
}
export function animateInChildren(element, done) {
  gsap.from(element.children,{
    autoAlpha: 0,
    x: '+75',
    scale: 0.3,
    ease: "back.out(2)" ,
    duration: 1.2,
    stagger: 0.2,
    onComplete: done
  });
}
export function animateInClass_I(element) {
  gsap.from(element, {
    autoAlpha: 0,
    // opacity: 0, 
    scale: 0.5,
    x: '+50',
    duration: t_slow + 0.5, 
    ease: "back.out(2)" 
  });
}
export function animateInClass_II(element) {
  gsap.from(element, {
    // autoAlpha: 0,
    y: '-50%',
    opacity: 0, 
    scale: 0.2,
    duration: t_slow, 
    ease: "slow(0.7, 0.7, false)"
  });
}
