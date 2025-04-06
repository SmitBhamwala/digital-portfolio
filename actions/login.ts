"use server";

import { signIn } from "@/lib/auth";

export default async function LoginUsingLinkedIn() {
  await signIn("linkedin");
}
