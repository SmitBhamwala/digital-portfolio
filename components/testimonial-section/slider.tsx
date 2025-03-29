"use client";

import TestimonialCard from "./testimonialCard";
import { useEffect, useState } from "react";
import { TestimonialType } from "@/lib/types";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useSession } from "next-auth/react";
import MyReviewCard from "./myReviewCard";

export default function Slider() {
	const [testimonials, setTestimonials] = useState([]);
	const { data: session } = useSession();

	useEffect(() => {
		async function fetchPosts() {
			const res = await fetch(
				"https://smitbhamwala.vercel.app/api/testimonial",
				{
					cache: "no-store"
				}
			);
			const data = await res.json();
			const testimonialData = data.filter(
				(testimonial: TestimonialType) => testimonial.review !== ""
			);
			if (session) {
				const testimonialsWithoutMyReview = testimonialData.filter(
					(testimonial: TestimonialType) =>
						testimonial.email !== session.user?.email
				);
				setTestimonials(testimonialsWithoutMyReview);
			} else {
				setTestimonials(testimonialData);
			}
		}
		fetchPosts();
	}, [session]);

	if (testimonials.length === 0) return <div>No Testimonials</div>;

	return (
		<div>
			<Carousel
				opts={{
					align: "start"
					// loop: true
				}}
				plugins={[
					Autoplay({
						delay: 4000
					})
				]}
				className="hidden md:block">
				<CarouselContent>
					{session && (
						<CarouselItem className="md:basis-1/2 lg:basis-1/3 hover:cursor-grab active:cursor-grabbing">
							<MyReviewCard />
						</CarouselItem>
					)}

					{testimonials.map((testimonial: TestimonialType) => (
						<CarouselItem
							key={testimonial._id}
							className="md:basis-1/2 lg:basis-1/3 hover:cursor-grab active:cursor-grabbing">
							<TestimonialCard
								name={testimonial.name}
								email={testimonial.email}
								image={testimonial.image}
								rating={testimonial.rating}
								review={testimonial.review}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>

			<Carousel
				opts={{
					align: "start"
					// loop: true
				}}
				plugins={[
					Autoplay({
						delay: 4000
					})
				]}
				orientation="vertical"
				className="block md:hidden mt-16">
				<CarouselContent className="h-[30rem]">
					{session && (
						<CarouselItem className="basis-1/2 hover:cursor-grab active:cursor-grabbing">
							<MyReviewCard />
						</CarouselItem>
					)}

					{testimonials.map((testimonial: TestimonialType) => (
						<CarouselItem
							key={testimonial._id}
							className="basis-1/2 hover:cursor-grab active:cursor-grabbing">
							<TestimonialCard
								name={testimonial.name}
								email={testimonial.email}
								image={testimonial.image}
								rating={testimonial.rating}
								review={testimonial.review}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
			{/* <Swiper
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
							image={testimonial.image}
							rating={testimonial.rating}
							testimonial={testimonial.testimonial}
						/>
					</SwiperSlide>
				))}
				{testimonials.map((testimonial: TestimonialType) => (
					<SwiperSlide key={testimonial._id}>
						<TestimonialCard
							name={testimonial.name}
							email={testimonial.email}
							image={testimonial.image}
							rating={testimonial.rating}
							testimonial={testimonial.testimonial}
						/>
					</SwiperSlide>
				))}
				{testimonials.map((testimonial: TestimonialType) => (
					<SwiperSlide key={testimonial._id}>
						<TestimonialCard
							name={testimonial.name}
							email={testimonial.email}
							image={testimonial.image}
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
			</Swiper> */}
		</div>
	);
}
