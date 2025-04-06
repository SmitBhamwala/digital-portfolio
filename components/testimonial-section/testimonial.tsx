"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import SectionHeading from "../common/section-heading";
import SignIn from "./sign-in";
import Slider from "./slider";

export default function Testimonial() {
  const { ref } = useSectionInView("Testimonials");

  return (
    <section
      id="testimonials"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 max-w-[90%] lg:max-w-full mx-auto">
      <SectionHeading>Testimonials</SectionHeading>

      <div className="flex justify-center items-center mb-5">
        <SignIn />
      </div>
      <Slider />
    </section>
  );
}
