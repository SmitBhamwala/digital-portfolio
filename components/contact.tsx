"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";
// import SectionHeading from "@/components/section-heading";
import SubmitBtn from "@/components/submit-btn";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { useTheme } from "@/context/theme-context";
// import { MdEmail } from "react-icons/md";
import emailIMG from "@/public/email.png";
import "./contact.css";

export default function Contact() {
	const { ref } = useSectionInView("Contact", 0.5);
	const { theme } = useTheme();

	const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const messageRef = useRef<HTMLTextAreaElement>(null);

	return (
		<section
			id="contact"
			ref={ref}
			className="mb-16 w-[min(100%,50rem)] text-center scroll-mt-20 md:scroll-mt-28"
			//scroll-mt-28
			//lg:scroll-mt-0
			// scroll-mt-[7rem]
		>
			<h2 className="text-3xl font-semibold capitalize mb-6 md:mb-8 text-center">
				Get In Touch
			</h2>
			<p className="italic font-medium text-gray-700 dark:text-white/75 text-xs md:text-base mb-4 xl:mb-0">
				Let&apos;s build something amazing together ✌️
			</p>
			<div className="flex flex-col xl:flex-row justify-center items-center gap-2 md:gap-6 xl:gap-8 m-auto">
				<div className="flex flex-row xl:flex-col gap-2 md:gap-4 justify-center items-center text-gray-700 dark:text-white/75">
					<Link
						href="https://www.linkedin.com/in/smit-bhamwala-8195971b0/"
						target="_blank"
						className="contact__box w-[6rem] md:w-[7rem] active:scale-95 transition bg-[#f3f4f6] dark:bg-[rgb(255, 255, 255)] dark:bg-opacity-5">
						<div className="about__icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="30"
								height="30"
								viewBox="0 0 64 64">
								<linearGradient
									id="SUJNhpmDQDF27Y3OfwgfYa_44019_gr1"
									x1="19"
									x2="19"
									y1="24.858"
									y2="49.041"
									gradientUnits="userSpaceOnUse"
									spreadMethod="reflect">
									<stop offset="0" stopColor="#6dc7ff"></stop>
									<stop offset="1" stopColor="#e6abff"></stop>
								</linearGradient>
								<path
									fill="url(#SUJNhpmDQDF27Y3OfwgfYa_44019_gr1)"
									fillRule="evenodd"
									d="M22 48L22 26 16 26 16 48 22 48z"
									clipRule="evenodd"></path>
								<linearGradient
									id="SUJNhpmDQDF27Y3OfwgfYb_44019_gr2"
									x1="19.382"
									x2="19.382"
									y1="15.423"
									y2="23.341"
									gradientUnits="userSpaceOnUse"
									spreadMethod="reflect">
									<stop offset="0" stopColor="#6dc7ff"></stop>
									<stop offset="1" stopColor="#e6abff"></stop>
								</linearGradient>
								<path
									fill="url(#SUJNhpmDQDF27Y3OfwgfYb_44019_gr2)"
									fillRule="evenodd"
									d="M19.358,23c2.512,0,4.076-1.474,4.076-3.554 c-0.047-2.126-1.564-3.649-4.028-3.649c-2.465,0-4.076,1.475-4.076,3.601c0,2.08,1.563,3.602,3.981,3.602H19.358L19.358,23z"
									clipRule="evenodd"></path>
								<linearGradient
									id="SUJNhpmDQDF27Y3OfwgfYc_44019_gr3"
									x1="37.386"
									x2="37.386"
									y1="14.125"
									y2="49.525"
									gradientUnits="userSpaceOnUse"
									spreadMethod="reflect">
									<stop offset="0" stopColor="#6dc7ff"></stop>
									<stop offset="1" stopColor="#e6abff"></stop>
								</linearGradient>
								<path
									fill="url(#SUJNhpmDQDF27Y3OfwgfYc_44019_gr3)"
									fillRule="evenodd"
									d="M26.946,48H34V35.911c0-0.648,0.122-1.295,0.313-1.758 c0.52-1.295,1.877-2.635,3.867-2.635c2.607,0,3.821,1.988,3.821,4.901V48h6V35.588c0-6.657-3.085-9.498-7.826-9.498 c-3.886,0-5.124,1.91-6.072,3.91H34v-4h-7.054c0.095,2-0.175,22-0.175,22H26.946z"
									clipRule="evenodd"></path>
								<linearGradient
									id="SUJNhpmDQDF27Y3OfwgfYd_44019_gr4"
									x1="32"
									x2="32"
									y1="6.5"
									y2="57.5"
									gradientUnits="userSpaceOnUse"
									spreadMethod="reflect">
									<stop offset="0" stopColor="#1a6dff"></stop>
									<stop offset="1" stopColor="#c822ff"></stop>
								</linearGradient>
								<path
									fill="url(#SUJNhpmDQDF27Y3OfwgfYd_44019_gr4)"
									d="M50,57H14c-3.859,0-7-3.141-7-7V14c0-3.859,3.141-7,7-7h36c3.859,0,7,3.141,7,7v36 C57,53.859,53.859,57,50,57z M14,9c-2.757,0-5,2.243-5,5v36c0,2.757,2.243,5,5,5h36c2.757,0,5-2.243,5-5V14c0-2.757-2.243-5-5-5H14z"></path>
							</svg>
							{/* <svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="30"
								height="30"
								viewBox="0 0 48 48">
								<path
									fill="#0078d4"
									d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path>
								<path
									d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
									opacity=".05"></path>
								<path
									d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
									opacity=".07"></path>
								<path
									fill="#fff"
									d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
							</svg> */}
						</div>
						<h4 className="contact__title">LinkedIn</h4>
					</Link>
					<Link
						href="mailto:smitbhamwala@gmail.com"
						className="contact__box w-[6rem] md:w-[7rem] active:scale-95 transition bg-[#f3f4f6] dark:bg-[rgb(255, 255, 255)] dark:bg-opacity-5">
						<div className="about__icon">
							<Image src={emailIMG} alt="Email Icon" height={30} width={30} />
						</div>
						<h4 className="contact__title">Email Me</h4>
					</Link>
					<Link
						href="https://wa.me/919662852061"
						target="_blank"
						className="contact__box w-[6rem] md:w-[7rem] active:scale-95 transition bg-[#f3f4f6] dark:bg-[rgb(255, 255, 255)] dark:bg-opacity-5">
						<div className="about__icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="30"
								height="30"
								viewBox="0 0 64 64">
								<linearGradient
									id="fzF5K76u~QPjMIgETt7bMa_43677_gr1"
									x1="32"
									x2="32"
									y1="5.25"
									y2="58.834"
									gradientUnits="userSpaceOnUse"
									spreadMethod="reflect">
									<stop offset="0" stopColor="#1a6dff"></stop>
									<stop offset="1" stopColor="#c822ff"></stop>
								</linearGradient>
								<path
									fill="url(#fzF5K76u~QPjMIgETt7bMa_43677_gr1)"
									d="M6.399,57.699l3.792-13.847c-2.076-3.74-3.17-7.975-3.168-12.272 C7.028,17.641,18.373,6.301,32.312,6.301c6.762,0.003,13.115,2.636,17.889,7.414c4.774,4.778,7.402,11.151,7.4,17.944 C57.595,45.633,46.25,57,32.312,57c-4.024,0-8.073-1.019-11.744-2.95L6.399,57.699z M20.828,51.918l0.346,0.188 C24.645,53.999,28.492,55,32.302,55c12.846,0,23.293-10.471,23.299-23.341c0.002-6.26-2.418-12.13-6.814-16.53 S38.538,8.304,32.312,8.301c-12.836,0-23.283,10.443-23.288,23.279c-0.002,4.089,1.072,8.113,3.107,11.639l0.209,0.361L9.239,54.902 L20.828,51.918z M32.312,53c-3.686,0-7.415-1.06-10.793-3.063l-0.437-0.318l-8.854,2.323l2.382-8.691l-0.244-0.387 c-2.123-3.376-3.243-7.271-3.241-11.269c0.004-11.67,9.513-21.165,21.195-21.165c5.642,0.002,10.961,2.218,14.979,6.239 c4,4.003,6.202,9.345,6.2,15.039C53.495,43.448,43.99,53,32.312,53z M22.583,48.242C25.641,50.047,29.001,51,32.304,51 c10.584,0,19.191-8.654,19.195-19.292c0.002-5.161-1.992-10-5.614-13.625c-3.642-3.644-8.459-5.651-13.565-5.653 c-10.581,0-19.191,8.598-19.195,19.166c-0.002,3.619,1.012,7.146,2.933,10.201l0.715,1.131l-1.698,6.199l6.429-1.687L22.583,48.242z"></path>
								<linearGradient
									id="fzF5K76u~QPjMIgETt7bMb_43677_gr2"
									x1="32.305"
									x2="32.305"
									y1="17.5"
									y2="46.527"
									gradientUnits="userSpaceOnUse"
									spreadMethod="reflect">
									<stop offset="0" stopColor="#6dc7ff"></stop>
									<stop offset="1" stopColor="#e6abff"></stop>
								</linearGradient>
								<path
									fill="url(#fzF5K76u~QPjMIgETt7bMb_43677_gr2)"
									fillRule="evenodd"
									d="M26.12,21.219c-0.464-1.031-0.952-1.052-1.394-1.07 c-0.361-0.015-0.774-0.015-1.187-0.015c-0.413,0-1.084,0.155-1.651,0.775c-0.568,0.62-2.168,2.118-2.168,5.164 c0,3.047,2.219,5.991,2.529,6.405c0.31,0.413,4.284,6.865,10.579,9.347c5.231,2.063,6.296,1.653,7.431,1.549 c1.135-0.103,3.664-1.498,4.18-2.944c0.516-1.446,0.516-2.685,0.361-2.944c-0.155-0.258-0.568-0.413-1.187-0.723 c-0.619-0.31-3.664-1.808-4.232-2.014c-0.568-0.206-0.981-0.31-1.394,0.31c-0.413,0.619-1.599,2.014-1.96,2.427 c-0.361,0.414-0.723,0.465-1.342,0.156c-0.619-0.311-2.614-0.964-4.98-3.074c-1.841-1.641-3.084-3.668-3.445-4.288 c-0.361-0.619-0.039-0.955,0.272-1.264c0.278-0.277,0.619-0.723,0.929-1.085c0.309-0.362,0.412-0.62,0.619-1.033 c0.206-0.414,0.103-0.775-0.052-1.085S26.67,22.443,26.12,21.219z"
									clipRule="evenodd"></path>
							</svg>
						</div>
						<h4 className="contact__title">Whatsapp</h4>
					</Link>
				</div>

				<p className="text-xl text-gray-500 font-medium">OR</p>

				<form
					className="xl:mt-10 w-[100%] flex flex-col dark:text-black"
					action={async (formData) => {
						const { data, error } = await sendEmail(formData);
						var width =
							window.innerWidth > 0 ? window.innerWidth : screen.width;

						if (error) {
							width <= 768
								? theme == "light"
									? toast.error(error)
									: toast.error(error, {
											style: {
												background: "rgb(51 65 85)",
												color: "#fff"
											}
									  })
								: theme == "light"
								? toast.error(error, { position: "top-right" })
								: toast.error(error, {
										position: "top-right",
										style: {
											background: "rgb(51 65 85)",
											color: "#fff"
										}
								  });
							return;
						}
						if (nameRef.current) {
							nameRef.current.value = "";
						}
						if (emailRef.current) {
							emailRef.current.value = "";
						}
						if (messageRef.current) {
							messageRef.current.value = "";
						}

						width <= 768
							? theme == "light"
								? toast.success("Email sent successfully!")
								: toast.success("Email sent successfully!", {
										style: {
											background: "rgb(51 65 85)",
											color: "#fff"
										}
								  })
							: theme == "light"
							? toast.success("Email sent successfully!", {
									position: "top-right"
							  })
							: toast.success("Email sent successfully!", {
									position: "top-right",
									style: {
										background: "rgb(51 65 85)",
										color: "#fff"
									}
							  });
					}}>
					<input
						className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-10 dark:text-gray-300 transition-all outline-none"
						name="senderName"
						type="name"
						required
						maxLength={70}
						placeholder="Your Name"
						ref={nameRef}
					/>
					<input
						className="h-14 my-3 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-10 dark:text-gray-300 transition-all outline-none"
						name="senderEmail"
						type="email"
						required
						maxLength={70}
						placeholder="Your Email"
						ref={emailRef}
					/>
					<textarea
						className="h-48 md:h-52 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-10 dark:text-gray-300 transition-all outline-none"
						name="message"
						placeholder="Your message"
						required
						maxLength={2000}
						ref={messageRef}
					/>
					<SubmitBtn />
				</form>
			</div>
		</section>
	);
}
