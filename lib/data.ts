import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

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
		name: "Skills",
		hash: "#skills"
	},
	{
		name: "Projects",
		hash: "#projects"
	},
	{
		name: "Experience",
		hash: "#experience"
	},
	{
		name: "Contact",
		hash: "#contact"
	}
	// {
	// 	name: "Certifications",
	// 	hash: "#certifications"
	// },
	// {
	// 	name: "Testimonial",
	// 	hash: "#testimonial"
	// }
];

export const experiencesData = [
	{
		title: "Senior Software Developer",
		location: "Capgemini",
		description: [
			"Achieved GEM (Going the Extra Mile) award for consistently exceeding project goals through innovative solutions.",
			"Collaborated with 3 healthcare clients to enhance patient data management systems and heart device code.",
			"Upgraded medical device code from Angular v7 to v18, enhancing security and improving application performance by 30%.",
			"Debugged and resolved 10+ critical issues in two C/C++ projects to address memory exceptions and other critical errors.",
			"Conducted unit testing on C++ project with Google Test, increasing code coverage from 60% to 100%."
		],
		icon: React.createElement(CgWorkAlt),
		date: "07/2022 - present"
	},
	{
		title: "Front-End Web Developer (Intern)",
		location: "RAB Stacks LLP",
		description: [
			"Developed front end of a website using React, translating 6+ Figma designs into responsive components.",
			"Secured a 100% project completion rate by fostering a collaborative team environment.",
			"Streamlined deployment with CI/CD pipelines using GitHub, reducing deployment time by 60%."
		],
		icon: React.createElement(CgWorkAlt),
		date: "08/2021 - 09/2021"
	},
	{
		title: "Bachelor of Technology (B.Tech)",
		location: "Parul University, Gujarat",
		description: [
			"Pursued B.Tech in Computer Science & Engineering with a CGPA of 8.07/10."
		],
		icon: React.createElement(LuGraduationCap),
		date: "2018 - 2022"
	}
];

export const certificationsData = [
	{
		id: 1,
		title: "Next.js 14 & React - The Complete Guide",
		tutor: "Maximilian Schwarzmüller (Udemy)",
		duration: "40.5hrs",
		description: [
			"React: React fundamentals, custom hooks and React server components (RSC).",
			"Pages router, App router, Server-Side Rendering(SSR), Server actions",
			"Parallel and Intercepting routes, Partial prerendering, SEO",
			"Implementing RESTful APIs with client-side and server-side data fetching from MongoDB",
			"Authentication🔐: Setting up authentication mechanisms using NextAuth.js and JWT.",
			"Caching and Performance Optimization📈",
			"Deployment: Deploying Next.js applications to platforms like Vercel for seamless CI/CD."
		],
		certIMG: "UC-1af9a041-8a7c-43b0-a891-bcba6b934194.jpg",
		certificateURL:
			"https://www.udemy.com/certificate/UC-1af9a041-8a7c-43b0-a891-bcba6b934194/",
		icon: React.createElement(LuGraduationCap),
		date: "24/06/2024"
	},
	{
		id: 2,
		title: "Generative AI for Everyone",
		tutor: "Andrew Ng, DeepLearning.AI (Coursera)",
		duration: "5hrs",
		description: [
			"Large Language Models (LLM)",
			"Using Generative AI in software applications",
			"Retrieval Augmented Generation (RAG)",
			"Fine-tuning and Pretraining an LLM",
			"Instruction tuning using Reinforcement Learning from Human Feedback (RLHF)",
			"Artificial General Intelligence"
		],
		certIMG: "Coursera-M54M6H9BA43W.jpg",
		certificateURL:
			"https://www.coursera.org/account/accomplishments/verify/M54M6H9BA43W",
		icon: React.createElement(LuGraduationCap),
		date: "24/03/2024"
	},
	{
		id: 3,
		title: "The Complete 2024 Web Development Bootcamp",
		tutor: "Dr. Angela Yu (Udemy)",
		duration: "62hrs",
		description: [
			"Front-End: HTML5, CSS3, Bootstrap, JavaScript, jQuery, DOM Manipulation, React",
			"Back-End: Node.js, Express.js, EJS, RESTful API and CI/CD with Git and GitHub",
			"Database: Mongoose, MongoDB, PostgreSQL"
		],
		certIMG: "UC-440bad2d-9fda-4b09-b8e5-4924440ad105.jpg",
		certificateURL:
			"https://www.udemy.com/certificate/UC-440bad2d-9fda-4b09-b8e5-4924440ad105/",
		icon: React.createElement(LuGraduationCap),
		date: "11/09/2021"
	}
];

export const projectsData = [
	{
		title: "HomeoKart",
		description:
			"An E-commerce application for medical supply purchases, doctor appointment bookings and virtual consultations.",
		tags: [
			"Node.JS",
			"Express.js",
			"MongoDB",
			"Mongoose",
			"RESTful API",
			"EJS",
			"CSS",
			"OAuth 2.0",
			"RazorPay"
		],
		imageUrl: ["/homeoKart.png", "/homeoKart-1.png"],
		demoURL: "https://homeokart.onrender.com/",
		sourceCodeURL: "https://github.com/Homeokart007/Homeokart"
	},
	{
		title: "NextFoodies",
		description:
			"A platform for foodies to share their favorite recipes with the world. People can discover new dishes, and connect with other food lovers.",
		tags: ["React", "Next.js 14", "MongoDB", "REST API", "SEO"],
		imageUrl: ["/nextFoodies.png", "/nextFoodies-1.png"],
		demoURL: "http://nextfoodies.vercel.app/",
		sourceCodeURL: "https://github.com/SmitBhamwala/next-app-router-foodies"
	}
	// {
	// 	title: "NextWorldBlogs",
	// 	description:
	// 		"An application for blogs related to web development. It is deployed on Vercel.",
	// 	tags: ["React", "Next.js 13", "MongoDB"],
	// 	imageUrl: ["/nextWorldBlogs.png", "/nextWorldBlogs-1.png"],
	// 	demoURL: "https://nextworldblogs.vercel.app/",
	// 	sourceCodeURL: "https://github.com/SmitBhamwala/nextjs-blogs"
	// }
];

export const skillsData = [
	[
		"HTML5",
		// "CSS",
		// "Bootstrap",
		"Tailwind",
		"JavaScript",
		"TypeScript",
		"React",
		"Next.js",
		"Angular"
		// "jQuery"
	],
	[
		"Node.js",
		"Express",
		"RESTful API",
		"EJS",
		"Prisma",
		"MongoDB",
		"Python",
		"Flask",
		// "Django",
		// "AI/ML",
		// "ChatGPT",
		"SQL",
		// "Auth.js",
		"C++"
	],
	[
		"AWS",
		"VS Code",
		"Postman",
		"Git",
		"GitHub",
		"Visual Studio",
		"Azure DevOps"
	]
];
