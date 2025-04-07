import Image from "next/image";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Carousel({
  autoSlide = false,
  autoSlideInterval = 3000,
  slides
}: {
  autoSlide?: boolean;
  autoSlideInterval?: number;
  slides: string[];
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div
        className="w-full h-[16rem] !rounded-lg
        flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}>
        {slides.map((img, index) => (
          <Image
            key={index}
            src={img}
            width={2000}
            height={2000}
            alt="Project I worked on"
            quality={95}
            loading="lazy"
            className="w-full h-full !rounded-lg object-fill"
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="text-3xl text-center p-0 m-0 rounded-full border-0 shadow bg-white/80 text-gray-500 hover:bg-white">
          <FaAngleLeft />
        </button>
        <button
          onClick={next}
          className="text-3xl text-center p-0 m-0 rounded-full border-0 shadow bg-white/80 text-gray-500 hover:bg-white">
          <FaAngleRight />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurr(i)}
              className={`
              transition w-3 h-3 bg-white rounded-full cursor-pointer
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
