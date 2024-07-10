import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import ThemeSwitch from "@/components/theme-switch";

export default function Home() {
	return (
		<main className="flex flex-col items-center px-5 m-auto w-[100%] md:max-w-[800px] lg:max-w-[968px]">
			<Header />
			<Intro />
			<SectionDivider />
			<About />
			<Skills />
			<Projects />
			<Experience />
			<Contact />
			<Footer />
			<ThemeSwitch />
		</main>
	);
}
