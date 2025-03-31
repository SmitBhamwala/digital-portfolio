"use client";

import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { TestimonialType } from "@/lib/types";
import { Input } from "../ui/input";
import toast from "react-hot-toast";
import { useTheme } from "@/context/theme-context";
import { LogOut, Pencil, Plus, Save, Trash2, X } from "lucide-react";

export default function MyReviewCard() {
  const { theme } = useTheme();
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
      const res = await fetch(
        "https://smitbhamwala.vercel.app/api/testimonial",
        {
          cache: "no-store",
        }
      );
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
    const response = await fetch(
      "https://smitbhamwala.vercel.app/api/testimonial",
      {
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
        },
      }
    );
    const message = await response.json();
    var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

    if (message.error) {
      width <= 768
        ? theme == "light"
          ? toast.error(message.error)
          : toast.error(message.error, {
              style: {
                background: "rgb(51 65 85)",
                color: "#fff",
              },
            })
        : theme == "light"
          ? toast.error(message.error, { position: "top-right" })
          : toast.error(message.error, {
              position: "top-right",
              style: {
                background: "rgb(51 65 85)",
                color: "#fff",
              },
            });
      return;
    }

    setMyTestimonial({
      ...myTestimonial,
      review: review,
      rating: rating,
    });

    width <= 768
      ? theme == "light"
        ? toast.success(message.message)
        : toast.success(message.message, {
            style: {
              background: "rgb(51 65 85)",
              color: "#fff",
            },
          })
      : theme == "light"
        ? toast.success(message.message, {
            position: "top-right",
          })
        : toast.success(message.message, {
            position: "top-right",
            style: {
              background: "rgb(51 65 85)",
              color: "#fff",
            },
          });
  }

  async function deleteTestimonial() {
    const response = await fetch(
      "https://smitbhamwala.vercel.app/api/testimonial",
      {
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
        },
      }
    );
    const message = await response.json();
    var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

    if (message.error) {
      width <= 768
        ? theme == "light"
          ? toast.error(message.error)
          : toast.error(message.error, {
              style: {
                background: "rgb(51 65 85)",
                color: "#fff",
              },
            })
        : theme == "light"
          ? toast.error(message.error, { position: "top-right" })
          : toast.error(message.error, {
              position: "top-right",
              style: {
                background: "rgb(51 65 85)",
                color: "#fff",
              },
            });
      return;
    }

    width <= 768
      ? theme == "light"
        ? toast.success(message.message)
        : toast.success(message.message, {
            style: {
              background: "rgb(51 65 85)",
              color: "#fff",
            },
          })
      : theme == "light"
        ? toast.success(message.message, {
            position: "top-right",
          })
        : toast.success(message.message, {
            position: "top-right",
            style: {
              background: "rgb(51 65 85)",
              color: "#fff",
            },
          });
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
            className="object-contain rounded-full bg-orange-400 outline outline-orange-400 outline-2"
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
              >
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
                  <Input
                    type="number"
                    required
                    placeholder="Rating"
                    value={rating || 1}
                    onChange={(e) => {
                      const value = e.target.valueAsNumber;
                      if (value < 1 || value > 10) {
                        return;
                      }
                      setRating(value);
                    }}
                    min={1}
                    max={10}
                    step={1}
                    minLength={1}
                    maxLength={2}
                    className="text-sm rounded-lg borderBlack bg-white dark:bg-opacity-10 dark:text-gray-300 transition-all outline-none focus-visible:ring-0 w-24"
                  />
                  <span className="text-sm ml-2">/ 10</span>
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
              <>
                <p className="testimonial_comment text-sm">
                  &quot;{myTestimonial.review}&quot;
                </p>
                <p className="testimonial_rating mt-6 text-sm">
                  Rating: {myTestimonial.rating}/10
                </p>
                <div className="flex items-center justify-start gap-2">
                  <button
                    onClick={() => setEditingTestimonial(true)}
                    className="lg:w-fit mt-3 text-sm text-center justify-center bg-blue-500 text-white px-4 py-2 flex items-center gap-2 rounded-xl outline-none active:scale-95 transition"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => {
                      setReview("");
                      setRating(10);
                      setMyTestimonial({
                        ...myTestimonial,
                        review: "",
                        rating: 10,
                      });
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
              </>
            )}
          </div>
        ) : (
          <>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submitTestimonial();
              }}
            >
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
                <Input
                  type="number"
                  required
                  placeholder="Rating"
                  value={rating || 1}
                  onChange={(e) => {
                    const value = e.target.valueAsNumber;
                    if (value < 1 || value > 10) {
                      return;
                    }
                    setRating(value);
                  }}
                  min={1}
                  max={10}
                  step={1}
                  minLength={1}
                  maxLength={2}
                  className="text-sm rounded-lg borderBlack bg-white dark:bg-opacity-10 dark:text-gray-300 transition-all outline-none focus-visible:ring-0 w-24"
                />
                <span className="text-sm ml-2">/ 10</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <button
                  type="submit"
                  className="lg:w-fit mt-3 text-sm text-center justify-center bg-gray-900 text-white px-4 py-2 flex gap-2 rounded-xl outline-none hover:bg-gray-950 active:scale-95 dark:bg-gray-500 transition"
                >
                  <Plus size={18} /> Add Review
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
