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
      <header className="case-head">
        <span className="case-head__watermark chrome" aria-hidden="true">
          {project.number}
        </span>
        <span className="case-head__sigil" aria-hidden="true">
          <ProjectSigil slug={project.slug} />
        </span>
        <div className="container">
          <div className="case-head__top">
            <Link className="back-link" href="/work">
              <span aria-hidden="true">←</span> all work
            </Link>
            <StatusTag status={project.status} />
          </div>
          <p className="eyebrow">
            <span>case file</span>
            {project.number}
          </p>
          <h1>{project.title}</h1>
          <p className="lead">{project.card}</p>
          <div className="case-sheet">
            <dl>
              <div>
                <dt>category</dt>
                <dd>{project.category}</dd>
              </div>
              <div>
                <dt>year</dt>
                <dd className="num">{project.year}</dd>
              </div>
              <div>
                <dt>status</dt>
                <dd>{project.status}</dd>
              </div>
              <div>
                <dt>stack</dt>
                <dd>{project.stack.join(", ")}</dd>
              </div>
            </dl>
          </div>
        </div>
      </header>

      <div className="container case-body">
        <CaseContents />
        <article className="case-content">
          <section id="overview">
            <h2>project overview</h2>
            <p className="lead">{project.lead}</p>
            {project.overview.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>{paragraph}</p>
            ))}
            {project.pipeline ? (
              <PipelineStrip currentStep={project.pipeline.step} />
            ) : null}
          </section>

          <section id="problem">
            <h2>problem statement</h2>
            <p className="case-statement">{project.problem}</p>
          </section>

          <section id="objectives">
            <h2>objectives</h2>
            <ol
              className={`objective-list objective-list--${project.objectives.length}`}
            >
              {project.objectives.map((objective) => (
                <li key={objective}>{objective}</li>
              ))}
            </ol>
          </section>

          <section id="role">
            <h2>my role and contributions</h2>
            <dl className="role-list">
              {project.role.map((row) => (
                <div key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>{row.text}</dd>
                </div>
              ))}
            </dl>
            <p className="case-note">{project.roleNote}</p>
          </section>

          <section id="technologies">
            <h2>technologies used</h2>
            <table className="tech-table">
              <thead>
                <tr>
                  <th scope="col">group</th>
                  <th scope="col">tools</th>
                </tr>
              </thead>
              <tbody>
                {project.tech.map((row) => (
                  <tr key={row.group}>
                    <td>{row.group}</td>
                    <td>{row.items.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section id="features">
            <h2>main features</h2>
            <ol className="feature-list">
              {project.features.map((feature) => (
                <li key={feature.title}>
                  <span className="feature-list__title">{feature.title}</span>
                  <span className="feature-list__text">{feature.text}</span>
                </li>
              ))}
            </ol>
            {project.planned ? (
              <>
                <h3>planned, not implemented</h3>
                <ul className="planned-list">
                  {project.planned.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            ) : null}
          </section>

          <section id="workflow">
            <h2>workflow and system architecture</h2>
            <RouteFigure workflow={project.workflow} />
          </section>

          <section id="screens">
            <h2>screens and demonstrations</h2>
            <figure
              className={`screen-figure${
                project.screens.images ? " screen-figure--gallery" : ""
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

          <section id="challenges">
            <h2>challenges and solutions</h2>
            <table className="challenge-table">
              <thead>
                <tr>
                  <th scope="col">the constraint</th>
                  <th scope="col">the response</th>
                </tr>
              </thead>
              <tbody>
                {project.challenges.map((row) => (
                  <tr key={row.constraint}>
                    <td>{row.constraint}</td>
                    <td>{row.response}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section id="status">
            <h2>project status</h2>
            <div className="status-well">
              <span className="status-well__sigil" aria-hidden="true">
                <ProjectSigil slug={project.slug} />
              </span>
              <StatusTag status={project.status} />
              <p>{project.statusDetail}</p>
              <p className="case-note">{project.notClaimed}</p>
            </div>
          </section>

          <CaseNext next={next} />
        </article>
      </div>
    </PageShell>
  );
}
