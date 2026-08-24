export function getStoredTheme() {
  try {
    return localStorage.getItem('theme');
  } catch (e) {
    return null;
  }
}

export function getPreferredTheme() {
  try {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch (e) {
    return 'light';
  }
}

export function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}

export function toggleTheme() {
  var stored = getStoredTheme();
  var newTheme = 'light';
  if (stored) {
    newTheme = stored === 'dark' ? 'light' : 'dark';
  } else {
    newTheme = getPreferredTheme() === 'dark' ? 'light' : 'dark';
  }
  try {
    localStorage.setItem('theme', newTheme);
  } catch (e) {}
  applyTheme(newTheme);
  return newTheme;
}

export function currentTheme() {
  var stored = getStoredTheme();
  if (stored) return stored;
  return getPreferredTheme();
}