"use client";

import { signIn, useSession } from "next-auth/react";

export default function SignIn() {
	const { data: session } = useSession();
	// const router = useRouter();

	async function handleSignIn() {
		await signIn("linkedin");

		// if (session) {
		// 	const name = session?.user?.name;
		// 	const image = session?.user?.image;
		// 	const email = session?.user?.email;

		// 	const res = await fetch("http://localhost:3000/api/testimonial", {
		// 		method: "POST",
		// 		body: JSON.stringify({
		// 			testimonial: {
		// 				name,
		// 				email,
		// 				LinkedInId: "",
		// 				image,
		// 				review: "",
		// 				rating: 10
		// 			}
		// 		}),
		// 		headers: {
		// 			"Content-Type": "application/json"
		// 		}
		// 	});
		// 	console.log(await res.json());
		// }
	}

	return (
		<>
			{!session && (
				<div className="text-sm">
					<button
						onClick={async () => {
							await handleSignIn();
						}}>
						<u className="text-blue-600 dark:text-blue-500 font-bold tracking-wider">
							SignIn
						</u>
					</button>
					<span> with LinkedIn to add/edit a review</span>
				</div>
			)}
		</>
	);
}
