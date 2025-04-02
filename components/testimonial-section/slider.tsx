"use client";

import { useEffect, useState } from "react";
import { TestimonialType } from "@/lib/types";
import { useSession } from "next-auth/react";
import TestimonialCarousel from "./testimonialCarousel";

function shuffleArray(array: any) {
  const shuffled = [...array]; // Clone the array to avoid mutation
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
export default function Slider() {
  const [testimonials, setTestimonials] = useState([]);
  const [loadingTestimonials, setLoadingTestimonials] = useState(true);
  const { data: session } = useSession();

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(
        "https://smitbhamwala.vercel.app/api/testimonial",
        {
          cache: "no-store",
        }
      );
      const data = await res.json();
      const testimonialData = data.filter(
        (testimonial: TestimonialType) => testimonial.review !== ""
      );
      if (session) {
          (testimonial: TestimonialType) =>
            testimonial.email !== session.user?.email
        );
        setTestimonials(testimonialsWithoutMyReview);
      } else {
      }
    }
    setLoadingTestimonials(true);
    fetchPosts();
    setLoadingTestimonials(false);
  }, [session]);

  return (
    <div className="transition-all">
      {loadingTestimonials ? (
        <div>
          {/* For Desktop Loader */}
          <TestimonialCarousel
            orientation="horizontal"
            carouselClassName="w-[65vw] hidden md:block select-none"
            carouselContentClassName=""
            carouselItemClassName="md:basis-1/2 lg:basis-1/3"
            session={session}
            testimonials={testimonials}
            isSkeletonLoading={loadingTestimonials}
          />

          {/* For Mobile Loader */}
          <TestimonialCarousel
            orientation="vertical"
            carouselClassName="block md:hidden select-none mt-16"
            carouselContentClassName="h-[34rem]"
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
            carouselContentClassName=""
            carouselItemClassName="md:basis-1/2 lg:basis-1/3 hover:cursor-grab active:cursor-grabbing"
            session={session}
            testimonials={testimonials}
            isSkeletonLoading={loadingTestimonials}
          />

          {/* For Mobile */}
          <TestimonialCarousel
            orientation="vertical"
            carouselClassName="block md:hidden select-none mt-16"
            carouselContentClassName="h-[34rem]"
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
