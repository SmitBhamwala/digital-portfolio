"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "@/components/section-heading";
import {
	VerticalTimeline,
	VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useInView } from "react-intersection-observer";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
	const { ref } = useSectionInView("Experience", 0.5);
	const { theme } = useTheme();

	return (
		<section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
			<SectionHeading>My experience</SectionHeading>
			<VerticalTimeline lineColor="">
				{experiencesData.map((item, index) => (
					<ExperienceElement key={index} theme={theme} item={item} />
				))}
			</VerticalTimeline>
		</section>
	);
}

type ExperienceElementProps = {
	theme: string;
	item: {
		title: string;
		location: string;
		description: String[];
		icon: React.ReactNode;
		date: string;
	};
};

const ExperienceElement = ({ theme, item }: ExperienceElementProps) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.7
	});

	// const [width, setWidth] = useState(0);

	// useEffect(() => {
	// 	setWidth(window.innerWidth > 0 ? window.innerWidth : screen.width);
	// }, [width]);

	return (
		<React.Fragment>
			<VerticalTimelineElement
				visible={inView}
				contentStyle={{
					background:
						theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
					boxShadow: "none",
					border: "1px solid rgba(0, 0, 0, 0.05)",
					textAlign: "left",
					padding: "1.3rem 2rem"
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
				<div ref={ref}>
					<h3 className="font-semibold capitalize">{item.title}</h3>
					{/* {width <= 1170 ? (
						<>
							<p className="font-normal !m-0">{item.location}</p>
							<p className="!m-0">{item.date}</p>
						</>
					) : ( */}
					<p className="font-normal !m-0">{item.location}</p>
					{/* )} */}

					<ul className="!mt-3 !font-normal text-gray-700 dark:text-white/75">
						{item.description.map((task, index) => (
							<li key={index} className="list-disc">
								{task}
							</li>
						))}
					</ul>
				</div>
			</VerticalTimelineElement>
		</React.Fragment>
	);
};
