import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
	title: "Smit Bhamwala | Personal Digital Portfolio",
	description:
		"Smit Bhamwala is a passionate Full-Stack Web Developer specializing in developing responsive, intuitive, and robust web applications from concept to deployment.",
	keywords: [
		"Personal",
		"Digital",
		"Portfolio",
		"Smit",
		"Bhamwala",
		"Bharuch",
		"Web",
		"Developer",
		"Web Developer",
		"Gujarat",
		"India",
		"Experienced",
		"Entry level",
		"Job",
		"Naukri",
		"Professional",
		"Website",
		"Web app",
		"Web Application",
		"Software",
		"NextJS",
		"ReactJS",
		"NodeJS",
		"Front",
		"End",
		"Front end",
		"Back end",
		"Back",
		"Full",
		"Stack",
		"Full stack",
		"MERN",
		"MongoDB",
		"ExpressJS",
		"HTML",
		"CSS",
		"JavaScript",
		"Erlang",
		"EJS",
		"SQL",
		"Collaborator",
		"Collaboration",
		"Git",
		"Github",
		"Dynamic",
		"Passionate",
		"Full Stack Web Developer",
		"dedicated",
		"user-centric",
		"innovative",
		"design",
		"robust",
		"robust back-end",
		"functionality",
		"UI/UX",
		"UI",
		"UX",
		"REST",
		"API",
		"REST API"
	]
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="!scroll-smooth">
			<head>
				<meta
					name="google-site-verification"
					content="Ko9LxTYV9-KxCx0Rh82oVtryvBAAfEboWroQyzysoPo"
				/>
				<link rel="canonical" href="https://smitbhamwala.vercel.app" />
			</head>
			<body
				className={`${poppins.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
				<div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
				<div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
				<ThemeContextProvider>
					<ActiveSectionContextProvider>
						{children}
						<Toaster position="bottom-center" />
					</ActiveSectionContextProvider>
				</ThemeContextProvider>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
