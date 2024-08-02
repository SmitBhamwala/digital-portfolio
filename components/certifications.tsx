"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import {
	VerticalTimeline,
	VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaEye } from "react-icons/fa";
import SectionHeading from "@/components/section-heading";
import { useTheme } from "@/context/theme-context";
import { certificationsData } from "@/lib/data";
import { CertificationsElementProps } from "@/lib/types";
import { useSectionInView } from "@/lib/hooks";
import { ImNewTab } from "react-icons/im";

export default function Certificate() {
	const { ref } = useSectionInView("Courses", 0.3);
	const { theme } = useTheme();

	return (
		<section
			id="certifications"
			ref={ref}
			className="w-fit lg:w-full scroll-mt-28 mb-28 sm:mb-40">
			<SectionHeading>Certifications</SectionHeading>
			<div className="block xl:hidden">
				<VerticalTimeline lineColor="" animate={false}>
					{certificationsData.map((course, index) => (
						<CourseElement key={index} theme={theme} course={course} />
					))}
				</VerticalTimeline>
			</div>
			<div className="hidden xl:block">
				<VerticalTimeline lineColor="" animate>
					{certificationsData.map((course, index) => (
						<CourseElement key={index} theme={theme} course={course} />
					))}
				</VerticalTimeline>
			</div>
		</section>
	);
}

const CourseElement = ({ theme, course }: CertificationsElementProps) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.7
	});

	return (
		<VerticalTimelineElement
			visible={inView}
			contentStyle={{
				background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
				boxShadow: "none",
				border: "1px solid rgba(0, 0, 0, 0.05)",
				borderRadius: "1rem",
				textAlign: "left",
				padding: 0
			}}
			contentArrowStyle={{
				borderRight:
					theme === "light"
						? "0.4rem solid #9ca3af"
						: "0.4rem solid rgba(255, 255, 255, 0.5)"
			}}
			icon={course.icon}
			iconStyle={{
				background: theme === "light" ? "white" : "rgb(17 24 39 / 1)",
				fontSize: "1.5rem",
				boxShadow:
					theme === "light"
						? "0 0 0 4px #fff, inset 0 2px 0 rgba(0, 0, 0, .08), 0 3px 0 4px rgba(0, 0, 0, .05)"
						: "0 0 0 4px rgb(17 24 39 / 1), inset 0 2px 0 rgba(0, 0, 0, .3), 0 3px 0 4px rgba(0, 0, 0, .3)"
			}}>
			<div ref={ref} className="py-[1.3rem] px-[2rem]">
				<h3 className="font-medium text-lg mb-4">{course.title}</h3>
				<p className="!font-normal !text-sm !m-0">by {course.tutor}</p>
				<p className="!font-normal !text-sm !m-0">
					Duration: {course.duration}
				</p>
				<p className="!font-normal !text-sm !m-0">
					Completion date: {course.date}
				</p>
				<div className="flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center">
					<Link
						scroll={false}
						href={`/course/${course.id}`}
						className="!font-normal text-gray-700 dark:text-white/75 w-fit flex justify-start items-center 
          !mt-3 px-4 py-3 rounded-xl shadow-lg shadow-black/[0.15] backdrop-blur-[0.5rem] active:scale-95 
          borderBlack bg-[#f3f4f6] dark:bg-[rgb(255, 255, 255)] dark:bg-opacity-5">
						View More
						<div className="ml-2">
							<FaEye />
						</div>
					</Link>
					<Link
						href={`/Certifications/${course.certIMG}`}
						target="_blank"
						className="!font-normal text-gray-700 dark:text-white/75 w-fit flex justify-start items-center 
          !mt-3 px-4 py-3 rounded-xl shadow-lg shadow-black/[0.15] backdrop-blur-[0.5rem] active:scale-95 
          borderBlack bg-[#f3f4f6] dark:bg-[rgb(255, 255, 255)] dark:bg-opacity-5">
						Certificate
						<div className="ml-2">
							<ImNewTab />
						</div>
					</Link>
				</div>
			</div>
		</VerticalTimelineElement>
	);
};
