"use client";

import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState, useRef } from "react";
import { TestimonialType } from "@/lib/types";
import MyAddReviewModal from "./myAddReviewModal";

export default function MyReviewCard() {
	const { data: session } = useSession();
	const name = session?.user?.name;
	const image = session?.user?.image;
	const email = session?.user?.email;

	const [isAddReviewModalOpen, setAddReviewModalOpen] = useState(false);

	const [myReview, setMyReview] = useState<TestimonialType>({
		name: name!,
		email: email!,
		image: image!,
		testimonial: "",
		rating: 10
	});

	useEffect(() => {
		async function fetchPosts() {
			const res = await fetch("http://localhost:3000/api/testimonial", {
				cache: "no-store"
			});
			const data = await res.json();
			const myReview = data.filter(
				(review: TestimonialType) => review.email === session?.user?.email
			);
			if (myReview[0]) {
				setMyReview(myReview[0]);
			}
		}
		fetchPosts();
	}, [session]);

	return (
		<div className="borderBlack rounded-xl shadow-xl w-[22rem] h-[20rem] p-4 bg-[#f3f4f6] dark:bg-gray-800">
			<div className="testimonial_card_header flex items-center mb-6">
				<div className="linkedin_image_container mr-4">
					<Image
						src={image!}
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
			<div className="testimonial_card_body">
				{myReview?.testimonial ? (
					<div>
						<p className="testimonial_comment">
							&quot;{myReview.testimonial}&quot;
						</p>
						<p className="testimonial_rating mt-6">
							Rating: {myReview.rating}/10
						</p>
						<div className="lg:w-fit mt-3 text-center justify-center bg-gray-900 text-white px-4 py-2 flex items-center gap-2 rounded-xl outline-none hover:bg-gray-950 active:scale-95 dark:bg-gray-500 transition">
							<button onClick={() => setAddReviewModalOpen(true)}>
								Edit your review
							</button>
						</div>
					</div>
				) : (
					<div className="lg:w-fit mt-3 text-center justify-center bg-gray-900 text-white px-4 py-2 flex items-center gap-2 rounded-xl outline-none hover:bg-gray-950 active:scale-95 dark:bg-gray-500 transition">
						<button onClick={() => setAddReviewModalOpen(true)}>
							Add a review
						</button>
					</div>
				)}
				{isAddReviewModalOpen && (
					<div>
						<MyAddReviewModal
							sessionData={session!.user}
							myReview={myReview}
							setMyReview={setMyReview}
							setAddReviewModalOpen={setAddReviewModalOpen}
						/>
					</div>
				)}
			</div>
			<div className="lg:w-fit mt-3 text-center justify-center bg-gray-900 text-white px-4 py-2 flex items-center gap-2 rounded-xl outline-none hover:bg-gray-950 active:scale-95 dark:bg-gray-500 transition">
				<button onClick={() => signOut()}>LogOut</button>
			</div>
		</div>
	);
}
