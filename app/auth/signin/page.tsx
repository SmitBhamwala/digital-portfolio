"use client";

import { Suspense } from "react";
import SignInRedirect from "./SignInRedirect";

export default function SignInPage() {
  return (
    <Suspense fallback={<p>Redirecting...</p>}>
      <SignInRedirect />
    </Suspense>
  );
}
