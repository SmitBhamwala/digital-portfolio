import { connectToDatabase } from "@/lib/mongodb";
import { TestimonialType } from "@/lib/types";
import Testimonial from "@/models/TestimonialModel";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function GET(request: NextRequest) {
	const secret = request.headers.get("x-secret-key");
	console.log("Referrer: " + request.headers.get("referer"));
	
  if (secret !== process.env.NEXT_PUBLIC_API_SECRET) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

	const referer = request.headers.get("referer") || "";
	const allowedReferers = [
		"https://smitbhamwala.vercel.app/",
		"http://localhost:3000/"
	];

	const isAllowed = allowedReferers.some(url => referer.startsWith(url));

	if (!isAllowed) {
		return NextResponse.json({ error: "Forbidden" }, { status: 403 });
	}
	
	await connectToDatabase();
	const testimonials = await Testimonial.find();

	return NextResponse.json(testimonials);
}

export async function POST(request: NextRequest) {
	const session = await auth();
	if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

	const secret = request.headers.get("x-secret-key");
  if (secret !== process.env.NEXT_PUBLIC_API_SECRET) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

	const message = await request.json();
	const testimonial: TestimonialType = message.testimonial;

	if (testimonial.email !== session.user?.email) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	const trimmedReview = testimonial.review.replace(/^\s+|\s+$/g, "");
	if (trimmedReview.length > 130) {
		return NextResponse.json({
			error: "Review must be less than 130 characters"
		});
	}
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

export async function DELETE(request: NextRequest) {
	const session = await auth();
	if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

	const secret = request.headers.get("x-secret-key");
  if (secret !== process.env.NEXT_PUBLIC_API_SECRET) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

	const message = await request.json();
	const testimonial: TestimonialType = message.testimonial;
	
	if (testimonial.email !== session.user?.email) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	try {
		await Testimonial.updateOne({ email: testimonial.email }, testimonial, {
			upsert: true
		});
	} catch (error) {
		return NextResponse.json({ error });
	}

	return NextResponse.json({ message: "Testimonial deleted successfully" });
}
