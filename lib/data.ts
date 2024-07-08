import React from "react";
import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import homeoKart from "@/public/homeoKart.png";
import nextFoodies from "@/public/nextFoodies.png";
import nextWorldBlogs from "@/public/nextWorldBlogs.png";

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
		title: "HomeoKart",
		description:
			"HomeoKart is an E-commerce web application where users can buy medical supplies and can also book an appointment and consult a doctor with an integrated video calling feature.",
		tags: [
			"Node.JS",
			"Express.js",
			"MongoDB",
			"Mongoose",
			"EJS",
			"OAuth 2.0",
			"HTML CSS",
			"RazorPay",
			"Socket.io"
		],
		imageUrl: homeoKart,
		demoURL: "https://homeokart.onrender.com/",
		sourceCodeURL: "https://github.com/Homeokart007/Homeokart"
	},
	{
		title: "NextFoodies",
		description:
			"SB'S FOODZONE is a platform for foodies to share their favorite recipes with the world. It is a place to discover new dishes, and to connect with other food lovers.",
		tags: ["React", "Next.js 14", "MongoDB", "REST API", "SEO"],
		imageUrl: nextFoodies,
		demoURL: "http://nextfoodies.vercel.app/",
		sourceCodeURL: "https://github.com/SmitBhamwala/next-app-router-foodies"
	},
	{
		title: "NextWorldBlogs",
		description:
			"An application for blogs related to web development. It is deployed on Vercel.",
		tags: ["React", "Next.js 13", "MongoDB"],
		imageUrl: nextWorldBlogs,
		demoURL: "https://nextworldblogs.vercel.app/",
		sourceCodeURL: "https://github.com/SmitBhamwala/nextjs-blogs"
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
