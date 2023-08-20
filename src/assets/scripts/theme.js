export default {
    setLightTheme() {
        document.documentElement.style.setProperty('--color-background', 'var(--vt-c-white)');
        document.documentElement.style.setProperty('--color-background-soft', 'var(--vt-c-white-soft)');
        document.documentElement.style.setProperty('--color-background-mute', 'var(--vt-c-white-mute)');
        document.documentElement.style.setProperty('--color-border', 'var(--vt-c-divider-light-2)');
        document.documentElement.style.setProperty('--color-border-hover', 'var(--vt-c-divider-light-1)');
        document.documentElement.style.setProperty('--color-heading', 'var(--vt-c-text-light-1)');
        document.documentElement.style.setProperty('--color-text', 'var(--vt-c-text-light-1)');
        document.documentElement.style.setProperty('--color-links', 'var(--vt-c-blue)');
    
    },
    setDarkTheme() {
        document.documentElement.style.setProperty('--color-background', 'var(--vt-c-black)');
        document.documentElement.style.setProperty('--color-background-soft', 'var(--vt-c-black-soft)');
        document.documentElement.style.setProperty('--color-background-mute', 'var(--vt-c-black-mute)');
        document.documentElement.style.setProperty('--color-border', 'var(--vt-c-divider-dark-2)');
        document.documentElement.style.setProperty('--color-border-hover', 'var(--vt-c-divider-dark-1)');
        document.documentElement.style.setProperty('--color-heading', 'var(--vt-c-text-dark-1)');
        document.documentElement.style.setProperty('--color-text', 'var(--vt-c-text-dark-2)');
        document.documentElement.style.setProperty('--color-links', 'var(--vt-c-orange)');
    }
}