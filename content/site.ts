import type { ProjectGroup, Workflow } from "./projects";

export const SITE = {
  name: "Mark Justine J. Mauricio",
  shortName: "mark mauricio",
  email: "markjustinemau@gmail.com",
  phone: "+63 969 082 9260",
  phoneHref: "+639690829260",
  location: "Antipolo, Philippines",
  resume: "/MAURICIO_RESUME.pdf",
  resumeDownload: "Mark-Justine-Mauricio-Resume.pdf",
} as const;

export interface Group {
  key: ProjectGroup;
  label: string;
  line: string;
}

export const groups: Group[] = [
  {
    key: "ai",
    label: "ai automation",
    line: "Four prototypes: one standalone assistant, one connected shorts pipeline.",
  },
  {
    key: "academic",
    label: "academic",
    line: "The Soletisfaction capstone.",
  },
  {
    key: "web",
    label: "web applications",
    line: "Internal tools built during the DepEd ICT internship.",
  },
];

export interface PipelineStep {
  slug: string;
  label: string;
  note: string;
}

export const pipelineSteps: PipelineStep[] = [
  { slug: "youtube-clipper", label: "clipper", note: "cut the first set" },
  { slug: "youtube-reclipper", label: "reclipper", note: "cut a new set" },
  { slug: "local-video-captioner", label: "captioner", note: "add captions" },
];

export const pipelineRoute: Workflow = {
  title: "The shorts pipeline",
  caption:
    "The clipper and reclipper output caption-free clips; editing happens before the captioner burns captions.",
  nodes: [
    { label: "source video", note: "youtube or saved file" },
    { label: "clipper", note: "first cut" },
    { label: "reclipper", note: "new settings" },
    { label: "edit", note: "outside the tools" },
    { label: "captioner", note: "styled captions", accent: true },
    { label: "publish", note: "finished short" },
  ],
};

export interface CaseSection {
  id: string;
  label: string;
}

export const caseSections: CaseSection[] = [
  { id: "overview", label: "project overview" },
  { id: "problem", label: "problem statement" },
  { id: "objectives", label: "objectives" },
  { id: "role", label: "my role and contributions" },
  { id: "technologies", label: "technologies used" },
  { id: "features", label: "main features" },
  { id: "workflow", label: "workflow and system architecture" },
  { id: "screens", label: "screens and demonstrations" },
  { id: "challenges", label: "challenges and solutions" },
  { id: "status", label: "project status" },
];
