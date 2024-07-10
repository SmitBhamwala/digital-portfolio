"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Typed from "typed.js";

import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

import myPic from "@/public/myPic.png";
import "./intro.css";

export default function Intro() {
	const typedRef = useRef(null);
	const { ref } = useSectionInView("Home", 0.5);
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

	useEffect(() => {
		const typed = new Typed(typedRef.current, {
			strings: [
				"Full Stack Web Developer",
				"C++ Developer",
				"MERN Stack Developer",
				"Next.JS Developer",
				"Software Developer"
			],
			typeSpeed: 60,
			smartBackspace: true,
			backDelay: 1000,
			backSpeed: 25,
			loop: true
		});

		return () => {
			// Destroy Typed instance during cleanup to stop animation
			typed.destroy();
		};
	}, []);

	return (
		<section
			ref={ref}
			id="home"
			className="mb-28 md:mb-0 pt-28 md:pt-36 scroll-mt-[100rem]">
			{/* [116px repeat(2, 1fr)] */}
			<div className="home__content flex flex-col-reverse md:flex-row gap-10 lg:gap-16 xl:gap-28 m-auto pt-0 md:pt-[3rem] justify-center items-center">
				<div className="home__data flex flex-col justify-center max-w-[400px] xl:max-w-[500px]">
					<h1 className="home__title mb-0 text-4xl text font-semibold !leading-[1.5] md:text-[3rem] xl:text-[58px]">
						Smit Bhamwala
					</h1>
					<div className="App mb-3">
						<span
							className="home__subtitle dark:text-purple-300"
							ref={typedRef}
						/>
					</div>

					<p className="home__description">
						Passionate Full-Stack Web Developer specializing in developing
						responsive, intuitive, and robust web applications{" "}
						<span className="italic font-semibold">
							from concept to deployment
						</span>
						.
					</p>

					<Link
						href="#contact"
						replace
						className="lg:w-fit text-center justify-center bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-2xl outline-none hover:bg-gray-950 active:scale-95 dark:bg-gray-500 transition"
						onClick={() => {
							setActiveSection("Contact");
							setTimeOfLastClick(Date.now());
						}}>
						Say Hello{" "}
						<svg
							className="button__icon"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none">
							<path
								d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
								fill="#fff"></path>
							<path
								d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
								fill="#fff"></path>
						</svg>
					</Link>
				</div>
				<div className="flex justify-end items-center w-52 h-auto md:w-80">
					<Image
						src={myPic}
						alt="Smit Bhamwala profile pic"
						// width="300"
						// height="300"
						quality="85"
						priority
						className="home__img dark:bg-gray-900"
					/>
				</div>
			</div>
		</section>
	);
}

// <section
// 			ref={ref}
// 			id="home"
// 			className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
// 			<div className="flex items-center justify-center">
// 				<div className="relative">
// 					<motion.div
// 						initial={{ opacity: 0, scale: 0 }}
// 						animate={{ opacity: 1, scale: 1 }}
// 						transition={{
// 							type: "tween",
// 							duration: 0.2
// 						}}>
// 						<Image
// 							src={"/smit-bhamwala-profile-pic.png"}
// 							alt="Smit Bhamwala profile pic"
// 							width="192"
// 							height="192"
// 							quality="95"
// 							priority
// 							className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
// 						/>
// 					</motion.div>
// 					{/* <motion.span
// 						className="absolute bottom-0 right-0 text-4xl"
// 						initial={{ opacity: 0, scale: 0 }}
// 						animate={{ opacity: 1, scale: 1 }}
// 						transition={{
// 							type: "spring",
// 							stiffness: 125,
// 							delay: 0.1,
// 							duration: 0.7
// 						}}>
// 						👋
// 					</motion.span> */}
// 				</div>
// 			</div>

// 			<motion.h1
// 				className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
// 				initial={{ opacity: 0, y: 100 }}
// 				animate={{ opacity: 1, y: 0 }}>
// 				<span className="font-bold">Hello, I&apos;m Smit Bhamwala.</span>{" "}
// 				I&apos;m a <span className="font-bold">Full-Stack Web Developer</span>{" "}
// 				with <span className="font-bold">2 years</span> of experience. I build{" "}
// 				<span className="italic">web applications</span> in React/Next.js
// 			</motion.h1>

// 			<motion.div
// 				className="flex flex-col sm:flex-row items-center justify-center gap-5 px-4 text-lg font-medium"
// 				initial={{ opacity: 0, y: 100 }}
// 				animate={{ opacity: 1, y: 0 }}
// 				transition={{
// 					delay: 0.1
// 				}}>
// 				<Link
// 					href="#contact"
// 					className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
// 					onClick={() => {
// 						setActiveSection("Contact");
// 						setTimeOfLastClick(Date.now());
// 					}}>
// 					Contact me here{" "}
// 					<BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
// 				</Link>

// 				<a
// 					className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
// 					href="/Smit Bhamwala CV.pdf"
// 					download>
// 					Download CV{" "}
// 					<HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
// 				</a>

// 				<div className="flex flex-row items-center justify-center gap-5 px-4 text-lg font-medium">
// 					<a
// 						className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
// 						href="https://www.linkedin.com/in/smit-bhamwala-8195971b0/"
// 						target="_blank">
// 						<BsLinkedin />
// 					</a>

// 					<a
// 						className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
// 						href="https://github.com/SmitBhamwala"
// 						target="_blank">
// 						<FaGithubSquare />
// 					</a>
// 				</div>
// 			</motion.div>
// 		</section>
