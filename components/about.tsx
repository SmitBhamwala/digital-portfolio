"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
	const { ref } = useSectionInView("About");

	return (
		<motion.section
			ref={ref}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about">
			<SectionHeading>About me</SectionHeading>
			<p className="mb-3">
				While pursuing the{" "}
				<span className="font-medium">Computer Science & Engineering</span>{" "}
				degree, I decided to upskill my programming skills. I enrolled in an
				Udemy course and learned{" "}
				<span className="font-medium">full-stack web development</span>. My
				favorite part of programming is the problem-solving aspect. I love the
				feeling of finally figuring out a solution to a problem. My core stack
				is{" "}
				<span className="font-medium">
					React, Next.js, Node.js, ExpressJS and MongoDB
				</span>
				. I am also familiar with TypeScript and Prisma. I am always looking to
				learn new technologies. I am currently looking for a{" "}
				<span className="font-medium">full-time position</span> as a software
				developer.
			</p>

			<p>
				When I&apos;m not coding, I enjoy playing video games and watching
				movies. I also enjoy{" "}
				<span className="font-medium">learning new things</span>. I am currently
				learning about{" "}
				<span className="font-medium">
					Search Engine Optimization(SEO) techniques
				</span>
				.
			</p>
		</motion.section>
	);
}
