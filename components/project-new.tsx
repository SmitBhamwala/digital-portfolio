"use client";

import Link from "next/link";
import Carousel from "@/components/project-image-carousel";
import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number];

export default function ProjectNew({
	title,
	description,
	tags,
	imageUrl,
	demoURL,
	sourceCodeURL
}: ProjectProps) {
	return (
		<div className=" rounded-lg borderBlack shadow-xl dark:text-white bg-[#f3f4f6] dark:bg-[rgb(255, 255, 255)] dark:bg-opacity-5">
			<Carousel slides={imageUrl} />

			<div className="pt-4 px-4">
				<h3 className="text-xl text-center font-semibold text-gray-800 dark:text-white/80">
					{title}
				</h3>
				<p className="my-4 leading-relaxed text-justify text-gray-800 dark:text-white/80">
					{description}
				</p>
				<ul className="flex flex-wrap justify-center gap-2">
					{tags.map((tag, index) => (
						<li
							className="bg-black/[0.7] px-3 py-1 text-[0.7rem] tracking-wider text-white rounded-full dark:text-white/70"
							key={index}>
							{tag}
						</li>
					))}
				</ul>
				<div className="flex justify-center gap-2 text-sm my-4">
					<Link
						href={demoURL}
						target="_blank"
						className="w-fit bg-gray-900 text-white px-5 py-3 flex items-center gap-2 rounded-lg outline-none hover:bg-gray-950 active:scale-95 dark:bg-gray-500 transition">
						DEMO
					</Link>
					<Link
						href={sourceCodeURL}
						target="_blank"
						className="w-fit bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-lg outline-none hover:bg-gray-950 active:scale-95 dark:bg-gray-500 transition">
						SOURCE CODE
					</Link>
				</div>
			</div>
		</div>
	);
}
