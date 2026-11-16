import type { ProjectGroup, ProjectStatus } from "@/content/projects";

export type StatusKey =
  | "done"
  | "progress"
  | "internship"
  | "build"
  | "prototype"
  | "academic";

const statusMap: Record<ProjectStatus, StatusKey> = {
  completed: "done",
  "in progress": "progress",
  "internship build": "internship",
  build: "build",
  prototype: "prototype",
  "academic project": "academic",
};

export function statusKey(status: ProjectStatus): StatusKey {
  return statusMap[status] ?? "build";
}

const projectMap: Record<string, string> = {
  "portfolio-website": "sig-11",
  "time-in-out": "sig-01",
  "vehicle-booking": "sig-02",
  "contract-renewal": "sig-06",
  "barbershop-manager": "sig-07",
  "youtube-clipper": "sig-03",
  "youtube-reclipper": "sig-04",
  "local-video-captioner": "sig-05",
  soletisfaction: "sig-10",
};

export function projectSigilId(slug: string): string {
  return projectMap[slug] ?? "sig-01";
}

export function groupSigilId(group: ProjectGroup): string {
  return `group-${group}`;
}
