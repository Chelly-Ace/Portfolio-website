 export function initTopbarOffset() {
  function debounce(fn, wait) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), wait);
    };
  }

  const setTopbarHeight = () => {
    try {
      const topbar = document.querySelector('.topbar');
      const height = topbar ? topbar.offsetHeight : 64;
      document.documentElement.style.setProperty('--topbar-height', `${height}px`);
    } catch (e) {
      // ignore
    }
  };

  const debouncedSet = debounce(setTopbarHeight, 100);

  // Initial measurement
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTopbarHeight();
  } else {
    window.addEventListener('DOMContentLoaded', setTopbarHeight, { once: true });
  }

  // Also run after all fonts have loaded (could change height)
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(setTopbarHeight).catch(() => {});
  }

  // Update on resize/orientation change
  window.addEventListener('resize', debouncedSet);
  window.addEventListener('orientationchange', debouncedSet);

  // Observe size changes of the topbar itself (menu toggles, dynamic content)
  try {
    const topbar = document.querySelector('.topbar');
    if (topbar && window.ResizeObserver) {
      const ro = new ResizeObserver(debouncedSet);
      ro.observe(topbar);
    }
  } catch (e) {
    // ignore
  }

  // Mutation observer as a fallback for class/content changes that affect height
  try {
    const topbar = document.querySelector('.topbar');
    if (topbar && window.MutationObserver) {
      const mo = new MutationObserver(debouncedSet);
      mo.observe(topbar, { childList: true, subtree: true, attributes: true });
    }
  } catch (e) {}
}

// Auto-init when this module is imported
initTopbarOffset();
