import Link from "next/link";
import { RiArrowGoBackFill } from "react-icons/ri";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] w-full">
      <h2 className="text-gray-700 dark:text-white/75 font-semibold text-2xl md:text-5xl mb-8">
        Sorry, Page Not Found
      </h2>
      <Link
        href="/"
        className="flex justify-center items-center bg-[#f3f4f6] dark:bg-white/5
        px-4 py-3 rounded-xl text-[1rem] md:text-3xl xl:text-xl text-gray-700 dark:text-white/75 
        shadow-lg shadow-black/[0.15] backdrop-blur-[0.5rem] active:scale-95">
        Return home{" "}
        <span className="ml-2">
          <RiArrowGoBackFill />
        </span>
      </Link>
    </div>
  );
}
