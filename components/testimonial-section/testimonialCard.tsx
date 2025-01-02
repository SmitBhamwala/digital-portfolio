import Image from "next/image";
import myPic from "@/public/myPic.png";
import { TestimonialType } from "@/lib/types";
import Link from "next/link";

export default function TestimonialCard({
	name,
	testimonial,
	linkedInProfilePicSrc,
	rating
}: TestimonialType) {
	return (
		<div className="borderBlack rounded-xl w-[22rem] h-[20rem] p-4 bg-[#f3f4f6] dark:bg-gray-800">
			<Link
				href="https://www.linkedin.com/in/smit-bhamwala-8195971b0/"
				target="_blank">
				<div className="testimonial_card_header flex items-center mb-6">
					<div className="linkedin_image_container mr-4">
						<Image
							src={linkedInProfilePicSrc}
							alt={`${name}'s LinkedIn profile picture`}
							width="70"
							height="70"
							quality="85"
							priority={false}
							draggable={false}
							className="object-contain rounded-full bg-orange-400"
						/>
					</div>
					<h4 className="font-medium text-xl">{name}</h4>
				</div>
			</Link>
			<div className="testimonial_card_body">
				<p className="testimonial_comment">&quot;{testimonial}&quot;</p>
				<p className="testimonial_rating mt-6">Rating: {rating}/10</p>
			</div>
		</div>
	);
}
