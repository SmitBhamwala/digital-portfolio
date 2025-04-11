"use client";

import { ExperienceModalProps } from "@/lib/types";
import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

export default function ExperienceModal({
  item,
  setExperienceModalOpen
}: ExperienceModalProps) {
  useEffect(() => {
    document.body.classList.add("overflow-y-hidden");
    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, []);

  return (
    <>
      <div
        className="z-1000 fixed top-0 left-0 w-full h-full bg-black opacity-55 dark:opacity-75 
        flex justify-center items-center"
        onClick={() => setExperienceModalOpen(false)}
      />
      <dialog
        className="z-1001 fixed inset-0 flex justify-center items-center m-auto
        bg-[#f3f4f6] dark:bg-gray-800 text-gray-700 dark:text-white/75 
         rounded-3xl max-w-[90%] xl:max-w-[70vw] overflow-scroll md:overflow-hidden"
        open>
        {/* max-w-[90%] md:max-w-full */}
        <div className="relative pt-8 md:pt-6 pb-0 md:pb-6 px-4 md:px-10 h-fit max-h-[85vh]">
          <div
            className="absolute top-3 md:top-6 right-3 md:right-6 text-2xl cursor-pointer"
            onClick={() => setExperienceModalOpen(false)}>
            <IoMdClose />
          </div>
          <h3 className="font-bold text-xl md:text-2xl">{item.title}</h3>
          <p className="font-normal text-sm md:text-[1rem] mt-1! !md:mt-2">
            {item.location}
          </p>
          <p className="font-normal text-sm md:text-[1rem] my-1!">
            {item.date}
          </p>
          <div className="mt-8 font-normal text-gray-700 dark:text-white/75">
            {/* <p className="font-normal text-sm md:text-[1rem] mb-4">
							During this course, I gained valuable knowledge and hands-on
							experience with:
						</p> */}
            {item.description.map((task: String, index: number) => (
              <li
                key={index}
                className="list-disc mt-3 md:mt-2 text-xs md:text-[0.9rem] leading-5 md:leading-6">
                {task}
              </li>
            ))}
          </div>
          <p className="mt-0! block md:hidden">&nbsp;</p>
        </div>
      </dialog>
    </>
  );
}
