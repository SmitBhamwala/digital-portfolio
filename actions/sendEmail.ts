"use server";

import ContactFormEmail from "@/email/contact-form-email";
import { validateString } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderName = formData.get("senderName");
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderName, 70)) {
    return {
      error: "Invalid sender name"
    };
  }
  if (!validateString(senderEmail, 70)) {
    return {
      error: "Invalid sender email"
    };
  }
  if (!validateString(message, 2000)) {
    return {
      error: "Invalid message"
    };
  }

  const messageHTML = message.split("\n");

  const { data, error } = await resend.emails.send({
    from: "Smit Bhamwala Digital Portfolio <onboarding@resend.dev>",
    to: "smitbhamwala@gmail.com",
    subject: "New Message Received",
    replyTo: senderEmail,
    react: React.createElement(ContactFormEmail, {
      message: messageHTML,
      senderEmail: senderEmail,
      senderName: senderName
    })
  });

  if (error) {
    return {
      error: error.message
    };
  }

  return {
    data
  };
};
