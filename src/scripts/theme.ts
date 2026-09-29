const STORAGE_KEY = 'theme';

export type Theme = 'light' | 'dark';

export function getTheme(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

export function setTheme(theme: Theme): void {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.documentElement.style.colorScheme = theme;
  localStorage.setItem(STORAGE_KEY, theme);
}

export function toggleTheme(): Theme {
  const next: Theme = getTheme() === 'dark' ? 'light' : 'dark';
  setTheme(next);
  return next;
}

function syncToggle(button: HTMLElement): void {
  const dark = getTheme() === 'dark';
  button.setAttribute('aria-checked', String(dark));
  button.setAttribute('aria-label', dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
}

export function initThemeToggles(): void {
  const buttons = document.querySelectorAll<HTMLElement>('[data-theme-toggle]');
  buttons.forEach((button) => {
    syncToggle(button);
    button.addEventListener('click', () => {
      toggleTheme();
      buttons.forEach(syncToggle);
    });
  });
}
