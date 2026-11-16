import { caseSections } from "@/content/site";

export function CaseContents() {
  return (
    <nav className="case-contents" aria-label="Case contents">
      <p className="case-contents__title">in this case</p>
      <ol>
        {caseSections.map((section, index) => (
          <li key={section.id}>
            <a href={`#${section.id}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {section.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
