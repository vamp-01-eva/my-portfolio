import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { bySlug, projects } from "@/content/projects";
import { CaseContents } from "@/components/CaseContents";
import { CaseNext } from "@/components/CaseNext";
import { PageShell } from "@/components/PageShell";
import { PipelineStrip } from "@/components/PipelineStrip";
import { ProjectSigil } from "@/components/SigilSprite";
import { RouteFigure } from "@/components/RouteFigure";
import { ScreenMap } from "@/components/ScreenMap";
import { ShotRail } from "@/components/ShotRail";
import { StatusTag } from "@/components/StatusTag";
import styles from "./case.module.css";

type CasePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = bySlug.get(slug);
  if (!project) return {};
  return {
    title: `${project.title}, case file`,
    description: project.summary,
  };
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const project = bySlug.get(slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <PageShell active="work">
      <header className={styles.cover}>
        <span className={`${styles.watermark} chrome`} aria-hidden="true">
          {project.number}
        </span>
        <span className={styles.sigil} aria-hidden="true">
          <ProjectSigil slug={project.slug} />
        </span>
        <div className={`container ${styles.inner}`}>
          <div className={styles.top}>
            <Link className={styles.back} href="/work">
              <span aria-hidden="true">←</span> all work
            </Link>
            <StatusTag status={project.status} />
          </div>
          <p className={`eyebrow ${styles.eyebrow}`}>
            <span>case file</span>
            {" "}
            {project.number}
          </p>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.coverLead}>{project.summary}</p>
          <div className={styles.meta}>
            <dl>
              <div>
                <dt>category</dt>
                <dd>{project.category}</dd>
              </div>
              <div>
                <dt>year</dt>
                <dd>{project.year}</dd>
              </div>
              <div>
                <dt>status</dt>
                <dd>{project.status}</dd>
              </div>
              <div className={styles.metaStack}>
                <dt>stack</dt>
                <dd>{project.stack.join(", ")}</dd>
              </div>
            </dl>
          </div>
        </div>
      </header>

      <div className={`container ${styles.body}`}>
        <CaseContents />
        <article className={styles.content}>
          <section className={styles.section} id="overview">
            <h2>project overview</h2>
            <p className={styles.lead}>{project.lead}</p>
            {project.overview.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>{paragraph}</p>
            ))}
            {project.pipeline ? (
              <PipelineStrip currentStep={project.pipeline.step} />
            ) : null}
          </section>

          <section className={styles.section} id="problem">
            <h2>problem statement</h2>
            <p className={styles.statement}>{project.problem}</p>
          </section>

          <section className={styles.section} id="objectives">
            <h2>objectives</h2>
            <ol className={styles.objectives}>
              {project.objectives.map((objective) => (
                <li key={objective}>{objective}</li>
              ))}
            </ol>
          </section>

          <section className={styles.section} id="role">
            <h2>my role and contributions</h2>
            <dl className={styles.roleList}>
              {project.role.map((row) => (
                <div key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>{row.text}</dd>
                </div>
              ))}
            </dl>
            <p className={styles.note}>{project.roleNote}</p>
          </section>

          <section className={styles.section} id="technologies">
            <h2>technologies used</h2>
            <table className={`${styles.table} ${styles.techTable}`}>
              <thead>
                <tr>
                  <th scope="col">group</th>
                  <th scope="col">tools</th>
                </tr>
              </thead>
              <tbody>
                {project.tech.map((row) => (
                  <tr key={row.group}>
                    <td data-label="group">{row.group}</td>
                    <td data-label="tools">{row.items.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className={styles.section} id="features">
            <h2>main features</h2>
            <ol className={styles.features}>
              {project.features.map((feature) => (
                <li key={feature.title}>
                  <span className={styles.featureBody}>
                    <span className={styles.featureTitle}>
                      {feature.title}
                    </span>
                    <span className={styles.featureText}>{feature.text}</span>
                  </span>
                </li>
              ))}
            </ol>
            {project.planned ? (
              <>
                <h3 className={styles.subhead}>planned, not implemented</h3>
                <ul className={styles.planned}>
                  {project.planned.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            ) : null}
          </section>

          <section className={styles.section} id="workflow">
            <h2>workflow and system architecture</h2>
            <RouteFigure workflow={project.workflow} />
          </section>

          <section className={styles.section} id="screens">
            <h2>screens and demonstrations</h2>
            <figure
              className={`${styles.screens}${
                project.screens.images ? ` ${styles.screensGallery}` : ""
              }`}
            >
              {project.screens.images ? (
                <ShotRail screens={project.screens} />
              ) : (
                <ScreenMap screens={project.screens} />
              )}
              <figcaption>{project.screens.caption}</figcaption>
            </figure>
          </section>

          <section className={styles.section} id="challenges">
            <h2>challenges and solutions</h2>
            <table className={`${styles.table} ${styles.challengeTable}`}>
              <thead>
                <tr>
                  <th scope="col">the constraint</th>
                  <th scope="col">the response</th>
                </tr>
              </thead>
              <tbody>
                {project.challenges.map((row) => (
                  <tr key={row.constraint}>
                    <td data-label="the constraint">{row.constraint}</td>
                    <td data-label="the response">{row.response}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className={styles.section} id="status">
            <h2>project status</h2>
            <div className={styles.statusWell}>
              <span className={styles.statusSigil} aria-hidden="true">
                <ProjectSigil slug={project.slug} />
              </span>
              <StatusTag status={project.status} />
              <p>{project.statusDetail}</p>
              <p className={styles.note}>{project.notClaimed}</p>
            </div>
          </section>

          <CaseNext next={next} />
        </article>
      </div>
    </PageShell>
  );
}
