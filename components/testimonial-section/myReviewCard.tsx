"use client";

import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { TestimonialType } from "@/lib/types";
import { Input } from "../ui/input";
import { LogOut, Pencil, Plus, Save, Trash2, X } from "lucide-react";
import { Rating } from "react-simple-star-rating";
import { useCustomToast } from "@/hooks/useCustomToast";

export default function MyReviewCard() {
  const { showToast } = useCustomToast();
  const { data: session } = useSession();
  const name = session?.user?.name;
  const image = session?.user?.image;
  const email = session?.user?.email;

  const [isEditingTestimonial, setEditingTestimonial] = useState(false);

  const [myTestimonial, setMyTestimonial] = useState<TestimonialType>({
    name: name!,
    email: email!,
    LinkedInId: "",
    image: image!,
    review: "",
    rating: 10,
  });

  const [review, setReview] = useState("");
  const [rating, setRating] = useState(10);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("/api/testimonial", {
        headers: {
          "x-secret-key": process.env.NEXT_PUBLIC_API_SECRET || "",
        },
        cache: "no-store",
      });
      const data = await res.json();
      const userTestimonial = data.filter(
        (testimonial: TestimonialType) =>
          testimonial.email === session?.user?.email
      );
      if (userTestimonial[0]) {
        setMyTestimonial(userTestimonial[0]);
        setReview(userTestimonial[0].review);
        setRating(userTestimonial[0].rating);
      }
    }
    fetchPosts();
  }, [session]);

  async function submitTestimonial() {
    try {
      const response = await fetch("/api/testimonial", {
        method: "POST",
        body: JSON.stringify({
          testimonial: {
            name: myTestimonial.name,
            email: myTestimonial.email,
            LinkedInId: myTestimonial.LinkedInId,
            image: myTestimonial.image,
            review: review,
            rating: rating,
          },
        }),
        headers: {
          "Content-Type": "application/json",
          "x-secret-key": process.env.NEXT_PUBLIC_API_SECRET || "",
        },
      });

      const message = await response.json();

      if (message.error) {
        showToast("error", message.error);
        return;
      }

      setMyTestimonial({
        ...myTestimonial,
        review: review,
        rating: rating,
      });

      showToast("success", message.message);
    } catch (error: any) {
      showToast("error", error.message || "Something went wrong.");
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
            LinkedInId: myTestimonial.LinkedInId,
            image: myTestimonial.image,
            review: "",
            rating: 10,
          },
        }),
        headers: {
          "Content-Type": "application/json",
          "x-secret-key": process.env.NEXT_PUBLIC_API_SECRET || "",
        },
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
        rating: 10,
      });

      showToast("success", message.message);
    } catch (error: any) {
      showToast("error", error?.message || "Something went wrong.");
    }
  }

  return (
    <div className="borderBlack rounded-xl shadow-none h-[17rem] p-4 bg-[#f3f4f6] dark:bg-gray-800">
      <div className="testimonial_card_header flex items-center mb-6">
        <div className="linkedin_image_container mr-4">
          <Image
            src={image!}
            alt={`${name}'s LinkedIn profile picture`}
            width="40"
            height="40"
            quality="100"
            priority={false}
            draggable={false}
            className="object-contain rounded-full outline outline-orange-600 outline-2"
          />
        </div>
        <h4 className="font-medium text-lg">{name}</h4>
      </div>
      <div className="testimonial_card_body">
        {myTestimonial?.review ? (
          <div>
            {isEditingTestimonial ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submitTestimonial();
                  setEditingTestimonial(false);
                }}
                className="flex justify-between flex-col h-[11rem]"
              >
                <div>
                  <Input
                    type="text"
                    required
                    placeholder="Review"
                    value={review}
                    maxLength={130}
                    onChange={(e) => {
                      setReview(e.target.value);
                    }}
                    className="text-sm rounded-lg borderBlack bg-white dark:bg-opacity-10 dark:text-gray-300 transition-all outline-none focus-visible:ring-0"
                  />
                  <span className="text-gray-500 text-xs">
                    {review.length} / 130
                  </span>
                  <div className="flex items-center justify-start my-4">
                    <Rating
                      initialValue={rating / 2}
                      allowFraction
                      className="react-simple-star-rating edit-rating"
                      iconsCount={5}
                      fillColorArray={[
                        "red",
                        "red",
                        "#F6412D",
                        "#F6412D",
                        "#FF9800",
                        "#FF9800",
                        "#FFC100",
                        "#FFC100",
                        "#FFEC19",
                        "#FFEC19",
                      ]}
                      onClick={(rate: number) => {
                        setRating(rate * 2);
                      }}
                    />
                  </div>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <button
                    type="submit"
                    className="lg:w-fit mt-3 text-sm text-center bg-green-600 text-white px-4 py-2 flex justify-center items-center gap-2 rounded-xl outline-none active:scale-95 transition"
                  >
                    <Save size={18} />
                  </button>
                  <button
                    type="reset"
                    onClick={() => {
                      setReview(myTestimonial.review);
                      setRating(myTestimonial.rating);
                      setEditingTestimonial(false);
                    }}
                    className="lg:w-fit mt-3 text-sm text-center justify-center bg-red-600 text-white px-4 py-2 flex items-center gap-2 rounded-xl outline-none active:scale-95 transition"
                  >
                    <X size={18} />
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex flex-col justify-between h-[11rem]">
                <div>
                  <p className="testimonial_comment text-sm">
                    &quot;{myTestimonial.review}&quot;
                  </p>
                  <Rating
                    initialValue={myTestimonial.rating / 2}
                    allowFraction
                    readonly
                    className="react-simple-star-rating mt-4"
                    iconsCount={5}
                    fillColorArray={[
                      "red",
                      "red",
                      "#F6412D",
                      "#F6412D",
                      "#FF9800",
                      "#FF9800",
                      "#FFC100",
                      "#FFC100",
                      "#FFEC19",
                      "#FFEC19",
                    ]}
                  />
                </div>
                <div className="flex items-center justify-start gap-2 mt-2">
                  <button
                    onClick={() => setEditingTestimonial(true)}
                    className="lg:w-fit mt-3 text-sm text-center justify-center bg-blue-500 text-white px-4 py-2 flex items-center gap-2 rounded-xl outline-none active:scale-95 transition"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => {
                      deleteTestimonial();
                    }}
                    className="lg:w-fit mt-3 text-sm text-center justify-center bg-red-600 text-white px-4 py-2 flex items-center gap-2 rounded-xl outline-none active:scale-95 transition"
                  >
                    <Trash2 size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => signOut()}
                    className="lg:w-fit mt-3 text-sm text-center justify-center bg-gray-900 text-white px-4 py-2 flex gap-2 rounded-xl outline-none hover:bg-gray-950 active:scale-95 dark:bg-gray-500 transition"
                  >
                    <LogOut size={18} /> LogOut
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submitTestimonial();
              }}
              className="flex justify-between flex-col h-[11rem]"
            >
              <div>
                <Input
                  type="text"
                  required
                  placeholder="Review"
                  value={review}
                  maxLength={130}
                  onChange={(e) => {
                    setReview(e.target.value);
                  }}
                  className="text-sm rounded-lg borderBlack bg-white dark:bg-opacity-10 dark:text-gray-300 transition-all outline-none focus-visible:ring-0"
                />
                <span className="text-gray-500 text-xs">
                  {review.length} / 130
                </span>
                <div className="flex items-center justify-start my-4">
                  <Rating
                    initialValue={rating / 2}
                    allowFraction
                    className="react-simple-star-rating add-rating"
                    iconsCount={5}
                    fillColorArray={[
                      "red",
                      "red",
                      "#F6412D",
                      "#F6412D",
                      "#FF9800",
                      "#FF9800",
                      "#FFC100",
                      "#FFC100",
                      "#FFEC19",
                      "#FFEC19",
                    ]}
                    onClick={(rate: number) => {
                      setRating(rate * 2);
                    }}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="submit"
                  className="lg:w-fit mt-3 text-sm text-center justify-center bg-green-600 text-white px-4 py-2 flex gap-2 rounded-xl outline-none active:scale-95 transition"
                >
                  <Plus size={18} /> Add
                </button>
                <button
                  type="button"
                  onClick={() => signOut()}
                  className="lg:w-fit mt-3 text-sm text-center justify-center bg-gray-900 text-white px-4 py-2 flex gap-2 rounded-xl outline-none hover:bg-gray-950 active:scale-95 dark:bg-gray-500 transition"
                >
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
