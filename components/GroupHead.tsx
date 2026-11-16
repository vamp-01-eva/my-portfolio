import type { ProjectGroup } from "@/content/projects";
import { GroupGlyph } from "@/components/SigilSprite";

export function GroupHead({
  number,
  group,
  title,
  line,
  label = "group",
  id,
}: {
  number: string;
  group: ProjectGroup;
  title: string;
  line: string;
  label?: string;
  id?: string;
}) {
  const headingId = id ?? `${group}-title`;
  return (
    <div className="group-head">
      <span className="group-head__mark" aria-hidden="true">
        <GroupGlyph group={group} />
      </span>
      <div className="group-head__copy">
        <p className="eyebrow">
          <span>{number}</span>{label}
        </p>
        <h2 id={headingId}>{title}</h2>
        <p className="lead">{line}</p>
      </div>
    </div>
  );
}
