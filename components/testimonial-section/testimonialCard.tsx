import { TestimonialType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { Rating } from "react-simple-star-rating";
import "./test.css";

export default function TestimonialCard({
  name,
  review,
  image,
  rating,
  LinkedInId
}: TestimonialType) {
  return (
    <div className="rounded-2xl shadow-md bg-white dark:bg-gray-800 p-6 h-full flex flex-col justify-start transition-transform duration-300 hover:scale-[1.02]">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <Image
            src={image}
            alt={`${name}'s photo`}
            width={48}
            height={48}
            className="rounded-full ring-2 ring-orange-500"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h4 className="text-base font-semibold text-gray-800 dark:text-gray-100">
              {name}
            </h4>
            {LinkedInId && (
              <Link
                href={`https://www.linkedin.com/in/${LinkedInId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:opacity-90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="w-5 h-5 fill-current">
                  <path
                    fill="#0078d4"
                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
                  <path
                    fill="#fff"
                    d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12
                    c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698
                    c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19
                    c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
                  />
                </svg>
              </Link>
            )}
          </div>
          <Rating
            initialValue={rating / 2}
            readonly
            allowFraction
            size={20}
            className="react-simple-star-rating"
            fillColorArray={[
              "#ff0000",
              "#ff1a00",
              "#ff3300",
              "#ff4d00",
              "#ff6600",
              "#ff8000",
              "#ff9900",
              "#f59e0b",
              "#f59e0b",
              "#ffb000"
            ]}
          />
        </div>
      </div>

      {/* Body */}
      <div className="mt-4">
        <p className="italic text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          “{review}”
        </p>
      </div>
    </div>
  );
}
