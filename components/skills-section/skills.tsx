"use client";

import SectionHeading from "@/components/common/section-heading";
import SkillCard from "@/components/skills-section/skillCard";
import { useSectionInView } from "@/hooks/useSectionInView";
import { skillsData } from "@/lib/data";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 sm:mb-40 scroll-mt-28 w-full">
      <SectionHeading>My Skills</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <SkillCard title="Front-End" skills={skillsData[0]} />
        <SkillCard title="Back-End" skills={skillsData[1]} />
        <SkillCard title="Tools & Technologies" skills={skillsData[2]} />
      </div>
    </section>
  );
}
