"use client";

import SectionHeading from "@/components/common/section-heading";
import ProjectCard from "@/components/projects-section/projectCard";
import { useSectionInView } from "@/hooks/useSectionInView";
import { projectsData } from "@/lib/data";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.25);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28 sm:mb-40 w-full">
      <SectionHeading>My Projects</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
