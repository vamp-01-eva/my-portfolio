import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/content/projects";
import { groups } from "@/content/site";
import { DossierList } from "@/components/DossierList";
import { GroupHead } from "@/components/GroupHead";
import { Ledger } from "@/components/Ledger";
import { PageShell } from "@/components/PageShell";
import { PipelineBand } from "@/components/PipelineBand";
import styles from "./work.module.css";

export const metadata: Metadata = {
  title: "The work, Mark Justine J. Mauricio",
  description:
    "Nine builds by Mark Justine J. Mauricio: web applications, AI automation prototypes, and an academic capstone, with the status of each project.",
};

export default function WorkPage() {
  const featured = projects[0];
  return (
    <PageShell active="work">
      <header className={styles.head}>
        <div className="container">
          <p className="eyebrow">
            <span>catalogue</span> 2026
          </p>
          <h1 className="chrome">the work</h1>
          <p className={`lead ${styles.lead}`}>
            Nine builds in three groups. Every row opens a case file.
          </p>
        </div>
      </header>
      <div className={`container ${styles.ledgerWrap}`}>
        <Ledger />
      </div>

      <section
        className={styles.featured}
        aria-labelledby="featured-title"
      >
        <div className="container">
          <GroupHead
            variant="title"
            number={featured.number}
            group={featured.group}
            label="build"
            id="featured-title"
            title="this site"
            line="A web build, shown first: the portfolio you are reading."
          />
          <DossierList projects={[featured]} featured />
        </div>
      </section>

      {groups.map((group, groupIndex) => {
        const isAi = group.key === "ai";
        const groupProjects = projects.filter(
          (project) =>
            project.group === group.key && project.slug !== featured.slug,
        );

        return (
          <section
            className={styles.group}
            id={group.key}
            aria-labelledby={`${group.key}-title`}
            key={group.key}
          >
            <div className={`container ${styles.groupGrid}`}>
              <div className={styles.rail}>
                <GroupHead
                  number={String(groupIndex + 2).padStart(2, "0")}
                  group={group.key}
                  count={groupProjects.length}
                  title={group.label}
                  line={group.line}
                />
              </div>
              <div className={styles.register}>
                {isAi ? (
                  <>
                    <p className={styles.subhead}>
                      <span className={styles.subheadLetter}>a</span>{" "}
                      standalone assistant
                    </p>
                    <DossierList
                      projects={groupProjects.filter(
                        (project) => !project.pipeline,
                      )}
                    />
                    <PipelineBand />
                    <p className={styles.subhead}>
                      <span className={styles.subheadLetter}>b</span>{" "}
                      pipeline components
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
            </div>
          </section>
        );
      })}

      <section className={styles.close} aria-label="Work status">
        <div className={`container ${styles.closeInner}`}>
          <p className={styles.closeStatement}>
            Every row says what the build is. The case says what it is not.
          </p>
          <Link className={`btn btn--primary ${styles.closeAction}`} href="/contact">
            start a conversation
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
