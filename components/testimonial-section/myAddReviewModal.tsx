"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Form from "next/form";
import { IoMdClose } from "react-icons/io";

export default function MyAddReviewModal({
	sessionData,
	myReview,
	setMyReview,
	setAddReviewModalOpen
}: any) {
	useEffect(() => {
		document.body.classList.add("overflow-y-hidden");
		return () => {
			document.body.classList.remove("overflow-y-hidden");
		};
	}, []);

	const [testimonial, setTestimonial] = useState(myReview.testimonial);
	const [rating, setRating] = useState(myReview.rating);

	function handleTestimonialInputChange(e: any) {
		e.preventDefault();
		setTestimonial(e.target.value);
	}

	function handleRatingInputChange(e: any) {
		e.preventDefault();
		setRating(e.target.value);
	}

	// function submitTestimonial(e:any){
	//   e.preventDefault();
	//   setMyReview({
	//     ...myReview,
	//     testimonial: e.target.value
	//   });
	// }

	return (
		<>
			<div
				className="z-[1000] fixed top-0 left-0 w-full h-full bg-black opacity-55 dark:opacity-75 
        flex justify-center items-center"
				onClick={() => setAddReviewModalOpen(false)}
			/>
			<dialog
				className="z-[1001] fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center 
        bg-[#f3f4f6] dark:bg-gray-800 text-gray-700 dark:text-white/75 
         rounded-3xl max-w-[90%] xl:max-w-fit overflow-scroll md:overflow-hidden"
				open>
				{/* max-w-[90%] md:max-w-full */}
				<div className="relative pt-8 md:pt-6 pb-0 md:pb-6 px-4 md:px-10 h-fit max-h-[85vh]">
					<div
						className="absolute top-3 md:top-6 right-3 md:right-6 text-2xl cursor-pointer"
						onClick={() => setAddReviewModalOpen(false)}>
						<IoMdClose />
					</div>
					{/* <div className="borderBlack rounded-xl shadow-xl w-[22rem] h-[20rem] p-4 bg-[#f3f4f6] dark:bg-gray-800"> */}
					<Form action="/action_page.php">
						<div className="testimonial_card_header flex items-center my-6">
							<div className="linkedin_image_container mr-4">
								<Image
									src={sessionData.image}
									alt={`${sessionData.name}'s LinkedIn profile picture`}
									width="70"
									height="70"
									quality="85"
									priority={false}
									draggable={false}
									className="object-contain rounded-full bg-orange-400"
								/>
							</div>
							<h4 className="font-medium text-xl">{sessionData.name}</h4>
						</div>
						<div className="testimonial_card_body">
							<div>
								{myReview.testimonial.length !== 0 ? (
									<div className="flex flex-col">
										<label htmlFor="testimonial">Testimonial:</label>
										<textarea
											onChange={handleTestimonialInputChange}
											value={testimonial}
											rows={5}
											id="testimonial"
											name="testimonial"
											className="text-gray-900 font-medium rounded-md mt-2 mb-4 px-2 py-1 outline-none"
										/>
										<label htmlFor="rating">Rating:</label>
										<input
											type="number"
											min={1}
											max={10}
											onChange={handleRatingInputChange}
											value={rating}
											id="rating"
											name="rating"
											className="text-gray-900 font-medium rounded-md mt-2 mb-4 px-2 py-1 outline-none"
										/>
									</div>
								) : (
									<div className="flex flex-col">
										<label htmlFor="testimonial">Testimonial:</label>
										<textarea
											onChange={handleTestimonialInputChange}
											value={testimonial}
											rows={5}
											id="testimonial"
											name="testimonial"
											className="text-gray-900 font-medium rounded-md mt-2 mb-4 px-2 py-1 outline-none"
										/>
										<label htmlFor="rating">Rating:</label>
										<input
											type="number"
											min={1}
											max={10}
											onChange={handleRatingInputChange}
											value={rating}
											id="rating"
											name="rating"
											className="text-gray-900 font-medium rounded-md mt-2 mb-4 px-2 py-1 outline-none"
										/>
									</div>
								)}
							</div>
						</div>
						<div className="flex justify-center items-center">
							<button
								type="submit"
								onClick={() => setAddReviewModalOpen(false)}
								className="px-4 py-2 mt-6 text-white bg-blue-500 rounded-md hover:bg-blue-600">
								Submit
							</button>
						</div>
					</Form>
				</div>
				<p className="!mt-0 block md:hidden">&nbsp;</p>
			</dialog>
		</>
	);
}
