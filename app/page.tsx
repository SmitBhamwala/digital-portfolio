"use client";
import { SessionProvider } from "next-auth/react";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/hero-section/hero"));
const SectionDivider = dynamic(
  () => import("@/components/common/section-divider")
);
const Header = dynamic(() => import("@/components/layout/header"));
const Footer = dynamic(() => import("@/components/layout/footer"));
const ThemeSwitch = dynamic(() => import("@/components/common/theme-switch"));

const About = dynamic(() => import("@/components/about-section/about"));
const Skills = dynamic(() => import("@/components/skills-section/skills"));
const Projects = dynamic(
  () => import("@/components/projects-section/projects")
);
const Experience = dynamic(
  () => import("@/components/experience-section/experience")
);
const Certifications = dynamic(
  () => import("@/components/certifications-section/certifications")
);
const Testimonial = dynamic(
  () => import("@/components/testimonial-section/testimonial")
);
const Contact = dynamic(() => import("@/components/contact-section/contact"));

export default function Home() {
  return (
    <SessionProvider>
      {/* Gradient 1 */}
      <div className="pointer-events-none absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] sm:w-[68.75rem] rounded-full blur-[10rem] bg-[#fbe2e3] dark:bg-[#946263] will-change-transform" />

      {/* Gradient 2 */}
      <div className="pointer-events-none absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] rounded-full blur-[10rem] bg-[#dbd7fb] dark:bg-[#676394] will-change-transform" />

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
