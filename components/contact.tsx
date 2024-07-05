"use client";

import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "@/components/submit-btn";
import toast from "react-hot-toast";
import { useRef } from "react";

export default function Contact() {
	const { ref } = useSectionInView("Contact");

	const emailRef = useRef<HTMLInputElement>(null);
	const messageRef = useRef<HTMLTextAreaElement>(null);

	return (
		<motion.section
			id="contact"
			ref={ref}
			className="mb-16 w-[min(100%,38rem)] text-center"
			// scroll-mt-[7rem]
			initial={{
				opacity: 0
			}}
			whileInView={{
				opacity: 1
			}}
			transition={{
				duration: 1
			}}
			viewport={{
				once: true
			}}>
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

					if (error) {
						toast.error(error);
						return;
					}
					if (emailRef.current) {
						emailRef.current.value = "";
					}
					if (messageRef.current) {
						messageRef.current.value = "";
					}

					toast.success("Email sent successfully!");
				}}>
				<input
					className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
					name="senderEmail"
					type="email"
					required
					maxLength={70}
					placeholder="Your email"
					ref={emailRef}
				/>
				<textarea
					className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
					name="message"
					placeholder="Your message"
					required
					maxLength={2000}
					ref={messageRef}
				/>
				<SubmitBtn />
			</form>
		</motion.section>
	);
}
