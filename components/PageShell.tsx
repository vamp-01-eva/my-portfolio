import type { ReactNode } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader, type ActivePage } from "@/components/SiteHeader";

export function PageShell({
  active = "",
  children,
}: {
  active?: ActivePage;
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader active={active} />
      <main id="main">{children}</main>
      <SiteFooter />
    </>
  );
}
