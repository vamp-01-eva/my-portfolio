"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
} from "react";
import type { Screens } from "@/content/projects";
import styles from "./ShotRail.module.css";

const pad = (value: number) => String(value).padStart(2, "0");

function railSizes(image: { w: number; h: number }) {
  const ratio = image.w / image.h;
  const mobile = Math.min(image.w, Math.ceil(186 * ratio));
  const desktop = Math.min(image.w, Math.ceil(306 * ratio));
  return `(max-width: 40rem) ${mobile}px, ${desktop}px`;
}

export function ShotRail({ screens }: { screens: Screens }) {
  const images = screens.images ?? [];
  const trackRef = useRef<HTMLUListElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLAnchorElement | null>(null);
  const dragStartRef = useRef<{ x: number; y: number } | null>(null);
  const frameRef = useRef(0);
  const [current, setCurrent] = useState(0);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(images.length < 2);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const itemsOf = useCallback(
    () =>
      Array.from(
        trackRef.current?.querySelectorAll<HTMLElement>("[data-shot]") ?? [],
      ),
    [],
  );

  const nearestIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const box = track.getBoundingClientRect();
    let best = 0;
    let bestDistance = Infinity;
    itemsOf().forEach((item, index) => {
      const distance = Math.abs(item.getBoundingClientRect().left - box.left);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = index;
      }
    });
    return best;
  }, [itemsOf]);

  const updateRail = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const items = itemsOf();
    if (!items.length) return;
    setCurrent(nearestIndex());
    const maxScroll = track.scrollWidth - track.clientWidth;
    setPrevDisabled(track.scrollLeft <= 2);
    setNextDisabled(track.scrollLeft >= maxScroll - 2);
  }, [itemsOf, nearestIndex]);

  const scrollToIndex = useCallback(
    (index: number) => {
      const track = trackRef.current;
      const items = itemsOf();
      const item = items[Math.max(0, Math.min(items.length - 1, index))];
      if (!track || !item) return;
      const box = track.getBoundingClientRect();
      const rect = item.getBoundingClientRect();
      const padding = parseFloat(getComputedStyle(track).paddingLeft) || 0;
      track.scrollBy({
        left: rect.left - box.left - padding,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
    },
    [itemsOf],
  );

  useEffect(() => {
    updateRail();
    const onResize = () => updateRail();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [updateRail]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (activeIndex === null) {
      if (dialog.open) dialog.close();
      document.documentElement.classList.remove("is-locked");
      return;
    }

    const active = images[activeIndex];
    if (!active) return;
    const ratio = active.w / active.h;
    const heightRatio = window.matchMedia("(max-width: 40rem)").matches
      ? 0.62
      : 0.72;
    const maxHeight = Math.round(window.innerHeight * heightRatio);
    dialog.style.width =
      Math.min(Math.round(window.innerWidth * 0.96), Math.round(ratio * maxHeight)) +
      "px";

    if (!dialog.open) {
      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
    }
    dialog.focus();
    document.documentElement.classList.add("is-locked");
  }, [activeIndex, images]);

  function openLightbox(index: number, opener: HTMLAnchorElement) {
    openerRef.current = opener;
    setActiveIndex(index);
  }

  function closeLightbox() {
    const dialog = dialogRef.current;
    if (dialog?.open) dialog.close();
    else setActiveIndex(null);
  }

  function stepLightbox(delta: number) {
    if (activeIndex === null || !images.length) return;
    const next = (activeIndex + delta + images.length) % images.length;
    setActiveIndex(next);
    scrollToIndex(next);
  }

  function onDialogClose() {
    document.documentElement.classList.remove("is-locked");
    setActiveIndex(null);
    openerRef.current?.focus();
    openerRef.current = null;
  }

  function onTrackScroll() {
    if (frameRef.current) return;
    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = 0;
      updateRail();
    });
  }

  function onShotClick(event: MouseEvent<HTMLAnchorElement>, index: number) {
    event.preventDefault();
    const start = dragStartRef.current;
    dragStartRef.current = null;
    if (
      start &&
      (Math.abs(event.clientX - start.x) > 8 ||
        Math.abs(event.clientY - start.y) > 8)
    ) {
      return;
    }
    openLightbox(index, event.currentTarget);
  }

  const active = activeIndex !== null ? images[activeIndex] : null;
  const single = images.length < 2;

  return (
    <div className={styles.rail} data-rail>
      <div className={styles.bar}>
        <span className={styles.title}>{screens.title}</span>
        <span className={styles.meta}>
          <span className={styles.count} data-rail-count>
            {pad(current + 1)} / {pad(images.length)}
          </span>
          <span className={styles.hint}>scroll or drag · click to enlarge</span>
        </span>
        <span className={styles.nav}>
          <button
            type="button"
            className={styles.btn}
            data-rail-prev
            aria-label="Previous screenshot"
            disabled={prevDisabled}
            onClick={() => scrollToIndex(nearestIndex() - 1)}
          >
            ‹
          </button>
          <button
            type="button"
            className={styles.btn}
            data-rail-next
            aria-label="Next screenshot"
            disabled={nextDisabled}
            onClick={() => scrollToIndex(nearestIndex() + 1)}
          >
            ›
          </button>
        </span>
      </div>
      <ul
        className={styles.track}
        data-rail-track
        ref={trackRef}
        aria-label={screens.title}
        onScroll={onTrackScroll}
        onPointerDown={(event) => {
          dragStartRef.current = { x: event.clientX, y: event.clientY };
        }}
      >
        {images.map((image, index) => (
          <li className={styles.shot} data-shot key={image.src}>
            <a
              className={styles.link}
              href={image.src}
              aria-label={`Enlarge screenshot: ${image.alt}`}
              onClick={(event) => onShotClick(event, index)}
            >
              <span
                className={styles.frame}
                style={{ "--ar": `${image.w} / ${image.h}` } as CSSProperties}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.w}
                  height={image.h}
                  sizes={railSizes(image)}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </span>
            </a>
            <p className={styles.cap}>
              <span className={styles.tag}>{image.tag}</span>
              {" "}
              <span>{image.caption}</span>
            </p>
          </li>
        ))}
      </ul>

      <dialog
        className={styles.lightbox}
        ref={dialogRef}
        tabIndex={-1}
        aria-labelledby="lightbox-caption"
        onClick={(event) => {
          if (event.target === dialogRef.current) closeLightbox();
        }}
        onClose={onDialogClose}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            closeLightbox();
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            stepLightbox(-1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            stepLightbox(1);
          }
        }}
      >
        <div className={styles.lightboxFrame}>
          {active ? (
            <Image
              key={active.src}
              src={active.src}
              alt={active.alt}
              width={active.w}
              height={active.h}
              sizes="96vw"
            />
          ) : null}
        </div>
        <div className={styles.lightboxBar}>
          <p className={styles.lightboxCaption} id="lightbox-caption">
            <span className={styles.lightboxTag}>{active?.tag ?? ""}</span>
            {" "}
            <span>{active?.caption ?? ""}</span>
          </p>
          <div className={styles.lightboxNav}>
            <span className={styles.lightboxCount}>
              {activeIndex !== null
                ? `${pad(activeIndex + 1)} / ${pad(images.length)}`
                : ""}
            </span>
            <button
              type="button"
              className={styles.lightboxBtn}
              aria-label="Previous screenshot"
              disabled={single}
              onClick={() => stepLightbox(-1)}
            >
              ‹
            </button>
            <button
              type="button"
              className={styles.lightboxBtn}
              aria-label="Next screenshot"
              disabled={single}
              onClick={() => stepLightbox(1)}
            >
              ›
            </button>
            <button
              type="button"
              className={styles.lightboxBtn}
              aria-label="Close enlarged screenshot"
              onClick={closeLightbox}
            >
              ×
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
