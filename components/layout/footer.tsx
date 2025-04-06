import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mb-5 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {currentYear} — Designed & developed by{" "}
        <Link
          href="https://www.linkedin.com/in/smitbhamwala"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-blue-500 dark:text-blue-400 underline underline-offset-1">
          Smit Bhamwala
        </Link>
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> Built with
        React 19 & Next.js 15 (App Router), TypeScript, Tailwind CSS, MongoDB,
        Shadcn/UI, Resend and Vercel hosting.
      </p>
    </footer>
  );
}
