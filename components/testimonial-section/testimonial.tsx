"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import { TestimonialType } from "@/lib/types";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import SectionHeading from "../common/section-heading";
import SignIn from "./sign-in";
import Slider from "./slider";

function shuffleTestimonials(array: any) {
  const shuffled = [...array]; // Clone the array to avoid mutation
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Testimonial() {
  const { ref } = useSectionInView("Testimonials");

  const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);
  const [loadingTestimonials, setLoadingTestimonials] = useState(true);
  const { data: session } = useSession();

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("/api/testimonial", {
        cache: "force-cache",
        headers: {
          "x-secret-key": process.env.NEXT_PUBLIC_API_SECRET || ""
        }
      });
      const data = await res.json();
      const randomTestimonials: any = shuffleTestimonials(data);

      setTestimonials(randomTestimonials);
      setLoadingTestimonials(false);
    }
    setLoadingTestimonials(true);
    fetchPosts();
  }, []);

  return (
    <section
      id="testimonials"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 max-w-[90%] lg:max-w-full mx-auto">
      <SectionHeading>Testimonials</SectionHeading>

      <div className="flex justify-center items-center mb-5">
        <SignIn
          testimonials={testimonials}
          setTestimonialsAction={setTestimonials}
          session={session}
        />
      </div>
      <Slider
        testimonials={testimonials}
        loadingTestimonials={loadingTestimonials}
      />
    </section>
  );
}
