"use client";

import { Session } from "next-auth";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import MyReviewCard from "./myReviewCard";
import TestimonialCard from "./testimonialCard";
import { TestimonialType } from "@/lib/types";
import Autoplay from "embla-carousel-autoplay";
import { Skeleton } from "../ui/skeleton";

export interface TestimonialCarouselProps {
  session: Session | null;
  testimonials: TestimonialType[];
  orientation: "horizontal" | "vertical";
  carouselClassName?: string;
  carouselContentClassName?: string;
  carouselItemClassName?: string;
  isSkeletonLoading: boolean;
}

export default function TestimonialCarousel({
  session,
  testimonials,
  orientation,
  carouselClassName,
  carouselContentClassName,
  carouselItemClassName,
  isSkeletonLoading,
}: TestimonialCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        // loop: true
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      orientation={orientation}
      className={carouselClassName}
    >
      <CarouselContent className={carouselContentClassName}>
        {session && !isSkeletonLoading && (
          <CarouselItem className={carouselItemClassName}>
            <MyReviewCard />
          </CarouselItem>
        )}
        {isSkeletonLoading && (
          <>
            <CarouselItem className={carouselItemClassName}>
              <Skeleton className="borderBlack rounded-xl shadow-none h-[17rem] bg-[#f3f4f6] dark:bg-gray-800" />
            </CarouselItem>
            <CarouselItem className={carouselItemClassName}>
              <Skeleton className="borderBlack rounded-xl shadow-none h-[17rem] bg-[#f3f4f6] dark:bg-gray-800" />
            </CarouselItem>
            <CarouselItem className={carouselItemClassName}>
              <Skeleton className="borderBlack rounded-xl shadow-none h-[17rem] bg-[#f3f4f6] dark:bg-gray-800" />
            </CarouselItem>
          </>
        )}

        {testimonials.map((testimonial: TestimonialType) => (
          <CarouselItem key={testimonial._id} className={carouselItemClassName}>
            <TestimonialCard
              name={testimonial.name}
              email={testimonial.email}
              image={testimonial.image}
              rating={testimonial.rating}
              review={testimonial.review}
              LinkedInId={testimonial.LinkedInId}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
