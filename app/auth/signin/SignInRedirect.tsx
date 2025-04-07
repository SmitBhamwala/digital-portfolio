"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function SignInRedirect() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const error = searchParams.get("error");
    if (error) {
      router.replace("/#testimonials");
    }
  }, [searchParams, router]);

  return (
    <p className="h-[100vh] w-[100vw] flex items-center justify-center">
      Redirecting back...
    </p>
  );
}
