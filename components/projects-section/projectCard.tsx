"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import { projectsData } from "@/lib/data";
import clsx from "clsx";
import Autoplay from "embla-carousel-autoplay";
import { RocketIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";

type ProjectProps = (typeof projectsData)[number];

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  demoURL,
  sourceCodeURL
}: ProjectProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    const updateCount = () => {
      const snapList = api.scrollSnapList();
      setCount(snapList.length);
    };

    updateCount();
    updateCurrent();

    api.on("select", updateCurrent);
    api.on("reInit", updateCount);
    api.on("reInit", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
      api.off("reInit", updateCount);
      api.off("reInit", updateCurrent);
    };
  }, [api]);

  return (
    <Card className="border-none rounded-2xl shadow-md bg-white dark:bg-gray-800 pt-0 gap-0">
      <Carousel
        setApi={setApi}
        opts={{ align: "start" }}
        plugins={[Autoplay({ delay: 4000 })]}
        className="w-full max-w-full overflow-hidden rounded-2xl">
        <CarouselContent className="h-[13rem] md:h-[12.8rem] lg:h-[16rem]">
          {imageUrl.map((url, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center h-full hover:cursor-grab active:cursor-grabbing">
              <div className="relative w-full h-full">
                <Image
                  src={url || ""}
                  alt={`${title} project's photo`}
                  quality={100}
                  loading="lazy"
                  draggable={false}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-fill rounded-2xl"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
      {count > 1 && (
        <div className="flex justify-center gap-2 mt-3">
          {Array.from({ length: count }).map((_, i) => (
            <div
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={clsx(
                "h-2 w-2 rounded-full cursor-pointer transition-all duration-300",
                {
                  "bg-gray-700 dark:bg-gray-300 scale-110": i + 1 === current,
                  "bg-gray-300 dark:bg-gray-700": i + 1 !== current
                }
              )}
            />
          ))}
        </div>
      )}
      <CardHeader className="pt-4">
        <CardTitle className="text-center text-xl mb-2 md:mb-0">
          {title}
        </CardTitle>
        <CardDescription className="text-justify">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center flex-wrap gap-1 my-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs font-medium text-gray-500 dark:text-gray-400 px-3 py-2 
          bg-gray-100 dark:bg-gray-900 rounded-full">
            {tag}
          </span>
        ))}
      </CardContent>
      <CardFooter>
        <div className="flex justify-center items-center gap-2 w-full">
          <Link
            href={demoURL}
            target="_blank"
            className="font-medium rounded-xl py-2 px-3 text-sm flex gap-2 items-center justify-center text-center bg-gray-900 dark:bg-gray-300 hover:bg-gray-950 text-white dark:text-black outline-hidden active:scale-95 transition">
            <RocketIcon className="h-4 w-4" />
            Demo
          </Link>
          <Link
            href={sourceCodeURL}
            target="_blank"
            className="font-medium rounded-xl py-2 px-3 text-sm flex gap-2 items-center justify-center text-center bg-gray-900 dark:bg-gray-300 hover:bg-gray-950 text-white dark:text-black outline-hidden active:scale-95 transition">
            <BsGithub className="h-4 w-4" />
            Source Code
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
