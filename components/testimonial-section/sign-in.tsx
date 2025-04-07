"use client";

import { TestimonialType } from "@/lib/types";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { Dispatch, SetStateAction } from "react";
import MyReviewCard from "./myReviewCard";

interface SignInProps {
  testimonials: TestimonialType[];
  setTestimonialsAction: Dispatch<SetStateAction<TestimonialType[]>>;
  session: Session | null;
}

export default function SignIn({
  testimonials,
  setTestimonialsAction,
  session
}: SignInProps) {
  async function handleSignIn() {
    await signIn("linkedin");
  }

  return (
    <>
      {session ? (
        <MyReviewCard
          testimonials={testimonials}
          setTestimonialsAction={setTestimonialsAction}
          session={session}
        />
      ) : (
        <div className="text-sm">
          <button
            onClick={async () => {
              await handleSignIn();
            }}>
            <u className="text-blue-600 dark:text-blue-500 font-bold tracking-wider">
              SignIn
            </u>
          </button>
          <span> with LinkedIn to add a review</span>
        </div>
      )}
    </>
  );
}
