import { SessionProvider } from "next-auth/react";
import About from "@/components/about-section/about";
import Certifications from "@/components/certifications-section/certifications";
import Contact from "@/components/contact-section/contact";
import Experience from "@/components/experience-section/experience";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Hero from "@/components/hero-section/hero";
import Projects from "@/components/projects-section/projects";
import SectionDivider from "@/components/common/section-divider";
import Skills from "@/components/skills-section/skills";
import Testimonial from "@/components/testimonial-section/testimonial";
import ThemeSwitch from "@/components/common/theme-switch";

export default function Home() {
	return (
		<SessionProvider>
			<main className="flex flex-col items-center px-5 m-auto w-[100%] md:max-w-[800px] lg:max-w-[968px]">
				<Header />
				<Hero />
				<SectionDivider />
				<About />
				<Skills />
				<Projects />
				<Experience />
				<Certifications />
				<Testimonial />
				<Contact />
				<Footer />
				<ThemeSwitch />
			</main>
		</SessionProvider>
	);
}
