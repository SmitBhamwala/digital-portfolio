import "@/components/skills-section/skills.css";
import { SkillCardType } from "@/lib/types";
import Image from "next/image";

export default function SkillCard({ title, skills }: SkillCardType) {
  return (
    <div className="rounded-2xl shadow-md bg-white dark:bg-gray-800 p-6">
      <h3 className="text-center text-xl mb-8 font-medium text-gray-800 dark:text-white/80">
        {title}
      </h3>
      <div className="skills__group">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex justify-start items-center gap-2 w-[100%]">
            <div className="text-[15px] text-gray-800 dark:text-white/80">
              <Image
                alt={`${skill.name} logo`}
                src={`/svg/skills/${skill.icon}.svg`}
                height="16"
                width="16"
                quality={100}
                loading="lazy"
              />
            </div>
            <h4
              className="font-normal text-[1rem] lg:text-[0.87rem] text-gray-800 dark:text-white/80"
              key={index}>
              {skill.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}
