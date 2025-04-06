import About from "@/components/about-section/about";
import Certifications from "@/components/certifications-section/certifications";
import SectionDivider from "@/components/common/section-divider";
import ThemeSwitch from "@/components/common/theme-switch";
import Contact from "@/components/contact-section/contact";
import Experience from "@/components/experience-section/experience";
import Hero from "@/components/hero-section/hero";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Projects from "@/components/projects-section/projects";
import Skills from "@/components/skills-section/skills";
import Testimonial from "@/components/testimonial-section/testimonial";
import { SessionProvider } from "next-auth/react";

export default function Home() {
	return (
		<SessionProvider>
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
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
