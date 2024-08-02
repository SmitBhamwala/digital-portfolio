"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { certificationsData } from "@/lib/data";

export default function ImagePage({ params }: any) {
	const { courseID } = params;

	const course = certificationsData.find((course) => course.id == courseID);

	if (!course) {
		notFound();
	}

	return (
		<div className="fullscreen-image">
			<Image
				src={`/Certifications/${course.certIMG}`}
				width="300"
				height="300"
				alt={course.title}
			/>
		</div>
	);
}
