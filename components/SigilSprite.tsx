import type { ProjectGroup } from "@/content/projects";
import { groupSigilId, projectSigilId } from "@/lib/sigils";

function polygon(
  cx: number,
  cy: number,
  radius: number,
  sides: number,
  rotation = -90,
) {
  const points: string[] = [];
  for (let i = 0; i < sides; i += 1) {
    const angle = ((rotation + (360 / sides) * i) * Math.PI) / 180;
    points.push(
      `${(cx + radius * Math.cos(angle)).toFixed(2)},${(
        cy +
        radius * Math.sin(angle)
      ).toFixed(2)}`,
    );
  }
  return points.join(" ");
}

function radialTicks(
  cx: number,
  cy: number,
  inner: number,
  outer: number,
  count: number,
  rotation = -90,
) {
  const paths: string[] = [];
  for (let i = 0; i < count; i += 1) {
    const angle = ((rotation + (360 / count) * i) * Math.PI) / 180;
    const x1 = cx + inner * Math.cos(angle);
    const y1 = cy + inner * Math.sin(angle);
    const x2 = cx + outer * Math.cos(angle);
    const y2 = cy + outer * Math.sin(angle);
    paths.push(`M${x1.toFixed(1)} ${y1.toFixed(1)}L${x2.toFixed(1)} ${y2.toFixed(1)}`);
  }
  return paths.join("");
}

const sealOuter = polygon(200, 200, 176, 10);
const sealInner = polygon(200, 200, 148, 10);
const sealCore = polygon(200, 200, 104, 10);
const sealTicks = [
  radialTicks(200, 200, 178, 192, 10),
  radialTicks(200, 200, 156, 168, 10, -72),
].join("");

const fieldOuter = polygon(300, 300, 272, 12);
const fieldInner = polygon(300, 300, 196, 12);
const fieldTicks = radialTicks(300, 300, 206, 292, 12);

export function SigilSprite() {
  return (
    <svg
      className="sigil-sprite"
      aria-hidden="true"
      focusable="false"
      width="0"
      height="0"
    >
      <defs>
        <linearGradient id="chrome-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.16" stopColor="#e2e6eb" />
          <stop offset="0.34" stopColor="#9298a1" />
          <stop offset="0.48" stopColor="#f5f7fa" />
          <stop offset="0.6" stopColor="#b8bec6" />
          <stop offset="0.78" stopColor="#6f757e" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <symbol id="mark-m" viewBox="0 0 48 48">
        <g
          fill="none"
          stroke="url(#chrome-stroke)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 40V10l4-4 4 4v22l9-10 9 10V10l4-4 4 4v30" />
          <path d="M24 26l4 4-4 4-4-4z" />
        </g>
      </symbol>
      <symbol id="seal-rings" viewBox="0 0 400 400">
        <g fill="none" stroke="url(#chrome-stroke)" strokeWidth="1">
          <circle cx="200" cy="200" r="194" strokeDasharray="1 7" opacity="0.45" />
          <polygon points={sealOuter} opacity="0.9" />
          <polygon points={sealInner} opacity="0.5" />
          <polygon points={sealCore} opacity="0.85" />
          <path d={sealTicks} opacity="0.65" />
          <path d="M200 84v28M200 288v28M84 200h28M288 200h28" opacity="0.4" />
        </g>
      </symbol>
      <symbol id="sigil-field" viewBox="0 0 600 600">
        <g fill="none" stroke="url(#chrome-stroke)" strokeWidth="1">
          <polygon points={fieldOuter} opacity="0.7" />
          <polygon points={fieldInner} opacity="0.5" />
          <path d={fieldTicks} opacity="0.5" />
          <path d="M300 236l64 64-64 64-64-64z" opacity="0.8" />
        </g>
      </symbol>
      <symbol id="sig-thorn" viewBox="0 0 120 12">
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M0 6h48M72 6h48" />
          <path d="M60 1l5 5-5 5-5-5z" />
          <path d="M54 6h-4M66 6h4" />
        </g>
      </symbol>
      <symbol id="sig-01" viewBox="0 0 120 120">
        <g
          fill="none"
          stroke="url(#chrome-stroke)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="60" cy="60" r="34" />
          <circle cx="60" cy="60" r="21" />
          <path d="M60 39v21l14 9" />
          <path d="M60 12v8M60 100v8M12 60h8M100 60h8M26 26l6 6M94 26l-6 6M26 94l6-6M94 94l-6-6" />
        </g>
      </symbol>
      <symbol id="sig-02" viewBox="0 0 120 120">
        <g
          fill="none"
          stroke="url(#chrome-stroke)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 72l12-26h52l12 26" />
          <path d="M18 72h84v14H18z" />
          <circle cx="38" cy="90" r="6" />
          <circle cx="82" cy="90" r="6" />
          <path d="M60 22v16M52 30l8 8 8-8" />
        </g>
      </symbol>
      <symbol id="sig-03" viewBox="0 0 120 120">
        <g
          fill="none"
          stroke="url(#chrome-stroke)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="42" y="18" width="36" height="58" rx="4" />
          <path d="M60 18v58" />
          <circle cx="48" cy="92" r="9" />
          <circle cx="72" cy="92" r="9" />
          <path d="M54 85L74 30M66 85L46 30" />
        </g>
      </symbol>
      <symbol id="sig-04" viewBox="0 0 120 120">
        <g
          fill="none"
          stroke="url(#chrome-stroke)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M88 44a34 34 0 1 0 6 32" />
          <path d="M88 44l2-16-14 7" />
          <rect x="46" y="38" width="28" height="44" rx="3" />
          <path d="M60 38v44M46 50h28" />
        </g>
      </symbol>
      <symbol id="sig-05" viewBox="0 0 120 120">
        <g
          fill="none"
          stroke="url(#chrome-stroke)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="20" y="28" width="80" height="60" rx="4" />
          <path d="M20 42h80" />
          <rect x="34" y="62" width="30" height="6" rx="2" />
          <rect x="70" y="62" width="16" height="6" rx="2" />
          <path d="M60 88v10M48 102h24" />
        </g>
      </symbol>
      <symbol id="sig-06" viewBox="0 0 120 120">
        <g
          fill="none"
          stroke="url(#chrome-stroke)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M88 38a36 36 0 1 0 6 38" />
          <path d="M88 38l2-18-16 8" />
          <rect x="46" y="52" width="28" height="28" />
          <path d="M46 60h28M56 46v-6M64 46v-6" />
        </g>
      </symbol>
      <symbol id="sig-07" viewBox="0 0 120 120">
        <g
          fill="none"
          stroke="url(#chrome-stroke)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 28h76v52H58L38 98V80H22z" />
          <circle cx="44" cy="54" r="3" />
          <circle cx="60" cy="54" r="3" />
          <circle cx="76" cy="54" r="3" />
          <path d="M60 16v12M46 12l14 10 14-10" />
        </g>
      </symbol>
      <symbol id="sig-11" viewBox="0 0 120 120">
        <g
          fill="none"
          stroke="url(#chrome-stroke)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="18" y="24" width="84" height="72" rx="3" />
          <path d="M18 38h84" />
          <circle cx="26" cy="31" r="1.4" />
          <circle cx="32" cy="31" r="1.4" />
          <path d="M84 31l4 4-4 4-4-4z" />
          <rect x="30" y="50" width="24" height="16" />
          <rect x="60" y="50" width="24" height="16" />
          <rect x="30" y="72" width="54" height="12" />
        </g>
      </symbol>
      <symbol id="sig-10" viewBox="0 0 120 120">
        <g
          fill="none"
          stroke="url(#chrome-stroke)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="60" cy="60" r="38" />
          <path d="M60 14v12M60 94v12M14 60h12M94 60h12M28 28l9 9M92 28l-9 9M28 92l9-9M92 92l-9-9" />
          <rect x="42" y="42" width="36" height="36" />
          <path d="M42 60h36M60 42v36" />
        </g>
      </symbol>
      <symbol id="status-done" viewBox="0 0 16 16">
        <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round">
          <path d="M8 1.5l6.5 6.5L8 14.5 1.5 8z" />
          <circle cx="8" cy="8" r="1.8" fill="currentColor" stroke="none" />
        </g>
      </symbol>
      <symbol id="status-progress" viewBox="0 0 16 16">
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
          strokeLinecap="round"
        >
          <path d="M8 1.5l6.5 6.5L8 14.5 1.5 8z" />
          <path d="M8 4.5v7" />
        </g>
      </symbol>
      <symbol id="status-internship" viewBox="0 0 16 16">
        <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round">
          <path d="M8 1.5l6.5 6.5L8 14.5 1.5 8z" />
          <circle cx="5.6" cy="8" r="1" fill="currentColor" stroke="none" />
          <circle cx="10.4" cy="8" r="1" fill="currentColor" stroke="none" />
        </g>
      </symbol>
      <symbol id="status-build" viewBox="0 0 16 16">
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
          strokeLinecap="round"
        >
          <path d="M8 1.5l6.5 6.5L8 14.5 1.5 8z" />
          <path d="M5.5 8h5" />
        </g>
      </symbol>
      <symbol id="status-prototype" viewBox="0 0 16 16">
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
          strokeLinecap="round"
        >
          <path d="M8 1.5l6.5 6.5L8 14.5 1.5 8z" />
          <path d="M5.5 10.5l5-5" />
        </g>
      </symbol>
      <symbol id="status-academic" viewBox="0 0 16 16">
        <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round">
          <path d="M8 1.5l6.5 6.5L8 14.5 1.5 8z" />
          <rect x="6" y="6" width="4" height="4" />
        </g>
      </symbol>
      <symbol id="group-web" viewBox="0 0 16 16">
        <g fill="none" stroke="currentColor" strokeWidth="1.2">
          <rect x="2" y="2" width="12" height="12" />
          <path d="M8 2v12M2 8h12" />
        </g>
      </symbol>
      <symbol id="group-ai" viewBox="0 0 16 16">
        <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round">
          <path d="M8 1.5L14.5 13.5H1.5z" />
          <circle cx="8" cy="9" r="2" />
        </g>
      </symbol>
      <symbol id="group-academic" viewBox="0 0 16 16">
        <g fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="8" cy="8" r="6.5" />
          <path d="M8 1.5v13M1.5 8h13" />
        </g>
      </symbol>
    </svg>
  );
}

export function ProjectSigil({
  slug,
  className = "sigil",
}: {
  slug: string;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      aria-hidden="true"
      focusable="false"
    >
      <use href={`#${projectSigilId(slug)}`} />
    </svg>
  );
}

export function GroupGlyph({
  group,
  className = "group__glyph",
}: {
  group: ProjectGroup;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      aria-hidden="true"
      focusable="false"
    >
      <use href={`#${groupSigilId(group)}`} />
    </svg>
  );
}
