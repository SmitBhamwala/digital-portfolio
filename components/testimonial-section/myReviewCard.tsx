"use client";

import { useCustomToast } from "@/hooks/useCustomToast";
import { TestimonialType } from "@/lib/types";
import { LogOut, Pencil, Plus, Save, Trash2, X } from "lucide-react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { Input } from "../ui/input";

interface MyReviewCardProps {
  testimonials: TestimonialType[];
  setTestimonialsAction: Dispatch<SetStateAction<TestimonialType[]>>;
  session: Session;
}

export default function MyReviewCard({
  testimonials,
  setTestimonialsAction,
  session
}: MyReviewCardProps) {
  const { showToast } = useCustomToast();
  const name = session.user?.name;
  const image = session.user?.image;
  const email = session.user?.email;

  const [isEditingTestimonial, setEditingTestimonial] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [myTestimonial, setMyTestimonial] = useState<TestimonialType>({
    name: name!,
    email: email!,
    LinkedInId: "",
    image: image!,
    review: "",
    rating: 10
  });

  const [review, setReview] = useState("");
  const [rating, setRating] = useState(10);
  const [linkedInId, setLinkedInId] = useState("");

  useEffect(() => {
    if (!session.user?.email) return;

    const userTestimonial = testimonials.find(
      (t) => t.email === session.user?.email
    );

    if (userTestimonial) {
      // Existing user
      setMyTestimonial(userTestimonial);
      setLinkedInId(userTestimonial.LinkedInId);
      setReview(userTestimonial.review);
      setRating(userTestimonial.rating);
    } else {
      // New user
      setMyTestimonial((prev) => ({
        name: session.user?.name!,
        email: session.user?.email!,
        LinkedInId: prev.LinkedInId,
        image: session.user?.image!,
        review: prev.review,
        rating: prev.rating
      }));
    }
  }, [
    session.user?.email,
    session.user?.name,
    session.user?.image,
    testimonials
  ]);

  async function submitTestimonial() {
    setSubmitting(true);
    try {
      const response = await fetch("/api/testimonial", {
        method: "POST",
        body: JSON.stringify({
          testimonial: {
            name: myTestimonial.name,
            email: myTestimonial.email,
            LinkedInId: linkedInId,
            image: myTestimonial.image,
            review: review,
            rating: rating
          }
        }),
        headers: {
          "Content-Type": "application/json",
          "x-secret-key": process.env.NEXT_PUBLIC_API_SECRET || ""
        }
      });

      const message = await response.json();

      if (message.error) {
        showToast("error", message.error);
        return;
      }

      setMyTestimonial({
        name: myTestimonial.name,
        email: myTestimonial.email,
        image: myTestimonial.image,
        LinkedInId: linkedInId,
        review: review,
        rating: rating
      });

      setTestimonialsAction((prev) => {
        const oldTestimonials = [...prev];
        const index = oldTestimonials.findIndex(
          (testimonial) => testimonial.email === myTestimonial.email
        );

        if (index !== -1) {
          // Update existing testimonial
          oldTestimonials[index] = {
            ...oldTestimonials[index],
            LinkedInId: linkedInId,
            review,
            rating
          };
        } else {
          // Add new testimonial
          oldTestimonials.push({
            ...myTestimonial,
            LinkedInId: linkedInId,
            review,
            rating
          });
        }

        return oldTestimonials;
      });

      showToast("success", message.message);
    } catch (error: any) {
      showToast("error", error.message || "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  async function deleteTestimonial() {
    try {
      const res = await fetch("/api/testimonial", {
        method: "DELETE",
        body: JSON.stringify({
          testimonial: {
            name: myTestimonial.name,
            email: myTestimonial.email,
            linkedInId: myTestimonial.LinkedInId,
            image: myTestimonial.image,
            review: "",
            rating: 10
          }
        }),
        headers: {
          "Content-Type": "application/json",
          "x-secret-key": process.env.NEXT_PUBLIC_API_SECRET || ""
        }
      });

      const message = await res.json();

      if (message.error) {
        showToast("error", message.error);
        return;
      }

      // Reset state after successful delete
      setReview("");
      setRating(10);
      setMyTestimonial({
        ...myTestimonial,
        review: "",
        rating: 10
      });

      setTestimonialsAction((prev) =>
        prev.map((testimonial) =>
          testimonial.email === myTestimonial.email
            ? { ...testimonial, review: "", rating: 10 }
            : testimonial
        )
      );

      showToast("success", message.message);
    } catch (error: { error: string } | any) {
      showToast("error", error?.error || "Something went wrong.");
    }
  }

  return (
    <div className="rounded-2xl shadow-md bg-white dark:bg-gray-800 p-6 w-full md:max-w-[18.5rem] h-full flex flex-col justify-start">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="shrink-0">
          <Image
            src={image!}
            alt={`${name}'s photo`}
            width={48}
            height={48}
            loading="lazy"
            className="rounded-full ring-2 ring-orange-500"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold line-clamp-2 text-gray-800 dark:text-gray-100">
              {name}
            </h3>
            {myTestimonial.LinkedInId && (
              <Link
                href={`https://www.linkedin.com/in/${myTestimonial.LinkedInId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:opacity-90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="w-5 h-5 fill-current">
                  <path
                    fill="#0078d4"
                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
                  <path
                    fill="#fff"
                    d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12
                    c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698
                    c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19
                    c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
                  />
                </svg>
              </Link>
            )}
          </div>
          {!isEditingTestimonial && myTestimonial.review && (
            <Rating
              initialValue={rating / 2}
              readonly
              allowFraction
              size={20}
              className="react-simple-star-rating"
              fillColorArray={[
                "#ff0000",
                "#ff1a00",
                "#ff3300",
                "#ff4d00",
                "#ff6600",
                "#ff8000",
                "#ff9900",
                "#f59e0b",
                "#f59e0b",
                "#ffb000"
              ]}
            />
          )}
        </div>
      </div>
      <div className="testimonial_card_body mt-4">
        {myTestimonial.review ? (
          <>
            {isEditingTestimonial ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submitTestimonial();
                  setEditingTestimonial(false);
                }}
                className="flex justify-start flex-col">
                <div className="flex items-center justify-start">
                  <Rating
                    initialValue={rating / 2}
                    allowFraction
                    className="react-simple-star-rating edit-rating"
                    iconsCount={5}
                    fillColorArray={[
                      "#ff0000",
                      "#ff1a00",
                      "#ff3300",
                      "#ff4d00",
                      "#ff6600",
                      "#ff8000",
                      "#ff9900",
                      "#f59e0b",
                      "#f59e0b",
                      "#ffb000"
                    ]}
                    onClick={(rate: number) => {
                      setRating(rate * 2);
                    }}
                  />

                  <Input
                    type="text"
                    required
                    placeholder="Review"
                    value={review}
                    maxLength={130}
                    onChange={(e) => {
                      setReview(e.target.value);
                    }}
                    className="mt-2 text-sm rounded-lg borderBlack bg-white dark:bg-white/10 dark:text-gray-300 transition-all outline-hidden focus-visible:ring-0 focus-visible:border-1 focus-visible:border-black/10"
                  />
                  <span className="text-gray-500 text-xs">
                    {review.length} / 130
                  </span>
                  <div className="flex items-center gap-1">
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-[2px]">
                      linkedin.com/in/
                    </p>
                    <Input
                      type="text"
                      required
                      placeholder="Your LinkedIn Id"
                      value={linkedInId}
                      maxLength={40}
                      onChange={(e) => {
                        setLinkedInId(e.target.value);
                      }}
                      className="text-sm rounded-sm shadow-none border-gray-300 dark:border-gray-700 border-x-0 border-t-0 border-b-2 px-1 py-0 font-semibold text-black dark:text-white transition-all outline-hidden focus-visible:ring-0 focus-visible:border-gray-300 dark:focus-visible:border-gray-700"
                    />
                  </div>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="lg:w-fit mt-3 text-sm text-center bg-green-600 text-white px-4 py-2 flex justify-center items-center gap-2 rounded-xl outline-hidden active:scale-95 transition">
                    <Save size={18} />
                  </button>
                  <button
                    type="reset"
                    onClick={() => {
                      setLinkedInId(myTestimonial.LinkedInId);
                      setReview(myTestimonial.review);
                      setRating(myTestimonial.rating);
                      setEditingTestimonial(false);
                    }}
                    className="lg:w-fit mt-3 text-sm text-center justify-center bg-red-600 text-white px-4 py-2 flex items-center gap-2 rounded-xl outline-hidden active:scale-95 transition">
                    <X size={18} />
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex flex-col justify-start">
                <p className="italic text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  “{myTestimonial.review}”
                </p>
                <div className="flex items-center justify-start gap-2">
                  <button
                    onClick={() => setEditingTestimonial(true)}
                    className="lg:w-fit mt-3 text-sm text-center justify-center bg-blue-500 text-white px-4 py-2 flex items-center gap-2 rounded-xl outline-hidden active:scale-95 transition">
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => {
                      deleteTestimonial();
                    }}
                    className="lg:w-fit mt-3 text-sm text-center justify-center bg-red-600 text-white px-4 py-2 flex items-center gap-2 rounded-xl outline-hidden active:scale-95 transition">
                    <Trash2 size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => signOut()}
                    className="lg:w-fit mt-3 text-sm text-center justify-center bg-gray-900 text-white px-4 py-2 flex gap-2 rounded-xl outline-hidden hover:bg-gray-950 active:scale-95 dark:bg-gray-500 transition">
                    <LogOut size={18} /> LogOut
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submitTestimonial();
              }}
              className="flex justify-start flex-col">
              <div className="flex items-center justify-start">
                <Rating
                  initialValue={rating / 2}
                  allowFraction
                  className="react-simple-star-rating add-rating"
                  iconsCount={5}
                  fillColorArray={[
                    "#ff0000",
                    "#ff1a00",
                    "#ff3300",
                    "#ff4d00",
                    "#ff6600",
                    "#ff8000",
                    "#ff9900",
                    "#f59e0b",
                    "#f59e0b",
                    "#ffb000"
                  ]}
                  onClick={(rate: number) => {
                    setRating(rate * 2);
                  }}
                />
                {/* <span className="ml-1 text-gray-500 dark:text-gray-400">/ 5</span> */}
              </div>
              <Input
                type="text"
                required
                placeholder="Review"
                value={review}
                maxLength={130}
                onChange={(e) => {
                  setReview(e.target.value);
                }}
                className="mt-2 text-sm rounded-lg borderBlack bg-white dark:bg-white/10 dark:text-gray-300 transition-all outline-hidden focus-visible:ring-0 focus-visible:border-1 focus-visible:border-black/10"
              />
              <span className="text-gray-500 text-xs">
                {review.length} / 130
              </span>
              <div className="flex items-center gap-1">
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-[2px]">
                  linkedin.com/in/
                </p>
                <Input
                  type="text"
                  required
                  placeholder="Your LinkedIn Id"
                  value={linkedInId}
                  maxLength={40}
                  onChange={(e) => {
                    setLinkedInId(e.target.value);
                  }}
                  className="text-sm rounded-sm shadow-none border-gray-300 dark:border-gray-700 border-x-0 border-t-0 border-b-2 px-1 py-0 font-semibold text-black dark:text-white transition-all outline-hidden focus-visible:ring-0"
                />
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="lg:w-fit mt-3 text-sm text-center justify-center bg-green-600 text-white px-4 py-2 flex gap-2 rounded-xl outline-hidden active:scale-95 transition">
                  <Plus size={18} /> Add
                </button>
                <button
                  type="button"
                  onClick={() => signOut()}
                  className="lg:w-fit mt-3 text-sm text-center justify-center bg-gray-900 text-white px-4 py-2 flex gap-2 rounded-xl outline-hidden hover:bg-gray-950 active:scale-95 dark:bg-gray-500 transition">
                  <LogOut size={18} /> LogOut
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
