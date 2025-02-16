'use client'

import { ProjectDetail } from "@/components/ProjectDetail";
import { projects, Project } from "@/components/Projects";
import { useParams } from "next/navigation";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p: Project) => 
    p.title.toLowerCase().replace(/\s+/g, '-') === slug
  );

  if (!project) return null;

  return <ProjectDetail project={project} />;
}
