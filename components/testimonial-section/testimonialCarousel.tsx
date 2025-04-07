"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { TestimonialType } from "@/lib/types";
import clsx from "clsx";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import TestimonialCard from "./testimonialCard";

export interface TestimonialCarouselProps {
  testimonials: TestimonialType[];
  orientation: "horizontal" | "vertical";
  carouselClassName?: string;
  carouselContentClassName?: string;
  carouselItemClassName?: string;
  isSkeletonLoading: boolean;
}

export default function TestimonialCarousel({
  testimonials,
  orientation,
  carouselClassName,
  carouselContentClassName,
  carouselItemClassName,
  isSkeletonLoading
}: TestimonialCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const filteredTestimonials = testimonials.filter(
    (testimonial: TestimonialType) => testimonial.review !== ""
  );

  useEffect(() => {
    if (!api) return;

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    const updateCount = () => {
      const snapList = api.scrollSnapList();
      setCount(snapList.length);
    };

    updateCount();
    updateCurrent();

    api.on("select", updateCurrent);
    api.on("reInit", updateCount);
    api.on("reInit", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
      api.off("reInit", updateCount);
      api.off("reInit", updateCurrent);
    };
  }, [api]);

  return (
    <div>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start"
          // loop: true
        }}
        plugins={[
          Autoplay({
            delay: 4000
          })
        ]}
        orientation={orientation}
        className={carouselClassName}>
        {isSkeletonLoading ? (
          <CarouselContent className={carouselContentClassName}>
            <CarouselItem className={carouselItemClassName}>
              <Skeleton className="rounded-2xl shadow-md w-[80vw] md:w-auto h-[14rem] md:h-[12.8rem] lg:h-[14.2rem] bg-[#f3f4f6] dark:bg-gray-800" />
            </CarouselItem>
            <CarouselItem className={carouselItemClassName}>
              <Skeleton className="rounded-2xl shadow-md w-[80vw] md:w-auto h-[14rem] md:h-[12.8rem] lg:h-[14.2rem] bg-[#f3f4f6] dark:bg-gray-800" />
            </CarouselItem>
            <CarouselItem className={carouselItemClassName}>
              <Skeleton className="rounded-2xl shadow-md w-[80vw] md:w-auto h-[14rem] md:h-[12.8rem] lg:h-[14.2rem] bg-[#f3f4f6] dark:bg-gray-800" />
            </CarouselItem>
          </CarouselContent>
        ) : (
          <CarouselContent className={carouselContentClassName}>
            {filteredTestimonials.map((testimonial: TestimonialType) => (
              <CarouselItem
                key={testimonial._id}
                className={carouselItemClassName}>
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
        )}

        {!isSkeletonLoading && <CarouselPrevious />}
        {!isSkeletonLoading && <CarouselNext />}
      </Carousel>
      <div className="hidden md:block">
        {count > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: count }).map((_, i) => (
              <div
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={clsx(
                  "h-2 w-2 rounded-full cursor-pointer transition-all duration-300",
                  {
                    "bg-gray-700 dark:bg-gray-300 scale-110": i + 1 === current,
                    "bg-gray-300 dark:bg-gray-700": i + 1 !== current
                  }
                )}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
