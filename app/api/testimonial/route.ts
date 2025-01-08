import { connectToDatabase } from "@/lib/mongodb";
import Testimonial from "@/models/TestimonialModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
	await connectToDatabase();
	const testimonials = await Testimonial.find();
	return NextResponse.json(testimonials);
}

export async function POST(request: NextRequest) {
	const message = await request.json();

	try {
		await Testimonial.updateOne(
			{ email: message.testimonial.email },
			message.testimonial,
			{ upsert: true }
		);
	} catch (error) {
		return NextResponse.json({ error });
	}

	return NextResponse.json({ message: "Testimonial added successfully" });
}
