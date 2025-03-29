import { connectToDatabase } from "@/lib/mongodb";
import { TestimonialType } from "@/lib/types";
import Testimonial from "@/models/TestimonialModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
	await connectToDatabase();
	const testimonials = await Testimonial.find();

	return NextResponse.json(testimonials);
}

export async function POST(request: NextRequest) {
	const message = await request.json();
	const testimonial: TestimonialType = message.testimonial;
	const trimmedReview = testimonial.review.replace(/^\s+|\s+$/g, "");
	if (trimmedReview.length < 1) {
		return NextResponse.json({ error: "Review is required" });
	}
	if (testimonial.rating < 1 || testimonial.rating > 10) {
		return NextResponse.json({ error: "Rating must be between 1 and 10" });
	}

	try {
		await Testimonial.updateOne(
			{ email: testimonial.email },
			{ ...testimonial, review: trimmedReview },
			{
				upsert: true
			}
		);
	} catch (error) {
		return NextResponse.json({ error });
	}

	return NextResponse.json({ message: "Testimonial added successfully" });
}
