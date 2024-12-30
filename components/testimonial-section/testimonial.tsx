"use client";

import SectionHeading from "../common/section-heading";
import "./testimonial.css";
import Slider from "./slider";

export default function Testimonial() {
	return (
		<section id="testimonials" className="scroll-mt-28 mb-28 sm:mb-40">
			<SectionHeading>Testimonials</SectionHeading>
			<Slider />
		</section>
	);
}
