const t_slow = 0.5;

export const animateItems = {
  div:{
    normal:{
      duration: t_slow,
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
      // blur: 1.5,
    }
  },
  icon_svg:{
    normal:{
      duration: t_slow,
      fill: 'var(--color-text)',
      ease: "none"
    },
    selected:{
      duration: t_slow,
      fill: 'var(--color-links)',
      ease: "none"
    }
  },
  title_h3:{
    normal:{
      duration: t_slow,
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
    }
  },
  description:{}
}
