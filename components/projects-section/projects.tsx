"use client";

import React from "react";
import SectionHeading from "@/components/common/section-heading";
import ProjectNew from "./project-new";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/hooks/useSectionInView";
import "@/components/projects-section/projects.css";

export default function Projects() {
	const { ref } = useSectionInView("Projects", 0.25);

	return (
		<section ref={ref} id="projects" className="scroll-mt-28 mb-28 sm:mb-40">
			<SectionHeading>My Projects</SectionHeading>
			<div className="projects__container">
				{projectsData.map((project, index) => (
					<ProjectNew key={index} {...project} />
				))}
			</div>
		</section>
	);
}
