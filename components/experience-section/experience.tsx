"use client";

import SectionHeading from "@/components/common/section-heading";
import { useTheme } from "@/context/theme-context";
import { useSectionInView } from "@/hooks/useSectionInView";
import { experiencesData } from "@/lib/data";
import { ExperienceElementProps } from "@/lib/types";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperienceModal from "./experience-modal";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.3);
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>
      <div className="block lg:hidden">
        <VerticalTimeline lineColor="" animate={false}>
          {experiencesData.map((item, index) => (
            <ExperienceElement key={index} theme={theme} item={item} />
          ))}
        </VerticalTimeline>
      </div>
      <div className="hidden lg:block">
        <VerticalTimeline lineColor="" animate className="w-[100%]!">
          {experiencesData.map((item, index) => (
            <ExperienceElement key={index} theme={theme} item={item} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

const ExperienceElement = ({ theme, item }: ExperienceElementProps) => {
  const [isExperienceModalOpen, setExperienceModalOpen] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.7
  });

  return (
    <VerticalTimelineElement
      visible={inView}
      contentStyle={{
        background: theme === "light" ? "#fff" : "#1f2937 ",
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
        border: "none",
        borderRadius: "1rem",
        textAlign: "left",
        padding: "1rem 1rem 0.5rem"
      }}
      contentArrowStyle={{
        borderRight:
          theme === "light"
            ? "0.4rem solid #9ca3af"
            : "0.4rem solid rgba(255, 255, 255, 0.5)"
      }}
      // date={width <= 1170 ? "" : item.date}
      date={item.date}
      icon={item.icon}
      iconStyle={{
        background: theme === "light" ? "white" : "rgb(17 24 39 / 1)",
        fontSize: "1.5rem",
        boxShadow:
          theme === "light"
            ? "0 0 0 4px #fff, inset 0 2px 0 rgba(0, 0, 0, .08), 0 3px 0 4px rgba(0, 0, 0, .05)"
            : "0 0 0 4px rgb(17 24 39 / 1), inset 0 2px 0 rgba(0, 0, 0, .3), 0 3px 0 4px rgba(0, 0, 0, .3)"
      }}>
      <div
        ref={ref}
        className="pt-0 lg:pt-[0.3rem] mb-0 lg:mb-[1rem] px-0 xl:px-[1rem]">
        <h3 className="font-semibold capitalize">{item.title}</h3>
        {/* {width <= 1170 ? (
						<>
							<p className="font-normal m-0!">{item.location}</p>
							<p className="m-0!">{item.date}</p>
						</>
					) : ( */}
        <p className="font-normal m-0!">{item.location}</p>
        {/* )} */}

        {/* <ul className="mt-3! font-normal! text-gray-700 dark:text-white/75">
					{item.description.map((task, index) => (
						<li key={index} className="list-disc">
							{task}
						</li>
					))}
				</ul> */}
        <p className="mt-3! font-normal! text-gray-700 dark:text-white/75">
          {item.description[0]}
        </p>
        {item.description[1] ? (
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center">
            <p
              onClick={() => setExperienceModalOpen(true)}
              className="!font-normal !text-sm text-gray-700 dark:text-white/75 w-fit flex justify-start items-center 
              !mt-3 px-3 py-2 rounded-xl shadow-lg shadow-black/[0.15] backdrop-blur-[0.5rem] active:scale-95 
              bg-[#f3f4f6] dark:bg-white/5 cursor-pointer">
              View More
              <span className="ml-2">
                <FaEye />
              </span>
            </p>
            {isExperienceModalOpen ? (
              <div>
                <ExperienceModal
                  item={item}
                  setExperienceModalOpen={setExperienceModalOpen}
                />
              </div>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </VerticalTimelineElement>
  );
};
