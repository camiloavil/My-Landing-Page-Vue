import { gsap } from 'gsap';

const duration = 0.5;

export const itemSelected = {
  scale: 1.12,
  duration: 0.1,
  border: '3px solid var(--color-border)',
  backgroundColor: 'var(--color-background-soft)',
  zIndex: 2,
  ease: "slow(0.3, 0.4, false)"
}

export function animateInChildren(element) {
    gsap.from(element.children, {
        autoAlpha: 0, 
        x: '+50',
        scale: 0.2,
        duration: duration, 
        stagger: 0.15,
        ease: "back.out(2)" 
    });
}
export function animateInClass_I(element) {
  gsap.from(element, {
    // autoAlpha: 0,
    opacity: 0, 
    scale: 0.5,
    x: '+50',
    duration: duration + 0.5, 
    ease: "back.out(2)" 
  });
}
export function animateInClass_II(element) {
  gsap.from(element, {
    // autoAlpha: 0,
    opacity: 0, 
    scale: 0.2,
    duration: duration, 
    ease: "slow(0.7, 0.7, false)"
  });
}
