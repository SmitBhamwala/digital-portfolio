"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function SignIn() {
	const { data: session } = useSession();

	return (
		<>
			{!session ? (
				<div>
					<button onClick={() => signIn("linkedin")}>
						<u>SignIn with LinkedIn</u>
					</button>
					<span> to add/edit a review</span>
				</div>
			) : (
				<div>
					<button onClick={() => signOut()}>
						<u>Logout</u>
					</button>
				</div>
			)}
		</>
	);
}
