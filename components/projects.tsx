"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import Project from "@/components/project";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Lottie from "lottie-react";
import animation from "@/public/lottie/study.json";

export default function Projects() {
	const { ref } = useSectionInView("Projects", 0.25);

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animation,
		style: {
			width: "60%"
		}
	};

	return (
		<section ref={ref} id="projects" className="scroll-mt-28 mb-28">
			<SectionHeading>My projects</SectionHeading>
			{/* <Lottie {...defaultOptions} /> */}
			<div>
				{projectsData.map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
}
