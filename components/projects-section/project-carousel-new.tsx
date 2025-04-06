import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const imgs = [
  "/homeoKart.png",
  "/homeoKart-1.png",
  "/nextFoodies.png",
  "/nextFoodies-1.png"
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50
};

export const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  const prev = () =>
    setImgIndex((curr) => (curr === 0 ? imgs.length - 1 : curr - 1));
  const next = () =>
    setImgIndex((curr) => (curr === imgs.length - 1 ? 0 : curr + 1));

  // useEffect(() => {
  // 	const intervalRef = setInterval(() => {
  // 		const x = dragX.get();

  // 		if (x === 0) {
  // 			setImgIndex((pv) => {
  // 				if (pv === imgs.length - 1) {
  // 					return 0;
  // 				}
  // 				return pv + 1;
  // 			});
  // 		}
  // 	}, AUTO_DELAY);

  // 	return () => clearInterval(intervalRef);
  // }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0
        }}
        style={{
          x: dragX
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex w-full h-fit cursor-grab items-center active:cursor-grabbing">
        {imgs.map((imgSrc, idx) => {
          return (
            <motion.div
              key={idx}
              style={{
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: "contain"
                // backgroundPosition: "center"
              }}
              // animate={{
              // 	scale: imgIndex === idx ? 0.95 : 0.85
              // }}
              transition={SPRING_OPTIONS}
              className="w-full h-[12rem] shrink-0 rounded-xl"
            />
          );
        })}
      </motion.div>

      <div className="absolute inset-1 flex items-center justify-between p-4">
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
          {imgs.map((_, i) => (
            <div
              key={i}
              onClick={() => setImgIndex(i)}
              className={`
              transition w-3 h-3 bg-white rounded-full cursor-pointer
              ${imgIndex === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
      {/* <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} /> */}
      {/* <GradientEdges /> */}
    </div>
  );
};

const Images = ({ imgIndex }: any) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-full shrink-0 rounded-xl bg-neutral-800 object-cover"
          />
        );
      })}
    </>
  );
};

// const Dots = ({ imgIndex, setImgIndex }: any) => {
// 	return (
// 		<div className="mt-4 flex w-full justify-center gap-2">
// 			{imgs.map((_, idx) => {
// 				return (
// 					<button
// 						key={idx}
// 						onClick={() => setImgIndex(idx)}
// 						className={`h-3 w-3 rounded-full transition-colors ${
// 							idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
// 						}`}
// 					/>
// 				);
// 			})}
// 		</div>
// 	);
// };

// const GradientEdges = () => {
// 	return (
// 		<>
// 			<div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
// 			<div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
// 		</>
// 	);
// };
