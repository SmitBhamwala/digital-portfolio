import { TestimonialType } from "@/lib/types";
import mongoose, { Schema, model } from "mongoose";

const TestimonialSchema = new Schema<TestimonialType>(
  {
    name: {
      type: String,
      required: [true, "Name is required"]
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid"
      ]
    },
    LinkedInId: {
      type: String,
      unique: true,
      maxlength: 40,
      minlength: 1,
      required: [true, "LinkedIn is required"]
    },
    image: {
      type: String,
      required: [true, "Profile picture is required"]
    },
    rating: {
      type: Number,
      max: 10,
      min: 1,
      maxlength: 2,
      minlength: 1,
      required: [true, "Rating is required"]
    },
    review: {
      type: String,
      maxlength: 130,
      minlength: 1,
      required: [true, "Review is required"]
    }
  },
  {
    timestamps: true
  }
);

const TestimonialModel =
  mongoose.models?.testimonial ||
  model<TestimonialType>("testimonial", TestimonialSchema);

export default TestimonialModel;
