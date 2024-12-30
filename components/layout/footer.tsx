export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="mb-5 text-center text-gray-500">
			<small className="mb-2 block text-xs">
				&copy; {currentYear} Smit Bhamwala. All rights reserved.
			</small>
			<p className="text-xs">
				<span className="font-semibold">About this website:</span> Built with
				React & Next.js 14 (App Router & Server Actions), TypeScript, Tailwind
				CSS, React Email, Resend and Vercel hosting.
			</p>
		</footer>
	);
}
