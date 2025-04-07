"use client";

import { TestimonialType } from "@/lib/types";
import { Session } from "next-auth";
import { Dispatch, SetStateAction } from "react";
import TestimonialCarousel from "./testimonialCarousel";

interface SliderProps {
  testimonials: TestimonialType[];
  setTestimonials: Dispatch<SetStateAction<TestimonialType[]>>;
  loadingTestimonials: boolean;
  setLoadingTestimonials: Dispatch<SetStateAction<boolean>>;
  session: Session | null;
}

export default function Slider({
  testimonials,
  setTestimonials,
  loadingTestimonials,
  setLoadingTestimonials,
  session
}: SliderProps) {
  // const [count, setCount] = useState(0);

  return (
    <div className="transition-all md:h-[16.7rem]">
      {loadingTestimonials ? (
        <div>
          {/* For Desktop Loader */}
          <TestimonialCarousel
            orientation="horizontal"
            carouselClassName="w-[65vw] hidden md:block select-none"
            carouselContentClassName="px-1 pb-2"
            carouselItemClassName="md:basis-1/2 lg:basis-1/3"
            session={session}
            testimonials={testimonials}
            isSkeletonLoading={loadingTestimonials}
          />

          {/* For Mobile Loader */}
          <TestimonialCarousel
            orientation="vertical"
            carouselClassName="block md:hidden select-none mt-16"
            carouselContentClassName="mb-2 h-[34rem]"
            carouselItemClassName="basis-1/2 hover:cursor-grab active:cursor-grabbing"
            session={session}
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
            session={session}
            testimonials={testimonials}
            isSkeletonLoading={loadingTestimonials}
          />

          {/* For Mobile */}
          <TestimonialCarousel
            orientation="vertical"
            carouselClassName="block md:hidden select-none mt-16"
            carouselContentClassName="mb-2 h-[30rem]"
            carouselItemClassName="basis-1/2 hover:cursor-grab active:cursor-grabbing"
            session={session}
            testimonials={testimonials}
            isSkeletonLoading={loadingTestimonials}
          />
        </div>
      )}
    </div>
  );
}
