"use client";

import SectionHeading from "../common/section-heading";
import "./testimonial.css";
import Slider from "./slider";
import SignIn from "./sign-in";

export default function Testimonial() {
	return (
		<section id="testimonials" className="scroll-mt-28 mb-28 sm:mb-40 max-w-[75%] md:max-w-[90%] lg:max-w-full mx-auto">
			<SectionHeading>Testimonials</SectionHeading>

			<div className="flex justify-center items-center mb-5">
				<SignIn />
			</div>
			<Slider />
		</section>
	);
}
