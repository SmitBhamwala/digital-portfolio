"use client";

import { CertificationModalProps } from "@/lib/types";
import Link from "next/link";
import { useEffect } from "react";
import { ImNewTab } from "react-icons/im";
import { IoMdClose } from "react-icons/io";

export default function CertificationModal({
  course,
  setCertificationModalOpen
}: CertificationModalProps) {
  useEffect(() => {
    document.body.classList.add("overflow-y-hidden");
    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, []);

  return (
    <>
      <div
        className="z-[1000] fixed top-0 left-0 w-full h-full bg-black opacity-55 dark:opacity-75 
        flex justify-center items-center"
        onClick={() => setCertificationModalOpen(false)}
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
            onClick={() => setCertificationModalOpen(false)}>
            <IoMdClose />
          </div>
          <h3 className="font-bold text-xl md:text-2xl">{course.title}</h3>
          <p className="font-normal text-sm md:text-[1rem] mt-2">
            by {course.tutor}
          </p>
          <p className="font-normal text-sm md:text-[1rem] !my-1">
            Duration: {course.duration}
          </p>
          <Link
            href={`/Certifications/${course.certIMG}`}
            target="_blank"
            className="text-sm md:text-[1rem] flex items-center w-fit bg-[#f3f4f6] dark:bg-[rgb(255, 255, 255)] dark:bg-opacity-5 
              px-4 py-3 mb-8 md:mb-0 rounded-xl 
              borderBlack shadow-lg shadow-black/[0.15] active:scale-95">
            View Certificate
            <div className="ml-2">
              <ImNewTab />
            </div>
          </Link>
          <div className="mt-4 md:mt-8 font-normal text-gray-700 dark:text-white/75">
            <p className="font-normal text-sm md:text-[1rem] mb-4">
              During this course, I gained valuable knowledge and hands-on
              experience with:
            </p>
            {course.description.map((task: String, index: number) => (
              <li
                key={index}
                className="list-disc mt-3 md:mt-2 text-xs md:text-[0.9rem] md:leading-6">
                {task}
              </li>
            ))}
          </div>
          <p className="!mt-0 block md:hidden">&nbsp;</p>
        </div>
      </dialog>
    </>
  );
}
