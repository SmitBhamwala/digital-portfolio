"use client";

import { TestimonialType } from "@/lib/types";
import TestimonialCarousel from "./testimonialCarousel";

interface SliderProps {
  testimonials: TestimonialType[];
  loadingTestimonials: boolean;
}

export default function Slider({
  testimonials,
  loadingTestimonials
}: SliderProps) {
  return (
    <div className="transition-all md:h-[16.7rem]">
      {loadingTestimonials ? (
        <div>
          {/* For Desktop Loader */}
          <TestimonialCarousel
            orientation="horizontal"
            carouselClassName="md:w-[42.8rem] lg:w-[58rem] hidden md:block select-none"
            carouselContentClassName="px-1 pb-2 h-[30rem]"
            carouselItemClassName="basis-1/2 lg:basis-1/3"
            testimonials={testimonials}
            isSkeletonLoading={loadingTestimonials}
          />

          {/* For Mobile Loader */}
          <TestimonialCarousel
            orientation="vertical"
            carouselClassName="block md:hidden select-none mt-16"
            carouselContentClassName="mb-2 h-[30rem]"
            carouselItemClassName="basis-1/2 hover:cursor-grab active:cursor-grabbing"
            testimonials={testimonials}
            isSkeletonLoading={loadingTestimonials}
          />
        </div>
      ) : (
        <div>
          {/* For Desktop */}
          <TestimonialCarousel
            orientation="horizontal"
            carouselClassName="hidden md:block select-none"
            carouselContentClassName="px-1 pb-2"
            carouselItemClassName="md:basis-1/2 lg:basis-1/3 hover:cursor-grab active:cursor-grabbing"
            testimonials={testimonials}
            isSkeletonLoading={loadingTestimonials}
          />

          {/* For Mobile */}
          <TestimonialCarousel
            orientation="vertical"
            carouselClassName="block md:hidden select-none mt-16"
            carouselContentClassName="mb-2 h-[30rem]"
            carouselItemClassName="basis-1/2 hover:cursor-grab active:cursor-grabbing"
            testimonials={testimonials}
            isSkeletonLoading={loadingTestimonials}
          />
        </div>
      )}
    </div>
  );
}
