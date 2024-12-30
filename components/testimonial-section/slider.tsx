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

export default function Slider() {
	return (
		<div className="container">
			<Swiper
				modules={[Navigation, Pagination, EffectCoverflow]}
				spaceBetween={10}
				slidesPerView={2}
				effect="coverflow"
				centeredSlides={true}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 100,
					modifier: 2.5,
					slideShadows: true
				}}
				grabCursor={true}
				// loop={true}
				navigation={{
					nextEl: ".slider-button-next",
					prevEl: ".slider-button-prev"
				}}
				pagination={{ el: ".swiper-pagination", clickable: true }}
				// scrollbar={{ draggable: true }}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
				className="swiper-container">
				<SwiperSlide>
					{({ isActive }) => (
						<div className={`${isActive ? "" : "bluuur"}`}>
							<TestimonialCard
								name="Shivam Barot"
								linkedInProfilePicSrc=""
								rating={10}
								testimonial="Smit is an awesome developer and has a great knowledge of Web Development."
							/>
						</div>
					)}
				</SwiperSlide>
				<SwiperSlide>
					{({ isActive }) => (
						<div className={`${isActive ? "" : "bluuur"}`}>
							<TestimonialCard
								name="Vagisha Kumar"
								linkedInProfilePicSrc=""
								rating={9}
								testimonial="Amazing experience, will definitely come back again."
							/>
						</div>
					)}
				</SwiperSlide>
				<SwiperSlide>
					{({ isActive }) => (
						<div className={`${isActive ? "" : "bluuur"}`}>
							<TestimonialCard
								name="Tushar Jain"
								linkedInProfilePicSrc=""
								rating={10}
								testimonial="This is the best service I have ever used. Highly recommended!"
							/>
						</div>
					)}
				</SwiperSlide>

				<SwiperSlide>
					{({ isActive }) => (
						<div className={`${isActive ? "" : "bluuur"}`}>
							<TestimonialCard
								name="Shivam Barot"
								linkedInProfilePicSrc=""
								rating={10}
								testimonial="Smit is an awesome developer and has a great knowledge of Web Development."
							/>
						</div>
					)}
				</SwiperSlide>
				<SwiperSlide>
					{({ isActive }) => (
						<div className={`${isActive ? "" : "bluuur"}`}>
							<TestimonialCard
								name="Vagisha Kumar"
								linkedInProfilePicSrc=""
								rating={9}
								testimonial="Amazing experience, will definitely come back again."
							/>
						</div>
					)}
				</SwiperSlide>
				<SwiperSlide>
					{({ isActive }) => (
						<div className={`${isActive ? "" : "bluuur"}`}>
							<TestimonialCard
								name="Tushar Jain"
								linkedInProfilePicSrc=""
								rating={10}
								testimonial="This is the best service I have ever used. Highly recommended!"
							/>
						</div>
					)}
				</SwiperSlide>

				<div className="slider-controller">
					<div className="slider-button-prev slider-arrow">
						<MdOutlineArrowBackIos />
					</div>
					<div className="swiper-pagination"></div>
					<div className="slider-button-next slider-arrow">
						<MdOutlineArrowForwardIos />
					</div>
				</div>
			</Swiper>
		</div>
	);
}
