/* Screenshot rail: scroll position, prev/next, and the enlarge dialog. */
(function () {
  'use strict';

  const rails = Array.from(document.querySelectorAll('[data-rail]'));
  if (!rails.length) return;

  const dialog = document.querySelector('[data-lightbox]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const pad = (value) => String(value).padStart(2, '0');
  const itemsOf = (rail) => Array.from(rail.querySelectorAll('.shot'));
  const trackOf = (rail) => rail.querySelector('[data-rail-track]');

  let active = null;
  let opener = null;

  function nearestIndex(track, items) {
    const box = track.getBoundingClientRect();
    let best = 0;
    let bestDistance = Infinity;
    items.forEach((item, index) => {
      const distance = Math.abs(item.getBoundingClientRect().left - box.left);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = index;
      }
    });
    return best;
  }

  function scrollToIndex(track, items, index) {
    const item = items[Math.max(0, Math.min(items.length - 1, index))];
    if (!item) return;
    const box = track.getBoundingClientRect();
    const rect = item.getBoundingClientRect();
    const padding = parseFloat(getComputedStyle(track).paddingLeft) || 0;
    track.scrollBy({
      left: rect.left - box.left - padding,
      behavior: reduceMotion.matches ? 'auto' : 'smooth'
    });
  }

  function updateRail(rail) {
    const track = trackOf(rail);
    const items = itemsOf(rail);
    if (!track || !items.length) return;

    const index = nearestIndex(track, items);
    rail.dataset.index = String(index);

    const count = rail.querySelector('[data-rail-count]');
    if (count) count.textContent = `${pad(index + 1)} / ${pad(items.length)}`;

    const maxScroll = track.scrollWidth - track.clientWidth;
    const prev = rail.querySelector('[data-rail-prev]');
    const next = rail.querySelector('[data-rail-next]');
    if (prev) prev.disabled = track.scrollLeft <= 2;
    if (next) next.disabled = track.scrollLeft >= maxScroll - 2;
  }

  function renderLightbox() {
    if (!active) return;
    const item = active.items[active.index];
    const link = item.querySelector('.shot__link');
    const image = link.querySelector('img');
    const cap = item.querySelector('.shot__cap');
    const tag = cap ? cap.querySelector('.shot__tag') : null;
    const text = cap ? cap.querySelector('.shot__cap-text') : null;

    const view = dialog.querySelector('[data-lightbox-img]');
    view.src = link.getAttribute('href');
    view.alt = image ? image.alt : '';
    if (image) {
      view.width = image.getAttribute('width');
      view.height = image.getAttribute('height');
    }

    dialog.querySelector('[data-lightbox-tag]').textContent = tag ? tag.textContent : '';
    dialog.querySelector('[data-lightbox-text]').textContent = text ? text.textContent : '';
    dialog.querySelector('[data-lightbox-count]').textContent = `${pad(active.index + 1)} / ${pad(active.items.length)}`;

    const naturalWidth = Number(image && (image.naturalWidth || image.getAttribute('width'))) || 0;
    const naturalHeight = Number(image && (image.naturalHeight || image.getAttribute('height'))) || 0;
    if (naturalWidth && naturalHeight) {
      const ratio = naturalWidth / naturalHeight;
      const heightRatio = window.matchMedia('(max-width: 40rem)').matches ? 0.62 : 0.72;
      const maxHeight = Math.round(window.innerHeight * heightRatio);
      dialog.style.width = Math.min(Math.round(window.innerWidth * 0.96), Math.round(ratio * maxHeight)) + 'px';
    } else {
      dialog.style.width = '';
    }

    const single = active.items.length < 2;
    const prev = dialog.querySelector('[data-lightbox-prev]');
    const next = dialog.querySelector('[data-lightbox-next]');
    if (prev) prev.disabled = single;
    if (next) next.disabled = single;
  }

  function stepLightbox(delta) {
    if (!active) return;
    active.index = (active.index + delta + active.items.length) % active.items.length;
    renderLightbox();
    const rail = active.items[0].closest('[data-rail]');
    const track = rail ? trackOf(rail) : null;
    if (track) scrollToIndex(track, active.items, active.index);
  }

  function openLightbox(items, index, trigger) {
    if (!dialog || index < 0) return;
    active = { items, index };
    opener = trigger || null;
    renderLightbox();
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
    dialog.focus();
    document.documentElement.classList.add('is-locked');
  }

  rails.forEach((rail) => {
    const track = trackOf(rail);
    const items = itemsOf(rail);
    if (!track || !items.length) return;

    let frame = 0;
    let dragStart = null;

    track.addEventListener('scroll', () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        updateRail(rail);
      });
    }, { passive: true });

    track.addEventListener('pointerdown', (event) => {
      dragStart = { x: event.clientX, y: event.clientY };
    }, { passive: true });

    const prev = rail.querySelector('[data-rail-prev]');
    const next = rail.querySelector('[data-rail-next]');
    if (prev) prev.addEventListener('click', () => scrollToIndex(track, items, nearestIndex(track, items) - 1));
    if (next) next.addEventListener('click', () => scrollToIndex(track, items, nearestIndex(track, items) + 1));

    updateRail(rail);

    if (!dialog) return;

    rail.addEventListener('click', (event) => {
      const link = event.target.closest('.shot__link');
      if (!link || !rail.contains(link)) return;
      event.preventDefault();
      if (dragStart && (Math.abs(event.clientX - dragStart.x) > 8 || Math.abs(event.clientY - dragStart.y) > 8)) {
        dragStart = null;
        return;
      }
      dragStart = null;
      const item = link.closest('.shot');
      openLightbox(items, items.indexOf(item), link);
    });
  });

  function releaseLightbox() {
    document.documentElement.classList.remove('is-locked');
    active = null;
    if (opener && typeof opener.focus === 'function') opener.focus();
    opener = null;
  }

  function closeLightbox() {
    if (!dialog) return;
    if (dialog.open && typeof dialog.close === 'function') dialog.close();
    else dialog.removeAttribute('open');
    releaseLightbox();
  }

  if (!dialog) return;

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) closeLightbox();
  });

  dialog.addEventListener('close', releaseLightbox);

  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeLightbox();
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      stepLightbox(-1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      stepLightbox(1);
    }
  });

  const close = dialog.querySelector('[data-lightbox-close]');
  const prev = dialog.querySelector('[data-lightbox-prev]');
  const next = dialog.querySelector('[data-lightbox-next]');
  if (close) close.addEventListener('click', closeLightbox);
  if (prev) prev.addEventListener('click', () => stepLightbox(-1));
  if (next) next.addEventListener('click', () => stepLightbox(1));
})();
