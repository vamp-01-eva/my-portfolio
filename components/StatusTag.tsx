import type { ProjectStatus } from "@/content/projects";
import { statusKey } from "@/lib/sigils";

export function StatusTag({ status }: { status: ProjectStatus }) {
  const key = statusKey(status);
  return (
    <span className={`status status--${key}`}>
      <svg
        className="status__glyph"
        viewBox="0 0 16 16"
        aria-hidden="true"
        focusable="false"
      >
        <use href={`#status-${key}`} />
      </svg>
      <span>{status}</span>
    </span>
  );
}
