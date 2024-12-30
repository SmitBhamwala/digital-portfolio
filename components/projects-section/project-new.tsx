"use client";

import Link from "next/link";
// import Carousel from "@/components/project-image-carousel";
import { projectsData } from "@/lib/data";
// import { SwipeCarousel } from "./project-carousel-new";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

type ProjectProps = (typeof projectsData)[number];

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
		slidesToSlide: 1
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1,
		slidesToSlide: 1
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
		slidesToSlide: 1
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		slidesToSlide: 1
	}
};

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
			{/* <Carousel slides={imageUrl} />
			<SwipeCarousel /> */}
			{/* <div className="carousel-container w-[28rem] h-[16rem]"> */}
			<Carousel
				additionalTransfrom={0}
				arrows
				autoPlaySpeed={3000}
				centerMode={false}
				containerClass="container-with-dots"
				dotListClass=""
				draggable
				focusOnSelect={false}
				infinite={false}
				itemClass=""
				keyBoardControl
				minimumTouchDrag={80}
				pauseOnHover
				renderArrowsWhenDisabled={false}
				renderButtonGroupOutside={false}
				renderDotsOutside={false}
				responsive={{
					desktop: {
						breakpoint: {
							max: 3000,
							min: 1024
						},
						items: 1,
						partialVisibilityGutter: 40
					},
					mobile: {
						breakpoint: {
							max: 464,
							min: 0
						},
						items: 1,
						partialVisibilityGutter: 30
					},
					tablet: {
						breakpoint: {
							max: 1024,
							min: 464
						},
						items: 1,
						partialVisibilityGutter: 30
					}
				}}
				rewind={false}
				rewindWithAnimation={false}
				rtl={false}
				shouldResetAutoplay
				showDots={true}
				sliderClass=""
				slidesToSlide={1}
				swipeable
				className="w-[20rem] md:w-[28rem] h-[16rem]"
				removeArrowOnDeviceType={["tablet", "mobile"]}>
				{imageUrl.map((img, index) => (
					// <div className="w-full h-[16rem] !rounded-lg">
					<Image
						key={index}
						src={img}
						width={3000}
						height={3000}
						alt="Project I worked on"
						draggable={false}
						quality={95}
						className="w-full h-[16rem] !rounded-lg object-fill cursor-grab"
					/>
					// </d/iv>
				))}
			</Carousel>
			{/* </div> */}
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
