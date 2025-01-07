import { connectToDatabase } from "@/lib/mongodb";
import Testimonial from "@/models/TestimonialModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
	await connectToDatabase();
	const testimonials = await Testimonial.find();
	return NextResponse.json(testimonials);
}

export async function POST(request: NextRequest) {
	await connectToDatabase();
	console.log(request.body);

	// const { name, email, image, testimonial, rating } = request.body;
}
