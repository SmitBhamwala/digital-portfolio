"use client";

// import LoginUsingLinkedIn from "@/actions/login";
import { signIn, useSession } from "next-auth/react";
import MyReviewCard from "./myReviewCard";

export default function SignIn() {
	const { data: session } = useSession();

	return (
		<>
			{session ? (
				<MyReviewCard />
			) : (
				<div>
					<button onClick={() => signIn("linkedin")}>
						<u>SignIn with LinkedIn</u>
					</button>
					<span> to add a review</span>
				</div>
			)}
		</>
	);
}
