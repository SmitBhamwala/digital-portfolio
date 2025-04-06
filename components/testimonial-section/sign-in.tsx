"use client";

import { signIn, useSession } from "next-auth/react";

export default function SignIn() {
	const { data: session } = useSession();

	async function handleSignIn() {
		await signIn("linkedin");
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
					<span> with LinkedIn to add a review</span>
				</div>
			)}
		</>
	);
}
