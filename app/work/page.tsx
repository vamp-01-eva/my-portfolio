import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/content/projects";
import { groups } from "@/content/site";
import { DossierList } from "@/components/DossierList";
import { GroupHead } from "@/components/GroupHead";
import { Ledger } from "@/components/Ledger";
import { PageShell } from "@/components/PageShell";
import { PipelineBand } from "@/components/PipelineBand";

export const metadata: Metadata = {
  title: "The work, Mark Justine J. Mauricio",
  description:
    "Nine builds by Mark Justine J. Mauricio: web applications, AI automation prototypes, and an academic capstone, with the status of each project.",
};

export default function WorkPage() {
  const featured = projects[0];
  return (
    <PageShell active="work">
      <header className="page-head">
        <div className="container">
          <p className="eyebrow">
            <span>catalogue</span>2026
          </p>
          <h1 className="chrome">the work</h1>
          <p className="lead">
            Nine builds in three groups. Every row opens a case file.
          </p>
        </div>
      </header>
      <div className="container page-ledger">
        <Ledger />
      </div>

      <section
        className="work-group work-group--featured"
        aria-labelledby="featured-title"
      >
        <div className="container">
          <GroupHead
            number={featured.number}
            group={featured.group}
            label="build"
            id="featured-title"
            title="this site"
            line="A web build, shown first: the portfolio you are reading."
          />
          <DossierList projects={[featured]} />
        </div>
      </section>

      {groups.map((group, groupIndex) => {
        const isAcademic = group.key === "academic";
        const isAi = group.key === "ai";
        const groupProjects = projects.filter(
          (project) =>
            project.group === group.key && project.slug !== featured.slug,
        );
        const title = isAcademic
          ? "one capstone, built as a team."
          : group.label;
        const line = isAcademic
          ? "An online store, a point of sale, and the inventory behind both."
          : group.line;

        return (
          <section
            className={`work-group${isAcademic ? " work-group--academic" : ""}`}
            id={group.key}
            aria-labelledby={`${group.key}-title`}
            key={group.key}
          >
            <div className="container">
              <GroupHead
                number={String(groupIndex + 2).padStart(2, "0")}
                group={group.key}
                title={title}
                line={line}
              />
              {isAi ? (
                <>
                  <p className="group-subhead">
                    <span>a</span>standalone assistant
                  </p>
                  <DossierList
                    projects={groupProjects.filter(
                      (project) => !project.pipeline,
                    )}
                  />
                  <PipelineBand />
                  <p className="group-subhead">
                    <span>b</span>pipeline components
                  </p>
                  <DossierList
                    projects={groupProjects.filter(
                      (project) => project.pipeline,
                    )}
                  />
                </>
              ) : (
                <DossierList projects={groupProjects} />
              )}
            </div>
          </section>
        );
      })}

      <section className="work-close" aria-label="Work status">
        <div className="container work-close__inner">
          <p className="work-close__statement">
            Every row says what the build is. The case says what it is not.
          </p>
          <Link className="btn btn--primary" href="/contact">
            start a conversation
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
