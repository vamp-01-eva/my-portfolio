(() => {
  const header = document.querySelector('[data-header]');
  const menu = document.querySelector('.nav-menu');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let lastY = window.scrollY;

  function revealHeader() {
    if (header) header.classList.remove('is-retracted');
  }

  function onScroll() {
    if (!header) return;
    if (reduceMotion.matches) {
      revealHeader();
      return;
    }
    if (menu && menu.open) {
      revealHeader();
      return;
    }
    const y = window.scrollY;
    if (y > 180 && y > lastY + 6) {
      header.classList.add('is-retracted');
    } else if (y < lastY - 6 || y < 80) {
      revealHeader();
    }
    lastY = y;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  if (header) {
    header.addEventListener('focusin', revealHeader);
    header.addEventListener('pointerenter', revealHeader);
  }

  if (menu) {
    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => { menu.open = false; });
    });
    document.addEventListener('click', (event) => {
      if (menu.open && !menu.contains(event.target)) menu.open = false;
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menu.open) {
        menu.open = false;
        const summary = menu.querySelector('summary');
        if (summary) summary.focus();
      }
    });
  }

  const form = document.querySelector('[data-contact-form]');
  if (form) {
    const status = form.querySelector('[data-form-status]');
    const fields = [...form.querySelectorAll('input, textarea')];

    function errorFor(field) {
      return form.querySelector(`[data-error-for="${field.id}"]`);
    }

    function validateField(field) {
      const value = field.value.trim();
      const validEmail = field.type !== 'email' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      const valid = value.length > 0 && validEmail;
      const error = errorFor(field);
      field.setAttribute('aria-invalid', String(!valid));
      if (error) error.hidden = valid;
      return valid;
    }

    fields.forEach((field) => {
      field.addEventListener('input', () => {
        const error = errorFor(field);
        if (error && !error.hidden) validateField(field);
      });
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const valid = fields.map(validateField).every(Boolean);
      if (!valid) {
        if (status) {
          status.textContent = 'Check the highlighted fields.';
          status.classList.add('is-error');
        }
        const firstInvalid = fields.find((field) => field.getAttribute('aria-invalid') === 'true');
        if (firstInvalid) firstInvalid.focus();
        return;
      }
      if (status) {
        status.classList.remove('is-error');
        status.textContent = 'Nothing was sent. This form is not connected yet. Email markjustinemau@gmail.com.';
      }
    });
  }
})();
