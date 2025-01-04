"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";

import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import TestimonialCard from "./testimonialCard";
import "./slider.css";
import { useEffect, useState } from "react";
import { TestimonialType } from "@/lib/types";

export default function Slider() {
	const [testimonials, setTestimonials] = useState([]);

	useEffect(() => {
		async function fetchPosts() {
			const res = await fetch("http://localhost:3000/api/testimonial");
			const data = await res.json();
			setTestimonials(data);
		}
		fetchPosts();
	}, []);

	if (testimonials.length === 0) return <div>Loading Testimonials...</div>;

	return (
		<div className="container">
			<Swiper
				modules={[Navigation, Pagination, EffectCoverflow]}
				spaceBetween={40}
				slidesPerView={3}
				// effect="coverflow"
				// centeredSlides={true}
				// coverflowEffect={{
				// 	rotate: 0,
				// 	stretch: 0,
				// 	depth: 100,
				// 	modifier: 2.5,
				// 	slideShadows: true
				// }}
				grabCursor={true}
				// loop={true}
				navigation={{
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				}}
				pagination={{
					el: ".swiper-pagination",
					clickable: true,
					dynamicBullets: true,
          dynamicMainBullets: 3
				}}
				// scrollbar={{ draggable: true }}
				// onSlideChange={() => console.log("slide change")}
				// onSwiper={(swiper) => console.log(swiper)}
				className="swiper-container">
				{testimonials.map((testimonial: TestimonialType) => (
					<SwiperSlide key={testimonial._id}>
						<TestimonialCard
							name={testimonial.name}
							email={testimonial.email}
							linkedInProfilePicSrc={testimonial.linkedInProfilePicSrc}
							rating={testimonial.rating}
							testimonial={testimonial.testimonial}
						/>
					</SwiperSlide>
				))}

				<div className="slider-controller">
					<div className="swiper-button-prev slider-arrow">
						<MdOutlineArrowBackIos />
					</div>
					<div className="swiper-pagination"></div>
					<div className="swiper-button-next slider-arrow">
						<MdOutlineArrowForwardIos />
					</div>
				</div>
			</Swiper>
		</div>
	);
}
