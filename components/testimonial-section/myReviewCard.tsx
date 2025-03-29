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
		<div className="borderBlack rounded-xl shadow-xl h-[15rem] p-4 bg-[#f3f4f6] dark:bg-gray-800">
			<div className="testimonial_card_header flex items-center mb-6">
				<div className="linkedin_image_container mr-4">
					<Image
						src={image!}
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
				{myReview?.testimonial ? (
					<div>
						<p className="testimonial_comment text-sm">
							&quot;{myReview.testimonial}&quot;
						</p>
						<p className="testimonial_rating mt-6 text-sm">
							Rating: {myReview.rating}/10
						</p>
						<button
							onClick={() => setAddReviewModalOpen(true)}
							className="lg:w-fit mt-3 text-sm text-center justify-center bg-gray-900 text-white px-4 py-2 flex items-center gap-2 rounded-xl outline-none hover:bg-gray-950 active:scale-95 dark:bg-gray-500 transition">
							Edit your review
						</button>
					</div>
				) : (
					<button
						onClick={() => setAddReviewModalOpen(true)}
						className="lg:w-fit mt-3 text-sm text-center justify-center bg-gray-900 text-white px-4 py-2 flex items-center gap-2 rounded-xl outline-none hover:bg-gray-950 active:scale-95 dark:bg-gray-500 transition">
						Add a review
					</button>
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
			<button
				onClick={() => signOut()}
				className="lg:w-fit mt-3 text-sm text-center justify-center bg-gray-900 text-white px-4 py-2 flex items-center gap-2 rounded-xl outline-none hover:bg-gray-950 active:scale-95 dark:bg-gray-500 transition">
				LogOut
			</button>
		</div>
	);
}
