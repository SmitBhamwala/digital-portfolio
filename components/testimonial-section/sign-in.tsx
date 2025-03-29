"use client";

import { signIn, useSession } from "next-auth/react";

export default function SignIn() {
	const { data: session } = useSession();

	return (
		<>
			{!session && (
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
