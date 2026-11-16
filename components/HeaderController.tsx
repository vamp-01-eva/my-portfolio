"use client";

import { useEffect } from "react";

export function HeaderController() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>("[data-header]");
    const menu = document.querySelector<HTMLDetailsElement>(".nav-menu");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lastY = window.scrollY;

    function revealHeader() {
      header?.classList.remove("is-retracted");
    }

    function onScroll() {
      if (!header) return;
      if (reduceMotion.matches || (menu && menu.open)) {
        revealHeader();
        return;
      }
      const y = window.scrollY;
      if (y > 180 && y > lastY + 6) {
        header.classList.add("is-retracted");
      } else if (y < lastY - 6 || y < 80) {
        revealHeader();
      }
      lastY = y;
    }

    function onDocumentClick(event: MouseEvent) {
      if (menu?.open && !menu.contains(event.target as Node)) {
        menu.open = false;
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && menu?.open) {
        menu.open = false;
        menu.querySelector("summary")?.focus();
      }
    }

    function onMenuLinkClick() {
      if (menu) menu.open = false;
    }

    const menuLinks = menu
      ? Array.from(menu.querySelectorAll<HTMLAnchorElement>("a"))
      : [];

    window.addEventListener("scroll", onScroll, { passive: true });
    header?.addEventListener("focusin", revealHeader);
    header?.addEventListener("pointerenter", revealHeader);
    document.addEventListener("click", onDocumentClick);
    document.addEventListener("keydown", onKeyDown);
    menuLinks.forEach((link) => link.addEventListener("click", onMenuLinkClick));

    return () => {
      window.removeEventListener("scroll", onScroll);
      header?.removeEventListener("focusin", revealHeader);
      header?.removeEventListener("pointerenter", revealHeader);
      document.removeEventListener("click", onDocumentClick);
      document.removeEventListener("keydown", onKeyDown);
      menuLinks.forEach((link) =>
        link.removeEventListener("click", onMenuLinkClick),
      );
    };
  }, []);

  return null;
}
