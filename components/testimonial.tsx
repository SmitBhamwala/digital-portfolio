import { skillsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import "./testimonial.css";
import TestimonialCard from "./testimonialCard";

export default function Testimonial() {
  return (
    <section id="testimonials" 
    className="scroll-mt-28 mb-28 sm:mb-40"
    >
      <SectionHeading>Testimonials</SectionHeading>
      {/* <h3>What Our Clients Say</h3> */}
      <div className="testimonial_cards_container">
        <TestimonialCard name="Shivam Barot" linkedInProfilePicSrc="" rating={10} testimonial="Smit is an awesome developer and has a great knowledge of Web Development."/>
        <TestimonialCard name="Vagisha Kumar" linkedInProfilePicSrc="" rating={9} testimonial="Amazing experience, will definitely come back again."/>
        <TestimonialCard name="Tushar Jain" linkedInProfilePicSrc="" rating={10} testimonial="This is the best service I have ever used. Highly recommended!"/>
      </div>
    </section>
  );
};
