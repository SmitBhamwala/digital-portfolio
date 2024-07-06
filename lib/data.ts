import React from "react";
import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
	{
		name: "Home",
		hash: "#home"
	},
	{
		name: "About",
		hash: "#about"
	},
	{
		name: "Projects",
		hash: "#projects"
	},
	{
		name: "Skills",
		hash: "#skills"
	},
	{
		name: "Experience",
		hash: "#experience"
	},
	{
		name: "Contact",
		hash: "#contact"
	}
] as const;

export const experiencesData = [
	{
		title: "Bachelor of Technology (B.Tech)",
		location: "Parul University, Gujarat",
		description: [
			"Pursued B.Tech in Computer Science & Engineering from Parul University, Vadodara."
		],
		icon: React.createElement(LuGraduationCap),
		date: "2018 - 2022"
	},
	{
		title: "Front-End Web Developer (Intern)",
		location: "RAB Stacks LLP",
		description: [
			"Developed fully functional Front-End of a website using ReactJS from the given FIGMA designs and integrated it with REST API."
		],
		icon: React.createElement(CgWorkAlt),
		date: "08/2021 - 09/2021"
	},
	{
		title: "Software Developer",
		location: "Capgemini",
		description: [
			"Worked for 2 clients in Medical domain",
			"Worked in Linux environment and on embedded devices.",
			"Worked on C/C++ project code and solved issues.",
			"Installation of ESXi Server on VMware (On-premises setup for customer).",
			"Performed Formal run of protocols.",
			"Used Azure DevOps to raise issues, create Test cases and their results."
		],
		icon: React.createElement(CgWorkAlt),
		date: "07/2022 - present"
	}
];

export const projectsData = [
	{
		title: "CorpComment",
		description:
			"I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
		tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
		imageUrl: corpcommentImg
	},
	{
		title: "rmtDev",
		description:
			"Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
		tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
		imageUrl: rmtdevImg
	},
	{
		title: "Word Analytics",
		description:
			"A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
		tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
		imageUrl: wordanalyticsImg
	}
] as const;

export const skillsData = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Auth.JS",
	"Node.js",
	"Express",
	"EJS",
	"Git",
	"GitHub",
	"Tailwind",
	"Prisma",
	"MongoDB",
	"Python",
	"Flask",
	"Django",
	"Framer Motion",
	"C++"
] as const;
