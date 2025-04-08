"use client";

import SectionHeading from "@/components/common/section-heading";
import SkillCard from "@/components/skills-section/skillCard";
import "@/components/skills-section/skills.css";
import { useSectionInView } from "@/hooks/useSectionInView";
import { skillsData } from "@/lib/data";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section id="skills" ref={ref} className="mb-28 sm:mb-40 scroll-mt-28">
      <SectionHeading>My Skills</SectionHeading>
      <div className="skills__container w-[85vw] md:w-auto">
        <SkillCard title="Front-End" skills={skillsData[0]} />
        <SkillCard title="Back-End" skills={skillsData[1]} />
        <SkillCard title="Tools & Technologies" skills={skillsData[2]} />
      </div>
    </section>
  );
}
