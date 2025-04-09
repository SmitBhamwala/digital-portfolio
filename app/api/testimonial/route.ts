import { auth } from "@/lib/auth";
import { connectToDatabase } from "@/lib/mongodb";
import { TestimonialType } from "@/lib/types";
import Testimonial from "@/models/TestimonialModel";
import { NextRequest, NextResponse } from "next/server";

function isRequestValid(request: NextRequest) {
  const secret = request.headers.get("x-secret-key");
  const referer = request.headers.get("referer") || "";

  const allowedReferers = [
    "https://smitbhamwala.vercel.app/",
    "http://localhost:3000/"
  ];

  const isRefererAllowed = allowedReferers.some((url) =>
    referer.startsWith(url)
  );

  return {
    valid: secret === process.env.NEXT_PUBLIC_API_SECRET && isRefererAllowed,
    error: !isRefererAllowed ? "Forbidden referer" : "Invalid API secret"
  };
}

export async function GET(request: NextRequest) {
  const { valid, error } = isRequestValid(request);
  if (!valid) {
    return NextResponse.json({ error }, { status: 403 });
  }

  try {
    await connectToDatabase();
    const testimonials = await Testimonial.find();
    return NextResponse.json(testimonials);
  } catch (err) {
    console.error("GET error:", err);
    return NextResponse.json(
      { error: "Failed to fetch testimonials" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { valid, error } = isRequestValid(request);
  if (!valid) {
    return NextResponse.json({ error }, { status: 403 });
  }

  const { testimonial }: { testimonial: TestimonialType } =
    await request.json();

  if (testimonial.email !== session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const trimmedReview = testimonial.review.trim();
  const trimmedLinkedInId = testimonial.LinkedInId.trim();

  if (trimmedReview.length < 1 || trimmedReview.length > 130) {
    return NextResponse.json(
      { error: "Review must be between 1 and 130 characters" },
      { status: 400 }
    );
  }

  if (trimmedLinkedInId.length < 1 || trimmedLinkedInId.length > 40) {
    return NextResponse.json(
      { error: "LinkedIn ID must be between 1 and 40 characters" },
      { status: 400 }
    );
  }

  if (testimonial.rating < 1 || testimonial.rating > 10) {
    return NextResponse.json(
      { error: "Rating must be between 1 and 10" },
      { status: 400 }
    );
  }

  try {
    await connectToDatabase();

    await Testimonial.updateOne(
      { email: testimonial.email },
      { ...testimonial, review: trimmedReview, linkedInId: trimmedLinkedInId },
      { upsert: true }
    );

    return NextResponse.json({ message: "Testimonial added successfully" });
  } catch (err) {
    console.error("POST error:", err);
    return NextResponse.json(
      { error: "Failed to add testimonial" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { valid, error } = isRequestValid(request);
  if (!valid) {
    return NextResponse.json({ error }, { status: 403 });
  }

  const { testimonial }: { testimonial: TestimonialType } =
    await request.json();

  if (testimonial.email !== session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectToDatabase();

    // await Testimonial.deleteOne({ email: testimonial.email });
    await Testimonial.updateOne({ email: testimonial.email }, testimonial, {
      upsert: true
    });

    return NextResponse.json({ message: "Testimonial deleted successfully" });
  } catch (err) {
    console.error("DELETE error:", err);
    return NextResponse.json(
      { error: "Failed to delete testimonial" },
      { status: 500 }
    );
  }
}
