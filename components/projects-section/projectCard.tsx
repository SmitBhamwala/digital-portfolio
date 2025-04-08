"use client";

import { Button } from "@/components/ui/button";
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
    <Card className="border-none rounded-2xl shadow-md bg-white dark:bg-gray-800">
      <Carousel
        setApi={setApi}
        opts={{ align: "start" }}
        plugins={[Autoplay({ delay: 4000 })]}
        className="w-full max-w-full overflow-hidden rounded-2xl">
        <CarouselContent className="h-56 md:h-52 lg:h-48">
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
                  className="object-fill rounded-2xl"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
      <div className="hidden lg:block">
        {count > 1 && (
          <div className="flex justify-center gap-2 mt-4">
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
      </div>
      <CardHeader>
        <CardTitle className="text-center mb-2 md:mb-0">{title}</CardTitle>
        <CardDescription className="text-justify block md:hidden">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-1">
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
          <Button
            type="button"
            className="rounded-lg text-sm flex gap-2 items-center justify-center text-center bg-gray-900 dark:bg-gray-200 hover:bg-gray-950 text-white dark:text-black outline-none active:scale-95 transition">
            <BsGithub />
            <Link href={demoURL} target="_blank">
              Demo
            </Link>
          </Button>
          <Button
            type="button"
            className="rounded-lg text-sm flex gap-2 items-center justify-center text-center bg-gray-900 dark:bg-gray-200 hover:bg-gray-950 text-white dark:text-black outline-none active:scale-95 transition">
            <BsGithub />
            <Link href={sourceCodeURL} target="_blank">
              Source Code
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
