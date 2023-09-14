
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
        ease: "elastic.out(1, 0.5)",
        },
        selected:{
        duration: t_slow,
        scale: 1.12,
        blur: 0,
        border: '3px solid var(--color-border)',
        backgroundColor: 'var(--color-background-soft)',
        zIndex: 2,
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