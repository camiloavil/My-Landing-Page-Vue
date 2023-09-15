
const t_slow = 0.5;
const t_medium = 0.2;
// const t_fast = 0.1;

export default {
  bigContainer_div:{
    normal:{
      duration: t_medium,
      blur: 0,
      scale: 1,
      border: 'none',
      backgroundColor: 'var(--color-background)',
      zIndex: 1,
      marginLeft: '0.2rem',
      ease: "elastic.out(1, 0.5)",
    },
    selected:{
      duration: t_slow,
      scale: 1.1,
      blur: 0,
      border: '2px solid var(--color-border)',
      backgroundColor: 'var(--color-background-soft)',
      zIndex: 2,
      marginLeft: '1rem',
      ease: "slow(0.3, 0.4, false)"
    },
    hide:{
      duration: t_slow,
      filter: 'blur(1.5px)',
      scale: 0.9,
      border: 'none',
      backgroundColor: 'var(--color-background)',
      zIndex: 1,
      // ease: "slow(0.3, 0.4, false)"
      ease: 'elastic.out(1, 0.5)'
      // blur: 1.5,
      }
  },
  container_i:{
    normal:{
      duration: t_medium,
      ease: "slow(0.3, 0.4, false)",
      position: 'static',
    },
      selected:{
      duration: t_slow,
      ease: "slow(0.3, 0.4, false)",
      position: 'absolute',
      top: 'calc(50%)',
      left: 'calc(0% - 16px)',
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
      marginLeft: '1.5rem',            
    },
    selected:{
      duration: t_medium,
      ease: "slow(0.3, 0.4, false)",
      marginLeft: '0.4rem',
    }
  },
  title_h3:{
    normal:{
      duration: t_medium,
      fontWeight: 600,
      fontSize: '1rem',
      color: 'var(--color-heading)',
      ease: "slow(0.3, 0.4, false)",
    },
    selected:{
      duration: t_slow,
      fontWeight: 700,
      fontSize: '1.1rem',
      color: 'var(--color-links)',
      ease: "slow(0.3, 0.4, false)",
    }
  },
  description_p:{
    normal:{
      duration: t_medium,
      ease: "slow(0.3, 0.4, false)",
      display: 'none',
      opacity: 0,
      paddingLeft: '0px',
    },
    selected:{
      duration: t_slow,
      ease: "slow(0.3, 0.4, false)",
      opacity: 1,
      display: 'block',
      paddingLeft: '0.7rem',
    }
  },
  sectionLinks:{
    normal:{
      duration: t_medium,
      ease: "slow(0.3, 0.4, false)",
      display: 'none',
      opacity: 0
    },
    selected:{
      duration: t_slow,
      ease: "slow(0.3, 0.4, false)",  
      opacity: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    hide:{
      duration: t_slow,
      ease: "slow(0.3, 0.4, false)",  
      display: 'none',
    }
  }
}