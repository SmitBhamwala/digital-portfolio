import Image from "next/image";
import myPic from "@/public/myPic.png";
import { TestimonialCardProps } from "@/lib/types";

export default function TestimonialCard({name, testimonial, linkedInProfilePicSrc, rating}: TestimonialCardProps) {
  return (
    <div className="borderBlack rounded-xl p-4 bg-[#f3f4f6] dark:bg-[rgb(255, 255, 255)] dark:bg-opacity-5">
      <div className="testimonial_card_header flex items-center mb-6">
        <div className="linkedin_image_container mr-4">
          <Image
            src={myPic}
            alt={`${name} LinkedIn profile picture`}
            width="70"
            height="70"
            quality="85"
            priority
            draggable={false}
            className="object-contain rounded-full bg-orange-400"
          />
        </div>
        <h4 className="font-medium text-xl">{name}</h4>
      </div>
      <div className="testimonial_card_body">
        <p className="testimonial_comment">"{testimonial}"</p>
        <p className="testimonial_rating mt-6">Rating: {rating}/10</p>
      </div>
    </div>
  );
}
