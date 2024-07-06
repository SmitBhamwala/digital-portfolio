"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SectionHeading from "@/components/section-heading";
import SubmitBtn from "@/components/submit-btn";
import { useTheme } from "@/context/theme-context";

export default function Contact() {
	const { ref } = useSectionInView("Contact");
	const { theme } = useTheme();

	const emailRef = useRef<HTMLInputElement>(null);
	const messageRef = useRef<HTMLTextAreaElement>(null);

	return (
		<section
			id="contact"
			ref={ref}
			className="mb-16 w-[min(100%,38rem)] text-center scroll-mt-28 lg:scroll-mt-0"
			// scroll-mt-[7rem]
			// initial={{
			// 	opacity: 0
			// }}
			// whileInView={{
			// 	opacity: 1
			// }}
			// transition={{
			// 	duration: 1
			// }}
			// viewport={{
			// 	once: true
			// }}
		>
			<SectionHeading>Contact me</SectionHeading>

			<p className="text-gray-700 -mt-6 dark:text-white/80">
				Please contact me directly at{" "}
				<a className="underline" href="mailto:smitbhamwala@gmail.com">
					smitbhamwala@gmail.com
				</a>{" "}
				or through this form.
			</p>

			<form
				className="mt-10 flex flex-col dark:text-black"
				action={async (formData) => {
					const { data, error } = await sendEmail(formData);
					var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

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
					name="senderEmail"
					type="email"
					required
					maxLength={70}
					placeholder="Your email"
					ref={emailRef}
				/>
				<textarea
					className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-10 dark:text-gray-300 transition-all outline-none"
					name="message"
					placeholder="Your message"
					required
					maxLength={2000}
					ref={messageRef}
				/>
				<SubmitBtn />
			</form>
		</section>
	);
}
