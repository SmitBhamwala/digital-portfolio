import { connectToDatabase } from "@/lib/mongodb";
import Testimonial from "@/models/TestimonialModel";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDatabase();
  const testimonials = await Testimonial.find();
	return NextResponse.json(testimonials);
}
