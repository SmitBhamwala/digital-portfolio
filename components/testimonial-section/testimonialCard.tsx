import Image from "next/image";
import { TestimonialType } from "@/lib/types";
import Link from "next/link";

export default function TestimonialCard({
	name,
	review,
	image,
	rating,
	LinkedInId
}: TestimonialType) {
	return (
		<div className="borderBlack rounded-xl shadow-xl h-[15rem] md:h-[17rem] p-4 bg-[#f3f4f6] dark:bg-gray-800">
			{LinkedInId ? (
				<>
					<Link
						href={`https://www.linkedin.com/in/${LinkedInId}/`}
						target="_blank">
						<div className="testimonial_card_header flex items-center mb-6">
							<div className="linkedin_image_container mr-4">
								<Image
									src={image}
									alt={`${name}'s LinkedIn profile picture`}
									width="40"
									height="40"
									quality="100"
									priority={false}
									draggable={false}
									className="object-contain rounded-full bg-orange-400"
								/>
							</div>
							<h4 className="font-medium text-lg">{name}</h4>
						</div>
					</Link>
					<div className="testimonial_card_body">
						<p className="testimonial_comment text-sm">&quot;{review}&quot;</p>
						<p className="testimonial_rating text-sm mt-6">
							Rating: {rating}/10
						</p>
					</div>
				</>
			) : (
				<>
					<div className="testimonial_card_header flex items-center mb-6">
						<div className="linkedin_image_container mr-4">
							<Image
								src={image}
								alt={`${name}'s LinkedIn profile picture`}
								width="40"
								height="40"
								quality="100"
								priority={false}
								draggable={false}
								className="object-contain rounded-full bg-orange-400"
							/>
						</div>
						<h4 className="font-medium text-lg">{name}</h4>
					</div>
					<div className="testimonial_card_body">
						<p className="testimonial_comment text-sm">&quot;{review}&quot;</p>
						<p className="testimonial_rating text-sm mt-6">
							Rating: {rating}/10
						</p>
					</div>
				</>
			)}
		</div>
	);
}
