"use client";

import { Suspense } from "react";
import SignInRedirect from "./SignInRedirect";

export default function SignInPage() {
  return (
    <Suspense
      fallback={
        <p className="h-[100vh] w-[100vw] flex items-center justify-center">
          Redirecting back...
        </p>
      }>
      <SignInRedirect />
    </Suspense>
  );
}
