"use client";

import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { TestimonialType } from "@/lib/types";
import { Input } from "../ui/input";
import { LogOut, Pencil, Plus, Save, Trash2, X } from "lucide-react";
import { Rating } from "react-simple-star-rating";
import { useCustomToast } from "@/hooks/useCustomToast";
import Link from "next/link";

export default function MyReviewCard() {
	const { showToast } = useCustomToast();
	const { data: session } = useSession();
	const name = session?.user?.name;
	const image = session?.user?.image;
	const email = session?.user?.email;

	const [isEditingTestimonial, setEditingTestimonial] = useState(false);

	const [myTestimonial, setMyTestimonial] = useState<TestimonialType>({
		name: name!,
		email: email!,
		LinkedInId: "",
		image: image!,
		review: "",
		rating: 10
	});

	const [review, setReview] = useState("");
	const [rating, setRating] = useState(10);

	useEffect(() => {
		async function fetchPosts() {
			const res = await fetch("/api/testimonial", {
				headers: {
					"x-secret-key": process.env.NEXT_PUBLIC_API_SECRET || ""
				},
				cache: "no-store"
			});
			const data = await res.json();
			const userTestimonial = data.filter(
				(testimonial: TestimonialType) =>
					testimonial.email === session?.user?.email
			);
			if (userTestimonial[0]) {
				setMyTestimonial(userTestimonial[0]);
				setReview(userTestimonial[0].review);
				setRating(userTestimonial[0].rating);
			}
		}
		fetchPosts();
	}, [session]);

	async function submitTestimonial() {
		try {
			const response = await fetch("/api/testimonial", {
				method: "POST",
				body: JSON.stringify({
					testimonial: {
						name: myTestimonial.name,
						email: myTestimonial.email,
						LinkedInId: myTestimonial.LinkedInId,
						image: myTestimonial.image,
						review: review,
						rating: rating
					}
				}),
				headers: {
					"Content-Type": "application/json",
					"x-secret-key": process.env.NEXT_PUBLIC_API_SECRET || ""
				}
			});

			const message = await response.json();

			if (message.error) {
				showToast("error", message.error);
				return;
			}

			setMyTestimonial({
				...myTestimonial,
				review: review,
				rating: rating
			});

			showToast("success", message.message);
		} catch (error: any) {
			showToast("error", error.message || "Something went wrong.");
		}
	}

	async function deleteTestimonial() {
		try {
			const res = await fetch("/api/testimonial", {
				method: "DELETE",
				body: JSON.stringify({
					testimonial: {
						name: myTestimonial.name,
						email: myTestimonial.email,
						LinkedInId: myTestimonial.LinkedInId,
						image: myTestimonial.image,
						review: "",
						rating: 10
					}
				}),
				headers: {
					"Content-Type": "application/json",
					"x-secret-key": process.env.NEXT_PUBLIC_API_SECRET || ""
				}
			});

			const message = await res.json();

			if (message.error) {
				showToast("error", message.error);
				return;
			}

			// Reset state after successful delete
			setReview("");
			setRating(10);
			setMyTestimonial({
				...myTestimonial,
				review: "",
				rating: 10
			});

			showToast("success", message.message);
		} catch (error: { error: string } | any) {
			showToast("error", error?.error || "Something went wrong.");
		}
	}

	return (
		<div className="borderBlack rounded-xl shadow-none h-[17rem] p-4 bg-[#f3f4f6] dark:bg-gray-800">
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
						className="object-contain rounded-full outline outline-orange-600 outline-2"
					/>
				</div>
				<h4 className="font-medium text-lg">{name}</h4>
				{myTestimonial.LinkedInId && (
					<Link
						href={`https://www.linkedin.com/in/${myTestimonial.LinkedInId}/`}
						target="_blank"
						className="linkedin_icon_container ml-auto">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							width="30"
							height="30"
							viewBox="0 0 48 48">
							<path
								fill="#0078d4"
								d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path>
							<path
								d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
								opacity=".05"></path>
							<path
								d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
								opacity=".07"></path>
							<path
								fill="#fff"
								d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
						</svg>
					</Link>
				)}
			</div>
			<div className="testimonial_card_body">
				{myTestimonial.review ? (
					<div>
						{isEditingTestimonial ? (
							<form
								onSubmit={(e) => {
									e.preventDefault();
									submitTestimonial();
									setEditingTestimonial(false);
								}}
								className="flex justify-between flex-col h-[11rem]">
								<div>
									<Input
										type="text"
										required
										placeholder="Review"
										value={review}
										maxLength={130}
										onChange={(e) => {
											setReview(e.target.value);
										}}
										className="text-sm rounded-lg borderBlack bg-white dark:bg-opacity-10 dark:text-gray-300 transition-all outline-none focus-visible:ring-0"
									/>
									<span className="text-gray-500 text-xs">
										{review.length} / 130
									</span>
									<div className="flex items-center justify-start my-4">
										<Rating
											initialValue={rating / 2}
											allowFraction
											className="react-simple-star-rating edit-rating"
											iconsCount={5}
											fillColorArray={[
												"red",
												"red",
												"#F6412D",
												"#F6412D",
												"#FF9800",
												"#FF9800",
												"#FFC100",
												"#FFC100",
												"#FFEC19",
												"#FFEC19"
											]}
											onClick={(rate: number) => {
												setRating(rate * 2);
											}}
										/>
									</div>
								</div>
								<div className="flex justify-start items-center gap-2">
									<button
										type="submit"
										className="lg:w-fit mt-3 text-sm text-center bg-green-600 text-white px-4 py-2 flex justify-center items-center gap-2 rounded-xl outline-none active:scale-95 transition">
										<Save size={18} />
									</button>
									<button
										type="reset"
										onClick={() => {
											setReview(myTestimonial.review);
											setRating(myTestimonial.rating);
											setEditingTestimonial(false);
										}}
										className="lg:w-fit mt-3 text-sm text-center justify-center bg-red-600 text-white px-4 py-2 flex items-center gap-2 rounded-xl outline-none active:scale-95 transition">
										<X size={18} />
									</button>
								</div>
							</form>
						) : (
							<div className="flex flex-col justify-between h-[11rem]">
								<div>
									<p className="testimonial_comment text-sm">
										&quot;{myTestimonial.review}&quot;
									</p>
									<Rating
										initialValue={myTestimonial.rating / 2}
										allowFraction
										readonly
										className="react-simple-star-rating mt-4"
										iconsCount={5}
										fillColorArray={[
											"red",
											"red",
											"#F6412D",
											"#F6412D",
											"#FF9800",
											"#FF9800",
											"#FFC100",
											"#FFC100",
											"#FFEC19",
											"#FFEC19"
										]}
									/>
								</div>
								<div className="flex items-center justify-start gap-2 mt-2">
									<button
										onClick={() => setEditingTestimonial(true)}
										className="lg:w-fit mt-3 text-sm text-center justify-center bg-blue-500 text-white px-4 py-2 flex items-center gap-2 rounded-xl outline-none active:scale-95 transition">
										<Pencil size={18} />
									</button>
									<button
										onClick={() => {
											deleteTestimonial();
										}}
										className="lg:w-fit mt-3 text-sm text-center justify-center bg-red-600 text-white px-4 py-2 flex items-center gap-2 rounded-xl outline-none active:scale-95 transition">
										<Trash2 size={18} />
									</button>
									<button
										type="button"
										onClick={() => signOut()}
										className="lg:w-fit mt-3 text-sm text-center justify-center bg-gray-900 text-white px-4 py-2 flex gap-2 rounded-xl outline-none hover:bg-gray-950 active:scale-95 dark:bg-gray-500 transition">
										<LogOut size={18} /> LogOut
									</button>
								</div>
							</div>
						)}
					</div>
				) : (
					<>
						<form
							onSubmit={(e) => {
								e.preventDefault();
								submitTestimonial();
							}}
							className="flex justify-between flex-col h-[11rem]">
							<div>
								<Input
									type="text"
									required
									placeholder="Review"
									value={review}
									maxLength={130}
									onChange={(e) => {
										setReview(e.target.value);
									}}
									className="text-sm rounded-lg borderBlack bg-white dark:bg-opacity-10 dark:text-gray-300 transition-all outline-none focus-visible:ring-0"
								/>
								<span className="text-gray-500 text-xs">
									{review.length} / 130
								</span>
								<div className="flex items-center justify-start my-4">
									<Rating
										initialValue={rating / 2}
										allowFraction
										className="react-simple-star-rating add-rating"
										iconsCount={5}
										fillColorArray={[
											"red",
											"red",
											"#F6412D",
											"#F6412D",
											"#FF9800",
											"#FF9800",
											"#FFC100",
											"#FFC100",
											"#FFEC19",
											"#FFEC19"
										]}
										onClick={(rate: number) => {
											setRating(rate * 2);
										}}
									/>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<button
									type="submit"
									className="lg:w-fit mt-3 text-sm text-center justify-center bg-green-600 text-white px-4 py-2 flex gap-2 rounded-xl outline-none active:scale-95 transition">
									<Plus size={18} /> Add
								</button>
								<button
									type="button"
									onClick={() => signOut()}
									className="lg:w-fit mt-3 text-sm text-center justify-center bg-gray-900 text-white px-4 py-2 flex gap-2 rounded-xl outline-none hover:bg-gray-950 active:scale-95 dark:bg-gray-500 transition">
									<LogOut size={18} /> LogOut
								</button>
							</div>
						</form>
					</>
				)}
			</div>
		</div>
	);
}
